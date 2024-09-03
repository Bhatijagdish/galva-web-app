import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ChatOptionProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  isComingSoon?: boolean;
}

const ChatOption: React.FC<ChatOptionProps> = ({ title, subtitle, iconSrc, isComingSoon = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'New chat' && subtitle === 'with GALVA AI') {
      navigate('/chat');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center justify-center text-[2.5rem] text-center w-[500px] h-[300px] flex-shrink-0 bg-white bg-opacity-10 rounded-3xl shadow-lg p-8 border border-white border-solid transition-all duration-300 ease-in-out hover:bg-opacity-20 hover:shadow-2xl hover:border-opacity-80 mq950:w-[400px] mq950:h-[250px] mq450:w-full mq450:h-full max-md:text-[1.5rem] max-md:p-5"
    >
      {iconSrc && (
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain aspect-square w-[100px] max-w-full"
        />
      )}
      <div className="text-[2.5rem] text-black text-opacity-60 mq950:mt-10 mq950:text-[1.5rem] mq450:text-[1rem]">
        {title} <br /> {subtitle}
      </div>
    </div>
  );
};

export default ChatOption;