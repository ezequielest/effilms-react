import './InmersiveInfo.scss';
import TresDDisplay from '../../../../shared/components/3d-building/TresDDisplay';
//import YoutubeModal from '../youtube-modal/YoutubeModal';

function InmersiveInfo() {
  //const [videoUrl, setVideoUrl] = useState('');
  //const [showModal, setShowModal] = useState(false);

  /*const handleOpenModal = (url: string) => {
      setVideoUrl('https://www.instagram.com/p/DAGtwEKRmr9/');
      setShowModal(true);
  };*/

  return (
    <div className="Tres-d-model spad">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 text-center building">
            <TresDDisplay url={'/3d/torre.glb'} />
          </div>
          <div className="col-md-12 col-lg-6 text-center">
            <div className="description-container">
              <div className="section-title">
                <label>Próximamente</label>
                <h2>3D INMERSIVO</h2>
                <span>
                  Vende el proyecto de la manera más innovadora, desplega todo el potencial en un solo lugar.
                </span>
                {/*<a
                  target="_blank"
                  href="studio"
                  className="btn primary-btn btn-center"
                >
                  CONOCER MÁS
                </a>*/}
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría obtener más información sobre los proyectos inmersivos."
                  className="btn primary-btn btn-center"
                >
                  QUIERO CONTACTARME
                </a>
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

export default InmersiveInfo;
