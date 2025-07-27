import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h1
        className='
          font-bold text-[1rem] uppercase mb-1 pl-2
          md:text-2xl md:mb-2
        '
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
