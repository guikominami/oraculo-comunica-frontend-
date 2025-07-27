import React from "react";
import "./ListItem.css";

const ListItem: React.FC<{
  itemId: string;
  item: string;
  onListClick: (id: string, name: string) => void;
  listItemSelectedId?: string;
}> = ({ itemId, item, onListClick, listItemSelectedId }) => {
  return (
    <li
      id={listItemSelectedId === itemId ? "active_item" : ""}
      className='
            w-full
            rounded-xl p-2 m-1 shadow 
            outline outline-black/10
            dark:-outline-offset
            transition delay-150 
            duration-300 ease-in-out  
          hover:bg-gray-100 active:bg-gray-100
          '
      onClick={() => onListClick(itemId, item)}
    >
      {item}
    </li>
  );
};

export default ListItem;
