import React, { type ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='
        flex flex-col 
        md:px-60 md:py-8
        container px-8 py-4 mx-auto
        
      '
    >
      {children}
    </div>
  );
};

export default Container;
