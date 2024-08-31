import React from 'react';

const GalvaInfoBox: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-start gap-[50px] max-w-[1650px] w-full h-[fit-content] rounded-[25px] p-[50px] bg-gradient-to-r from-[rgba(255,255,255,0.10)] via-[rgba(153,153,153,0.10)] to-[rgba(255,255,255,0.10)] shadow-[0_0_40px_0_rgba(0,0,0,0.35)] backdrop-blur-[17.5px]">
        <div className="w-[calc(50%-50px)] mq950:w-full flex flex-col items-center text-center p-[20px] bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-[2.3rem] mq950:text-[1.5rem] mq450:text-[1.2rem] font-bold mb-4">
            Knowledge and expertise on demand
          </h3>
          <p className="text-[1.8rem] mq950:text-[1.25rem] mq450:text-[1rem]">
            With GALVA.AI, you always have access to extensive knowledge and expertise in the field of electroplating. Whether you need a quick answer to a specific question or want to conduct in-depth research - our AI is available to you around the clock.
          </p>
        </div>
        <div className="w-[calc(50%-50px)] mq950:w-full flex flex-col items-center text-center p-[20px] bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-[2.3rem] mq950:text-[1.5rem] mq450:text-[1.2rem] font-bold mb-4">
            Now also available as an app
          </h3>
          <p className="text-[1.8rem] mq950:text-[1.25rem] mq450:text-[1rem]">
            Look forward to even more flexibility and access options - GALVA.AI is now also available as an app for Android and Apple! No matter where you are, you always have the support of our powerful AI at hand. Download the GALVA.AI app today and benefit from the advantages of our technology on the go.
          </p>
        </div>
        <div className="w-[calc(50%-50px)] mq950:w-full flex flex-col items-center text-center p-[20px] bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-[2.3rem] mq950:text-[1.5rem] mq450:text-[1.2rem] font-bold mb-4">
            Time and cost savings
          </h3>
          <p className="text-[1.8rem] mq950:text-[1.25rem] mq450:text-[1rem]">
            With the support of our AI, you save valuable time and reduce costs. GALVA.AI provides you with research and recommendations for action based on your problem description, so that you can concentrate on your core business.
          </p>
        </div>
        <div className="w-[calc(50%-50px)] mq950:w-full flex flex-col items-center text-center p-[20px] bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-[2.3rem] mq950:text-[1.5rem] mq450:text-[1.2rem] font-bold mb-4">
            Increased efficiency and error reduction
          </h3>
          <p className="text-[1.8rem] mq950:text-[1.25rem] mq450:text-[1rem]">
            With GALVA.AI you can make your processes more efficient and identify and correct errors at an early stage. Our AI helps you solve complex problems quickly and helps you to continuously improve the quality of your products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalvaInfoBox;