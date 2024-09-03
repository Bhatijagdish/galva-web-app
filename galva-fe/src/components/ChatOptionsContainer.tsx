import React from 'react';
import ChatOption from './ChatOption';
import manager from '../pages/images/manager.png'

const ChatOptionsContainer: React.FC = () => {
  const chatOptions = [
    {
      title: "New chat",
      subtitle: "with GALVA AI",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/14fd2bb774a2039280ab6c21fe40391105b32176cf8a7c5e826de047a2f7c6c2?placeholderIfAbsent=true&apiKey=e47b9e1476b3437d80658169a47898ce",
      isComingSoon: false
    },
    {
      title: "New chat",
      subtitle: "with Expert",
      iconSrc: manager,
      isComingSoon: true
    }
  ];

  return (
    <div className="mt-20 mb-0 w-full max-w-[1300px] mx-auto max-md:mt-10 max-md:mb-2.5 z-5">
      <div className="flex flex-wrap gap-5 justify-center max-md:flex-col">
        {chatOptions.map((option, index) => (
          <div
            key={index}
           
          >
            <ChatOption
              title={option.title}
              subtitle={option.subtitle}
              iconSrc={option.iconSrc}
              isComingSoon={option.isComingSoon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatOptionsContainer;