import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import './3d-building.scss'
//import YoutubeModal from '../youtube-modal/YoutubeModal';

// Props de transformación opcionales
interface IModel {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}


function Model({ url, position, rotation, scale }: IModel) {
  const { scene } = useGLTF(url)
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

function TresDBuilding() {
  //const [videoUrl, setVideoUrl] = useState('');
  //const [showModal, setShowModal] = useState(false);

  /*const handleOpenModal = (url: string) => {
      setVideoUrl('https://www.instagram.com/p/DAGtwEKRmr9/');
      setShowModal(true);
  };*/

  return (
    <div className='Tres-d-model spad'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 text-center building">
          <Canvas 
            camera={{ position: [140, 120, 10], fov: 30 }} 
            style={{width: "100%", height: "450px"}}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Model 
                url="/3d/torre.glb" 
                position={[0, 10, 0]} 
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
          <div className="col-md-12 col-lg-6 text-center">
            <div className='description-container'>
              <div className="section-title">
                <h2>Integraciones 3D</h2>
                <span>Implementamos técnicas innovadoras para la integración 3D en entornos reales</span>
                <a target="_blank" 
                    href='https://www.instagram.com/p/DAGtwEKRmr9/' 
                    className="btn primary-btn btn-center">VER VIDEO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<YoutubeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        videoUrl={videoUrl}
      />*/}
    </div>
  );
}

export default TresDBuilding
