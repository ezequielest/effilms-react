import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import './TresDDisplay.scss';
//import YoutubeModal from '../youtube-modal/YoutubeModal';

// Props de transformación opcionales
interface IModel {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

function Model({ url, position, rotation, scale }: IModel) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={position} rotation={rotation} scale={scale} />;
}

interface TresDViewer {
  url: string;
  heightContainer?: string;
}

function TresDDisplay({url, heightContainer = '450px'}: TresDViewer){
  //const [videoUrl, setVideoUrl] = useState('');
  //const [showModal, setShowModal] = useState(false);

  /*const handleOpenModal = (url: string) => {
      setVideoUrl('https://www.instagram.com/p/DAGtwEKRmr9/');
      setShowModal(true);
  };*/

  return (
    <div className="tres-d-display">
      <Canvas
        camera={{ position: [140, 100, 10], fov: 30 }}
        style={{ width: '100%', height: heightContainer }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model
            url={url}
            position={[0, 15, 0]}
            scale={1}
            rotation={[0, Math.PI / 2, 0]}
          />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          target={[-20, 40, 30]} // coincide con la posición del modelo
        />
      </Canvas>
    </div>
  
  );
};

export default TresDDisplay;
