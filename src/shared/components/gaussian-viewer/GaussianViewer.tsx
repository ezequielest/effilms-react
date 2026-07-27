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
  label: string;
  description?: string;
  initialPoint: Vector3;
  positionCamera: Vector3;
  target: Vector3;
  duration?: number;
  icon?: string;
  category: string;
  visible: boolean;
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

  const hotspotRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const hotspotsRef = useRef<Hotspot[]>([]);

  const [autoRotate, setAutoRotate] = useState(false);

  const DEBUG = true;

  const [debugInfo, setDebugInfo] = useState({
    camera: [0, 0, 0] as Vector3,
    target: [0, 0, 0] as Vector3,
  });

  const [editor, setEditor] = useState({
    id: "nuevo",
    label: "Nuevo Hotspot",
    initialPoint: [0, 0, 0] as Vector3,
    positionCamera: [0, 0, 0] as Vector3,
    target: [0, 0, 0] as Vector3,
    category: "none",
    visible: true,
  });

  const [hotspots, setHotspots] = useState<Hotspot[]>([
    {
      id: "centro",
      label: "Centro",
      initialPoint: [5, -0.2, -5],
      positionCamera: [-0.768, -0.629, 1.424],
      target: [0, 0, 0],
      duration: 2500,
      category: "closeness",
      visible: true,
    },
    {
      id: "itaim",
      label: "Itaim II",
      initialPoint: [0, -0.2, 0.025], //posicion del disparador flotante
      positionCamera: [-0.17, -0.304, 0.637],
      target: [0, 0, 0],
      duration: 2500,
      category: "building",
      visible: true,
    },
    {
      id: "cafeMartinez",
      label: "Cafe Martinez",
      initialPoint: [0.5, -0.5, 0.05], //posicion del disparador flotante
      positionCamera: [0.5, -0.5, 0.05],
      target: [0, 0, 0],
      duration: 2500,
      category: "cafes",
      visible: false,
    },
    {
      id: "toledo",
      label: "Toledo",
      initialPoint: [0.2, -0.2, 0.02], //posicion del disparador flotante
      positionCamera: [0.2, -0.2, 0.02],
      target: [0, 0, 0],
      duration: 2500,
      category: "superMarket",
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
        console.log("url ", url);
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

        duration: 1800,
      },
    ]);
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
    console.log("hotspots pre", hotspots);
    setHotspots((prev) => [
      ...prev,
      {
        id: "test",
        label: "NEW TEST",
        initialPoint: [5, -0.2, -3],
        positionCamera: [-0.768, -0.629, 1.424],
        target: [0, 0, 0],
        duration: 2500,
        visible: true,
        category: "closeness",
      },
    ]);

    console.log("hotspots post", hotspots);
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

      label: editor.label,

      initialPoint: editor.initialPoint,

      positionCamera: editor.positionCamera,

      target: editor.target,
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

      const screen = project(spot.initialPoint);

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
    console.log("hotspot", hotspots);
    const filterSpots = hotspots.filter((spot) => {
      return spot.category === category;
    });

    console.log(filterSpots);

    setHotspots((prev) =>
      prev.map((spot) => ({
        ...spot,
        visible: spot.category === category,
      }))
    );
  };

  const flyTo = (
    position: Vector3,

    target: Vector3,

    duration = 1800
  ) => {
    const viewer = viewerRef.current;

    if (!viewer) return;

    const camera = viewer.camera;

    const controls = viewer.controls;

    if (!controls) return;

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
    };
  };

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
            value={editor.label}
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

      <div
        ref={containerRef}

        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {hotspots.map((spot) => (
        <button
          key={spot.id}
          ref={(el) => {
            hotspotRefs.current[spot.id] = el;
          }}
          className="hotspot-name"
          onClick={() => flyTo(spot.positionCamera, spot.target, spot.duration ?? 1800)}
        >
          {spot.label}
        </button>
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
              flyTo(view.position, view.target);
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
          Ver cafes
        </button>

        <button
          key="superMarket"
          className="btn btn-primary"
          onClick={() => {
            showPointOfInterest("superMarket");
          }}
        >
          Ver mercados
        </button>

        <button
          key="test"
          className="btn btn-primary"
          onClick={() => {
            addNewHotspotTest();
          }}
        >
          NUEVO HOTSPOT TEST
        </button>
      </div>
    </div>
  );
}
