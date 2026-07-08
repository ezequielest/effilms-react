import React from 'react';
import './Box-card.scss';
import type { IBoxcard } from '../../../core/models/IBoxCard';

interface BoxCardProps {
  boxArray: Array<IBoxcard>;
}

export const BoxCard: React.FC<BoxCardProps> = ({ boxArray }) => {
  return (
    <>
      <div className="boxs-container">
        {boxArray.map((box, index) => (
          <div className="card-discount" key={index}>
            <div className="discount">
              {box.preDescription}
              {box.discount}
              {box.postDescription}
            </div>
            <div className="description">{box.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxCard;
