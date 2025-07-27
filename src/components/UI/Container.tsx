import React, { type ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='
        flex flex-col 
        md:px-100 md:py-2
        container px-6 mb-6 mx-auto
      '
    >
      {children}
    </div>
  );
};

export default Container;
