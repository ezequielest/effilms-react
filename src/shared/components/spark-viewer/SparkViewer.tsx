import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { SparkRenderer, SplatMesh } from "@sparkjsdev/spark";
import "./spark-viewer.scss";

type Props = {
  url: string; // ej: "/models/escena.sog"
};

type Vector3 = [number, number, number];

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

export default function SparkViewer({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Cargando…");
  const hotspotRefs = useRef<Record<string, HTMLDivElement | null>>({});

  
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
          initialPoint: [0, -0.18, 0.025], //posicion del disparador flotante
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
          positionCamera: [-0.595, -0.263, 0.127],
          target: [-0.009, -0.026, 0.298],
          duration: 2500,
        },
        category: "superMarket",
        selected: false,
        visible: false,
      },
      {
        id: "Starbucks",
        info: {
          label: "Starbucks",
          address: "",
        },
        navigation: {
          initialPoint: [3.913, -0.05, -1.501], //posicion del disparador flotante
          positionCamera: [-0.595, -0, 0.127],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "cafes",
        selected: false,
        visible: false,
      },
      {
        id: "burgerKing",
        info: {
          label: "Burger King",
          address: "",
        },
        navigation: {
          initialPoint: [3.913, -0.1, -1.501], //posicion del disparador flotante
          positionCamera: [-0.595, -0.263, 0.127],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "restaurants",
        selected: false,
        visible: false,
      },
      {
        id: "toledo",
        info: {
          label: "Toledo",
          address: "Av. Independencia 3445",
        },
        navigation: {
          initialPoint: [2.276, -0.05, -0.423], //posicion del disparador flotante
          positionCamera: [-0.595, -0.263, 0.127],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "superMarket",
        selected: false,
        visible: false,
      },
      {
        id: "palkin",
        info: {
          label: "Palkin",
          address: "Av. Independencia 3501",
        },
        navigation: {
          initialPoint: [0.276, -0.05, 0.448], //posicion del disparador flotante
          positionCamera: [-0.595, -0.263, 0.127],
          target: [-0.009, -0.026, 0.298],
          duration: 2500,
        },
        category: "pharmacy",
        selected: false,
        visible: false,
      },
      {
        id: "ypf",
        info: {
          label: "YPF",
          address: "Independencia y Quintana",
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
          label: "Shell",
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
          label: "Paseo de compras",
          address: "",
        },
        navigation: {
          initialPoint: [1.043, -0.05, 0.055], //posicion del disparador flotante
          positionCamera: [-2.168, -0.957, -1.111],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "superMarket",
        selected: false,
        visible: false,
      },
      /*{
        id: "sushi",
        info: {
          label: "Sushi POP",
          address: "Av Independencia 3385",
        },
        navigation: {
          initialPoint: [1.043, -0.05, 0.055], //posicion del disparador flotante
          positionCamera: [-2.168, -0.957, -1.111],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "superMarket",
        selected: false,
        visible: false,
      },*/
  
      {
        id: "bna",
        info: {
          label: "BNA",
          address: "",
        },
        navigation: {
          //initialPoint: [0.276, -0.05, 0.448], //posicion del disparador flotante
          initialPoint: [0.619, -0.052, 0.264],
          //positionCamera: [-0.257,-0.353,-0.138],
          //target: [0.619,0.052,0.264],
          positionCamera: [-2.168, -0.957, -1.111],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "bank",
        selected: false,
        visible: false,
      },
      {
        id: "provincia",
        info: {
          label: "Provincia",
          address: "Av Independencia 3205",
        },
        navigation: {
          initialPoint: [3.403, -0.05, -1.117], //posicion del disparador flotante
          positionCamera: [-2.168, -0.957, -1.0],
          target: [0, 0, 0],
          duration: 2500,
        },
        category: "bank",
        selected: false,
        visible: false,
      },
    ]);
  

  

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Renderer (antialias false: no mejora los splats y cuesta rendimiento)
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Escena + Spark
    const scene = new THREE.Scene();
    const spark = new SparkRenderer({ renderer });
    scene.add(spark);

    // --- Cámara
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.01,
      1000
    );
    camera.position.set(0, 5, 10);

    // --- Controles estilo Google Earth / mapas
    // Click izq: desplazar | Click der: rotar | Rueda: zoom
    const controls = new MapControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = false; // el paneo se mantiene sobre el plano
    controls.maxPolarAngle = Math.PI / 2.05; // no pasar por debajo del "suelo"
    controls.minDistance = 0.5;
    controls.maxDistance = 200;
    controls.zoomToCursor = true; // zoom hacia donde apunta el mouse (como Earth)

    // --- Cargar el .sog
    const splat = new SplatMesh({ url });
    // Muchos splats vienen "cabeza abajo" (convención COLMAP/PLY); si te
    // aparece invertido, dejá esta línea. Si ya está derecho, borrala.
    splat.quaternion.set(1, 0, 0, 0);
    scene.add(splat);

    let disposed = false;
    splat.initialized
      .then(() => {
        if (disposed) return;
        setStatus("");
        // Encuadrar la cámara en el modelo
        const box = splat.getBoundingBox();
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const dist = Math.max(size.x, size.y, size.z) * 1.2;
        controls.target.copy(center);
        camera.position.set(center.x, center.y + dist * 0.6, center.z + dist);
        controls.update();
      })
      .catch((err: unknown) => {
        console.error(err);
        setStatus("Error al cargar el archivo .sog");
      });

    // --- Resize
    const onResize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // --- Loop
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });

    // --- Limpieza
    return () => {
      disposed = true;
      ro.disconnect();
      renderer.setAnimationLoop(null);
      controls.dispose();
      scene.remove(splat);
      splat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [url]);

    const handleLabelHotspot = (spot: Hotspot) => {
      /*if (spot.category === "building") {
      //setShowInfoBuilding(true);
      setShowInfo(false);
      setFlatModal(false);
    }*/

    //aca tengo que mostrar la info del spot en el modal
    setHotspots((prev) =>
      prev.map((s) => ({
        ...s,
        selected: s.id === spot.id,
      }))
    );

   /* flyTo(
      spot.navigation.positionCamera,
      spot.navigation.target,
      spot.navigation.duration ?? 1800
    ).then();*/
  };


  return (
    <section>
      <div className="spark-viewer" ref={containerRef}>
        {status && 
        <div className="spark-viewer__status">{status}</div>
        } 

                    {hotspots.map((spot) => (
        <div
          key={spot.id}
          className={`hotspot-container-labels`}
          ref={(el) => {
            hotspotRefs.current[spot.id] = el;
          }}
        >
          <button
            className="hotspot-label active"
            onClick={() => handleLabelHotspot(spot)}
          >
            {spot.info.label}
          </button>
          <div className="hotspot-line active"></div>
          <div className="hotspot-dot active"></div>
        </div>
      ))}
      </div>
    </section>

  );
}