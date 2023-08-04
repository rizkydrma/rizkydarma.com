import React from 'react';

const Globe = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      className='bg-[url("/ball.svg")] bg-contain bg-no-repeat absolute max-w-[600px] w-full h-full max-h-[100vh] lg:right-0 -bottom-[25%] opacity-10 dark:invert z-10'
    ></div>
  );
};

export default Globe;
