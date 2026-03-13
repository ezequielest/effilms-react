
import React from 'react';
import './Box-card-inverted.scss';
import type { IBoxcard } from '../../../core/models/IBoxCard';

interface BoxCardProps {
    boxArray: Array<IBoxcard>;
}

export const BoxCardInverted: React.FC<BoxCardProps> = ({boxArray}) => {
  return (
    <>
        <div className='boxs-container'>
        { boxArray.map((box, index) => (
        <div className='card-discount' key={index}>
            <div className='description'>
                {box.preDescription}{box.description}{box.postDescription}
            </div>
            <div className='discount'>
                {box.preDiscount}{box.discount}{box.postDiscount}
            </div>

        </div>
        ))}
        </div>
    </>
  );
};


  export default BoxCardInverted;