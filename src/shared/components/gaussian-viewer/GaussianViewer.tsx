import { useEffect, useRef, useState } from "react";
import * as GS from "@mkkellogg/gaussian-splats-3d";
import * as THREE from "three";
import "./GaussianViewer.scss";

type Vector3 = [number, number, number];

type CameraView = {
  name: string;
  position: Vector3;
  target: Vector3;
};

type ScreenPosition = {
  x: number;
  y: number;
  visible: boolean;
};

type Hotspot = {
  id: string;
  category: string;
  visible: boolean;
  selected: boolean;
  navigation: {
    initialPoint: Vector3;
    positionCamera: Vector3;
    target: Vector3;
    duration: number;
  };
  info: {
    label: string;
    address: string;
    description?: string;
    image?: string;
  };
};

type PointsOfInterests = {
  name: string;
  positionCamera: Vector3;
  target: Vector3;
  points: Array<Vector3>;
};

// Easing cinematográfico
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface Gaussian {
  url: string;
}

export default function GaussianViewer({ url }: Gaussian) {
  const containerRef = useRef<HTMLDivElement>(null);

  const viewerRef = useRef<any>(null);

  const animationRef = useRef<number | null>(null);

  const hotspotAnimationRef = useRef<number | null>(null);

  const hotspotRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hotspotsRef = useRef<Hotspot[]>([]);
  const hotspotLineRefs = useRef<Hotspot[]>([]);

  const [autoRotate, setAutoRotate] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const DEBUG = true;

  const [debugInfo, setDebugInfo] = useState({
    camera: [0, 0, 0] as Vector3,
    target: [0, 0, 0] as Vector3,
  });

  const [editor, setEditor] = useState<Hotspot>({
    id: "centro",
    selected: false,
    info: {
      label: "Centro",
      address: "",
      description: "",
    },
    navigation: {
      initialPoint: [5, -0.2, -5],
      positionCamera: [-0.768, -0.629, 1.424],
      target: [0, 0, 0],
      duration: 2500,
    },
    category: "closeness",
    visible: true,
  });

  const [hotspots, setHotspots] = useState<Hotspot[]>([
    {
      id: "centro",
      selected: false,
      info: {
        label: "Centro",
        address: "",
        description: "",
      },
      navigation: {
        initialPoint: [5, -0.2, -5],
        positionCamera: [-0.768, -0.629, 1.424],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "closeness",
      visible: true,
    },
    {
      id: "itaim",
      info: {
        label: "Itaim II",
        address: "Quintana e Independencia",
      },
      navigation: {
        initialPoint: [0, -0.2, 0.025], //posicion del disparador flotante
        positionCamera: [-0.17, -0.304, 0.637],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "building",
      selected: true,
      visible: true,
    },
    {
      id: "vea",
      info: {
        label: "Vea",
        address: "Quintana e Independencia",
      },
      navigation: {
        initialPoint: [-0.015, -0.1, 0.704], //posicion del disparador flotante
        positionCamera: [-2.168, -0.957, -1.111],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "superMarket",
      selected: false,
      visible: false,
    },
    {
      id: "starbacks",
      info: {
        label: "Starback",
        address: "",
      },
      navigation: {
        initialPoint: [3.913, -0.1, -1.501], //posicion del disparador flotante
        positionCamera: [0.5, -0.5, 0.05],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "cafes",
      selected: false,
      visible: false,
    },
    {
      id: "toledo",
      info: {
        label: "Toledo",
        address: "",
      },
      navigation: {
        initialPoint: [2.276, -0.05, -0.423], //posicion del disparador flotante
        positionCamera: [0.2, -0.2, 0.02],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "superMarket",
      selected: false,
      visible: false,
    },
    {
      id: "ypf",
      info: {
        label: "YPF",
        address: "",
      },
      navigation: {
        initialPoint: [0.276, -0.05, 0.448], //posicion del disparador flotante
        positionCamera: [-0.595, -0.263, 0.127],
        target: [-0.009, -0.026, 0.298],
        duration: 2500,
      },
      category: "serviceStation",
      selected: false,
      visible: false,
    },
    {
      id: "shell",
      info: {
        label: "shell",
        address: "",
      },
      navigation: {
        initialPoint: [2.629, -0.05, -0.788], //posicion del disparador flotante
        positionCamera: [-1.124, -0.805, -0.879],
        target: [0.131, -0.162, -0.486],
        duration: 2500,
      },
      category: "serviceStation",
      selected: false,
      visible: false,
    },
    {
      id: "feria",
      info: {
        label: "Feria",
        address: "",
      },
      navigation: {
        initialPoint: [1.043, -0.05, 0.055], //posicion del disparador flotante
        positionCamera: [0.2, -0.2, 0.02],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "superMarket",
      selected: false,
      visible: false,
    },

    {
      id: "bna",
      info: {
        label: "BNA",
        address: "",
      },
      navigation: {
        initialPoint: [0.276, -0.05, 0.448], //posicion del disparador flotante
        positionCamera: [0.2, -0.2, 0.02],
        target: [0, 0, 0],
        duration: 2500,
      },
      category: "bank",
      selected: false,
      visible: false,
    },
  ]);

  const views: CameraView[] = [
    {
      name: "Primer plano",
      position: [-0.149, -0.177, 0.424],
      target: [0.007, -0.002, 0.003],
    },
  ];

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "c") {
      captureCamera();
    }
  };

  useEffect(() => {
    hotspotsRef.current = hotspots;
    hotspotLineRefs.current = hotspots;
  }, [hotspots]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    if (!containerRef.current) return;

    let disposed = false;

    const init = async () => {
      const viewer = new GS.Viewer({
        rootElement: containerRef.current!,

        cameraUp: [0, -1, 0],
        initialCameraPosition: [-0.435, -0.662, 1.647],
        initialCameraLookAt: [0, 0, 0],
      });

      viewerRef.current = viewer;

      if (viewer.controls) {
        viewer.controls.maxPolarAngle = 1.2;
      }

      try {
        await viewer.addSplatScene(url);

        if (disposed) return;

        setupSky();

        viewer.start();

        startHotspotTracking();
      } catch (error) {
        console.error("Error loading gaussian splat:", error);
      }
    };

    init();

    return () => {
      window.removeEventListener("keydown", onKeyDown);

      disposed = true;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (hotspotAnimationRef.current) {
        cancelAnimationFrame(hotspotAnimationRef.current);
      }

      if (viewerRef.current) {
        viewerRef.current.dispose();

        viewerRef.current = null;
      }
    };
  }, []);

  const addHotspot = () => {
    setHotspots((prev) => [
      ...prev,
      {
        ...editor,
        visible: true,
      },
    ]);
  };

  const selectHotspot = async (hotspot: Hotspot) => {
    // Deselecciona todos y selecciona el elegido
    setHotspots((prev) =>
      prev.map((spot) => ({
        ...spot,
        selected: spot.id === hotspot.id,
      }))
    );

    // Mueve la cámara
    await flyTo(
      hotspot.navigation.positionCamera,
      hotspot.navigation.target,
      hotspot.navigation.duration
    );
  };

  const project = (point: Vector3): ScreenPosition => {
    const viewer = viewerRef.current;

    if (!viewer || !containerRef.current) {
      return {
        x: 0,
        y: 0,
        visible: false,
      };
    }

    const camera = viewer.camera;

    const vector = new THREE.Vector3(point[0], point[1], point[2]);

    vector.project(camera);

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    return {
      x: ((vector.x + 1) / 2) * width,
      y: ((-vector.y + 1) / 2) * height,
      visible: vector.z >= -1 && vector.z <= 1,
    };
  };

  const addNewHotspotTest = () => {
    setHotspots((prev) => [
      ...prev,
      {
        id: "test",
        info: {
          label: "NEW TEST",
          address: "",
        },
        navigation: {
          initialPoint: [5, -0.2, -3],
          positionCamera: [-0.768, -0.629, 1.424],
          target: [0, 0, 0],
          duration: 2500,
        },
        visible: true,
        selected: false,
        category: "closeness",
      },
    ]);
  };

  const exportHotspots = () => {
    console.clear();

    console.log(
      JSON.stringify(
        hotspots,

        null,

        4
      )
    );
  };

  const setupSky = () => {
    const viewer = viewerRef.current;

    if (!viewer || !viewer.threeScene) return;

    const loader = new THREE.TextureLoader();

    loader.load(
      "/sky/sky.jpg",

      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        texture.colorSpace = THREE.SRGBColorSpace;

        viewer.threeScene.background = texture;
      }
    );
  };

  const captureCamera = () => {
    setEditor((prev) => ({
      ...prev,

      positionCamera,

      target,
    }));

    const viewer = viewerRef.current;

    if (!viewer) return;

    const camera = viewer.camera;
    const controls = viewer.controls;

    if (!controls) return;

    const positionCamera: Vector3 = [
      Number(camera.position.x.toFixed(3)),
      Number(camera.position.y.toFixed(3)),
      Number(camera.position.z.toFixed(3)),
    ];

    const target: Vector3 = [
      Number(controls.target.x.toFixed(3)),
      Number(controls.target.y.toFixed(3)),
      Number(controls.target.z.toFixed(3)),
    ];

    setDebugInfo({
      camera: positionCamera,

      target,
    });

    console.clear();

    console.log("positionCamera:", positionCamera);

    console.log("target:", target);

    navigator.clipboard.writeText(
      `positionCamera: [${positionCamera.join(",")}],
target: [${target.join(",")}]`
    );
  };

  const captureInitialPoint = () => {
    const viewer = viewerRef.current;

    if (!viewer) return;

    setEditor((prev) => ({
      ...prev,

      initialPoint: [viewer.camera.position.x, viewer.camera.position.y, viewer.camera.position.z],
    }));
  };

  const exportHotspot = () => {
    console.clear();

    console.log({
      id: editor.id,

      label: editor.info.label,

      initialPoint: editor.navigation.initialPoint,

      positionCamera: editor.navigation.positionCamera,

      target: editor.navigation.target,
    });
  };

  const startHotspotTracking = () => {
    const animate = () => {
      updateHotspots();

      hotspotAnimationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const updateHotspots = () => {
    hotspotsRef.current.forEach((spot) => {
      const button = hotspotRefs.current[spot.id];

      if (!button) return;

      const screen = project(spot.navigation.initialPoint);

      console.log(spot.id, screen);

      button.style.left = `${screen.x}px`;
      button.style.top = `${screen.y}px`;

      button.style.display = spot.visible && screen.visible ? "block" : "none";
    });
  };

  const toggleRotation = () => {
    const viewer = viewerRef.current;

    if (!viewer) return;

    const controls = viewer.controls;

    if (!controls) return;

    controls.autoRotate = !controls.autoRotate;

    controls.autoRotateSpeed = 1.2;

    setAutoRotate(controls.autoRotate);
  };

  const showPointOfInterest = (category: string) => {
    let camPosition: Vector3 = [0, 0, 0];
    if (category === "superMarket") {
      camPosition = [-2.168, -0.957, -1.111];
    } else {
      camPosition = [-0.58, -0.902, 2.104];
    }

    flyTo(camPosition, [0, 0, 0]).then(() => {
      setHotspots((prev) =>
        prev.map((spot) => ({
          ...spot,
          visible: spot.category === category || spot.category === "building",
        }))
      );

      setShowInfo(true);
    });
  };

  const handleLabelHotspot = (spot: Hotspot) => {
    //aca tengo que mostrar la info del spot en el modal

    flyTo(
      spot.navigation.positionCamera,
      spot.navigation.target,
      spot.navigation.duration ?? 1800
    ).then();
  };

  const flyTo = (position: Vector3, target: Vector3, duration = 1800): Promise<void> => {
    return new Promise((resolve) => {
      const viewer = viewerRef.current;

      if (!viewer) {
        resolve();
        return;
      }

      const camera = viewer.camera;
      const controls = viewer.controls;

      if (!controls) {
        resolve();
        return;
      }

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const startPosition = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };

      const startTarget = {
        x: controls.target.x,
        y: controls.target.y,
        z: controls.target.z,
      };

      const start = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = easeInOutCubic(progress);

        camera.position.set(
          startPosition.x + (position[0] - startPosition.x) * eased,
          startPosition.y + (position[1] - startPosition.y) * eased,
          startPosition.z + (position[2] - startPosition.z) * eased
        );

        controls.target.set(
          startTarget.x + (target[0] - startTarget.x) * eased,
          startTarget.y + (target[1] - startTarget.y) * eased,
          startTarget.z + (target[2] - startTarget.z) * eased
        );

        controls.update();

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    });
  };

  const visibleHotspots = hotspots.filter((spot) => spot.visible && spot.category !== "building");

  return (
    <div
      className="gaussian-container"

      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {DEBUG && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 320,
            padding: 20,
            background: "rgba(0,0,0,.75)",
            backdropFilter: "blur(20px)",
            borderRadius: 12,
            color: "#fff",
            fontFamily: "monospace",
            fontSize: 13,
            zIndex: 999,
          }}
        >
          <h6>DEBUG</h6>

          <hr />

          <strong>Camera</strong>

          <pre>{JSON.stringify(debugInfo.camera, null, 2)}</pre>

          <strong>Target</strong>

          <pre>{JSON.stringify(debugInfo.target, null, 2)}</pre>

          <button className="btn btn-success" onClick={captureCamera}>
            Guardar Cámara
          </button>

          <button className="btn btn-danger" onClick={captureInitialPoint}>
            Guardar Punto
          </button>

          <button className="btn btn-primary" onClick={exportHotspot}>
            Copiar JSON
          </button>

          <input
            className="form-control mb-2"
            value={editor.info.label}
            onChange={(e) =>
              setEditor((prev) => ({
                ...prev,
                label: e.target.value,
              }))
            }
          />
          <input
            className="form-control mb-3"
            value={editor.id}
            onChange={(e) =>
              setEditor((prev) => ({
                ...prev,
                id: e.target.value,
              }))
            }
          />

          <button className="btn btn-success w-100" onClick={addHotspot}>
            Agregar Hotspot
          </button>

          <button className="btn btn-warning w-100 mt-2" onClick={exportHotspots}>
            Exportar Hotspots
          </button>
        </div>
      )}

      {showInfo && (
        <div
          className="info-hotspot"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 320,
            padding: 20,
            background: "rgba(0,0,0,.75)",
            backdropFilter: "blur(20px)",
            borderRadius: 12,
            color: "#fff",
            fontFamily: "monospace",
            fontSize: 13,
            zIndex: 999,
          }}
        >
          <h3 className="title mb-4">HOTSPOTS</h3>

          <div className="hotspot-list">
            {visibleHotspots.map((spot) => (
              <div key={spot.id} className={`hotspot-card ${spot.selected ? "active" : ""}`}>
                <div className="hotspot-card__header">
                  <div>
                    <span className="label">Nombre</span>
                    <h5>{spot.info.label}</h5>
                  </div>

                  <span className="badge bg-secondary">{spot.category}</span>
                </div>

                <div className="hotspot-card__body">
                  <span className="label">Ubicación</span>
                  <p>{spot.info.address}</p>
                </div>

                <div className="hotspot-card__footer">
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => selectHotspot(spot)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LABEL SPOT */}
      <div
        ref={containerRef}

        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className={`hotspot-container`}
          ref={(el) => {
            hotspotRefs.current[spot.id] = el;
          }}
        >
          <button
            className={`hotspot-label ${spot.selected ? "active" : ""}`}
            onClick={() => handleLabelHotspot(spot)}
          >
            {spot.info.label}
          </button>
          <div className={`hotspot-line ${spot.selected ? "active" : ""}`}></div>
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          display: "flex",
          gap: 10,
        }}
      >
        <button
          className="btn btn-primary"

          onClick={toggleRotation}
        >
          {autoRotate ? "Detener rotación" : "Rotar modelo"}
        </button>

        {views.map((view) => (
          <button
            key={view.name}
            className="btn btn-primary"
            onClick={() => {
              flyTo(view.position, view.target).then();
            }}
          >
            {view.name}
          </button>
        ))}

        <button
          key="cafes"
          className="btn btn-primary"
          onClick={() => {
            showPointOfInterest("cafes");
          }}
        >
          Cafés
        </button>

        <button
          key="bank"
          className="btn btn-primary"
          onClick={() => {
            showPointOfInterest("bank");
          }}
        >
          Bancos
        </button>

        <button
          key="service-station"
          className="btn btn-primary"
          onClick={() => {
            showPointOfInterest("serviceStation");
          }}
        >
          Est de Servicio
        </button>

        <button
          key="superMarket"
          className="btn btn-primary"
          onClick={() => {
            showPointOfInterest("superMarket");
          }}
        >
          Comercios
        </button>

        {/*<button
          key="test"
          className="btn btn-primary"
          onClick={() => {
            addNewHotspotTest();
          }}
        >
          NUEVO HOTSPOT TEST
        // </button>*/}
      </div>
    </div>
  );
}
