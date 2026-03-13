// src/components/YoutubeModal.tsx

import { Modal } from 'react-bootstrap';

interface YoutubeModalProps {
  show: boolean;
  onHide: () => void;
  videoUrl: string;
}

const YoutubeModal = ({ show, onHide, videoUrl }: YoutubeModalProps) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body style={{ padding: 0 }}>
        <div className="embed-responsive embed-responsive-16by9">
          {show && (
            <iframe
              className="embed-responsive-item"
              src={videoUrl}
              allowFullScreen
              style={{ width: '100%', height: '400px', border: 'none' }}
            ></iframe>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default YoutubeModal;
