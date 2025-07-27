import React, { type ReactNode } from "react";

const ListContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className='relative h-53 md:h-80 overflow-y-auto overflow-x-hidden'>
        <ul className='py-2 divide-y-2 divide-gray-200 cursor-pointer'>
          {children}
        </ul>
      </div>
    </>
  );
};

export default ListContainer;
