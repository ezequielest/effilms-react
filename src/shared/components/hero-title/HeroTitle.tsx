import React from 'react';
import './HeroTitle.scss';

interface HeroTitleProps {
  title: string;
  description?: string;
  ancle?: string
}

export const HeroTitle: React.FC<HeroTitleProps> = ({title, description, ancle}) => {
return (
    <>
<section id={ancle} className="hero-container">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <span className="hero-title">{title}
                    <div className="hero-box"></div>
                </span>
                {description && <div className="hero-description">{description}</div>}
            </div>
        </div>
    </div>
</section>  
    </>
);
};

export default HeroTitle;
      