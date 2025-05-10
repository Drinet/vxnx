import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[#EF0107] to-[#212121] opacity-90">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7248332/pexels-photo-7248332.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/11822180/pexels-photo-11822180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-contain bg-right-bottom bg-no-repeat opacity-40 hidden md:block"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70"></div>
    </div>
  );
};

export default Background;