import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h1
        className='
          font-bold text-[1rem] uppercase mb-1 pl-4
          md:text-2xl md:mb-4
        '
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
