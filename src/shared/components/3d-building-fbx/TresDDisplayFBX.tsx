import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import "./TresDDisplayFBX.scss";

interface IModel {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

function Model({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: IModel) {
  const scene = useFBX(url);
  const pivotRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!pivotRef.current) return;

    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();

    box.getCenter(center);

    scene.position.x -= center.x;
    scene.position.z -= center.z;
  }, [scene]);

  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.computeVertexNormals();
      object.frustumCulled = false;
    }
  });

  return (
    <group ref={pivotRef} position={position}>
      <primitive object={scene} rotation={rotation} scale={scale} />
    </group>
  );
}

interface TresDViewer {
  url: string;
  heightContainer?: string;
}

function TresDDisplayFBX({ url, heightContainer = "450px" }: TresDViewer) {
  return (
    <div className="tres-d-display">
      <Canvas
        camera={{
          position: [140, 100, 500],
          fov: 30,
          near: 0.1,
          far: 2000,
        }}
        gl={{
          antialias: true,
          logarithmicDepthBuffer: true,
        }}
        style={{
          width: "100%",
          height: heightContainer,
        }}
      >
        <ambientLight intensity={0.3} />

        <directionalLight position={[-2, 5, 2]} intensity={1} />

        <Suspense fallback={null}>
          <Model url={url} position={[0, 15, 0]} scale={1} rotation={[0, Math.PI / 2, 0]} />

          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          target={[0, 15, 0]}
          enableDamping
          dampingFactor={0.05}
        ></OrbitControls>
      </Canvas>
    </div>
  );
}

export default TresDDisplayFBX;
