import React, { useState } from 'react';
import './info.css'; // Ensure the CSS file is imported

interface InfoCardProps {
  text: string;
  hoverText: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text, hoverText, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`px-16 py-20 w-full rounded-3xl bg-white bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mq950:px-10 mq950:py-16 mq450:px-5 mq450:py-5 ${className} card-transition`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`text-center font-jura font-normal leading-normal transition-all duration-300 ease-out text-[2.25rem] mq950:text-[1.5rem] mq450:text-[1.2rem] ${
          isHovered ? 'text-fade-in' : 'text-fade-out'
        }`}
      >
        {isHovered ? hoverText : text}
      </p>
    </section>
  );
};

export default InfoCard;