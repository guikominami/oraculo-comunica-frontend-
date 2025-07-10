import React from "react";
import "./ListItem.css";

const ListItem: React.FC<{
  itemId: number | string;
  item: string;
  onListClick: (id: number | string, name: string) => void;
  listItemSelectedId?: number;
}> = ({ itemId, item, onListClick, listItemSelectedId }) => {
  return (
    <li
      id={listItemSelectedId === itemId ? "active_item" : ""}
      className='
            rounded-xl p-2 m-2 shadow 
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
