import React, { type ReactNode } from "react";

const Section: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='flex flex-col mt-18 md:mt-12
                md:px-30 md:py-4'
    >
      {children}
    </div>
  );
};

export default Section;
