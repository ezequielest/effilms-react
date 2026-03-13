// src/home/components/BoxServices.tsx

import { useState } from 'react';

import './BoxServices.scss';
import YoutubeModal from '../../../../shared/components/youtube-modal/YoutubeModal';

const services = [
  {
    type: 'video',
    name: 'VIDEO',
    example: 'https://www.youtube.com/embed/qtWw8xcVfXI?si=m5ocbQHuud1U6Par'
  },
  {
    type: 'videoDron',
    name: 'VIDEO + DRON',
    example: 'https://www.youtube.com/embed/oaGRbR6nAA8'
  },
  {
    type: 'conduccion',
    name: 'CONDUCCIÓN',
    example: 'https://www.youtube.com/embed/A-cVVHbjDhc'
  },
  {
    type: 'conduccionDron',
    name: 'CONDUCCIÓN + DRON',
    example: 'https://www.youtube.com/embed/6hjBbI25YD0'
  },
  {
    type: 'dron',
    name: 'DRON EXTERIOR',
    example: 'https://www.youtube.com/embed/kzp4n9qXIeY'
  },
  {
    type: 'fpv',
    name: 'DRON FPV',
    example: 'https://www.youtube.com/embed/PT5w3ITbgBE'
  }
];

function BoxServices() {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpenModal = (type: string) => {
    const service = services.find(s => s.type === type);
    if (service) {
      setVideoUrl(service.example);
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="bg-gray-0 ef-services" id="servicios">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span>Estos son</span>
                <h2>Nuestros servicios</h2>
              </div>
            </div>
          </div>
          <div className="row ef-services__container">
            {services.map(service => (
              <div key={service.type} className="ef-services__card">
                <a onClick={() => handleOpenModal(service.type)}>
                  <div className='name-service'>{service.name}</div>
                  <div className='see-video'>VER VIDEO</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <YoutubeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        videoUrl={videoUrl}
      />
    </>
  );
}

export default BoxServices;
