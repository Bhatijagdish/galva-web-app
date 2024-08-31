import React from 'react';
import InfoCard from './InfoCard';

const cardData = [
  { text: "Powerful support in electroplating", hoverText: "Our AI offers comprehensive support in all areas of electroplating. From error diagnosis to process optimization to imparting know-how to your employees - GALVA.AI is always there to help and advise you. Use our AI to sustainably secure and improve the efficiency and quality of your galvanic processes.", className: "pt-28 pb-24" },
  { text: "Up-to-dateness and reliability through our own library", hoverText: "GALVA.AI has its own extensive library of verified specialist content, which ensures the quality of the answers. Our database is continuously updated to always provide you with the latest findings and best practices. So you can be sure that you are always up to date and benefit from the best information available.", className: "mt-20" },
  { text: "Use of the latest Chat-GPT model", hoverText: "Our AI always runs on the latest Chat-GPT model, which is continuously developed and improved. This means you benefit from the latest advances in artificial intelligence and can be sure that our AI will provide you with the best possible solutions and answers based on our own library.", className: "mt-20 pt-28 pb-24" }
];

const SupportSection: React.FC = () => (
  <main className="flex flex-col items-center justify-center text-6xl font-bold text-center text-black text-opacity-80 max-md:text-4xl z-5 w-full max-w-[1650px] h-[fit-content] max-md:w-full max-md:h-auto z-5">
    <section className="flex flex-col justify-center items-center px-20 py-40 w-full h-full rounded-3xl shadow-[0px_0px_40px_rgba(0,0,0,0.35)] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl mq450:px-5 mq450:py-20">
      <div className="flex flex-col justify-center -mb-8 w-full max-w-[1250px] max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
        {cardData.map((card, index) => (
          <InfoCard key={index} text={card.text} hoverText={card.hoverText} className={card.className} />
        ))}
      </div>
    </section>
  </main>
);

export default SupportSection;