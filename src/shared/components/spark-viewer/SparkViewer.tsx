import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { SparkRenderer, SplatMesh } from "@sparkjsdev/spark";
import "./sparkviewer.scss";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

type Props = {
  url: string; // ej: "/splats/escena.sog"
};

export default function SparkViewer({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let started = false;
    let cleanup: (() => void) | undefined;

    const init = () => {
      const renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const spark = new SparkRenderer({ renderer });
      scene.add(spark);

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.01,
        1000
      );
      camera.position.set(0, 1, 10);

      const controls = new MapControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2.05;
      controls.minDistance = 0.5;
      controls.maxDistance = 200;
      controls.zoomToCursor = true;

      const splat = new SplatMesh({ url });
      splat.quaternion.set(1, 0, 0, 0);
      scene.add(splat);

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshNormalMaterial() // no necesita luces
      );
      cube.position.set(0, 0, 0);
      scene.add(cube);

      const transform = new TransformControls(camera, renderer.domElement);
transform.attach(cube);
transform.setMode("translate"); // "translate" | "rotate" | "scale"
transform.setSize(0.8);
scene.add(transform.getHelper());


// Mientras arrastrás el gizmo, desactivar la cámara (si no, se mueven los dos)
transform.addEventListener("dragging-changed", (e) => {
  controls.enabled = !e.value;

  // Atajos: W mover, E rotar, R escalar
const onKey = (e: KeyboardEvent) => {
  if (e.key === "w") transform.setMode("translate");
  if (e.key === "r") transform.setMode("rotate");
  if (e.key === "e") transform.setMode("scale");
};
window.addEventListener("keydown", onKey);

});


      const ready = splat.initialized;
      ready
        .then(() => {
          if (cancelled) return;
          console.log("splat listo", splat.numSplats);
          setIsLoaded(true);
          const box = splat.getBoundingBox();
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const dist = Math.max(size.x, size.y, size.z) * 0.05;
          camera.position.set(center.x, center.y + dist * 0.6, center.z + dist);
          controls.update();
        })
        .catch((err: unknown) => {
          if (cancelled) return;
          console.error("splat error", err);
          setIsLoaded(false);
        });

      const ro = new ResizeObserver(() => {
        const { clientWidth: w, clientHeight: h } = container;
        if (!w || !h) return;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      });
      ro.observe(container);

      renderer.setAnimationLoop(() => {
        controls.update();
        renderer.render(scene, camera);
      });

      return () => {
        ro.disconnect();
        renderer.setAnimationLoop(null);
        controls.dispose();
        scene.remove(splat);
        // Esperar a que termine la carga antes de liberar el splat
        ready.catch(() => {}).finally(() => splat.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    };

    // No inicializar hasta que el contenedor tenga tamaño real
    const waitForSize = new ResizeObserver(() => {
      if (started || cancelled) return;
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        started = true;
        waitForSize.disconnect();
        cleanup = init();
      }
    });
    waitForSize.observe(container);

    return () => {
      cancelled = true;
      waitForSize.disconnect();
      cleanup?.();
    };
  }, [url]);

  return (
    <div className="spark-viewer" ref={containerRef}>
      {!isLoaded && <div>Cargando splat...</div>}
      {isLoaded && <div className="spark-viewer__status"></div>}
    </div>
  );
}