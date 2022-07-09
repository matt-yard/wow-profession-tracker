import React, { useState } from 'react';
import './DropdownList.css';

export const DropdownList = (props) => {
  const { list, setSelected, open, setOpen, listName } = props;
  const DropdownItem = ({ item }) => {
    return (
      <a
        href="#"
        className="list-item"
        onClick={() => {
          setSelected(item);
          setOpen(!open);
        }}
      >
        {listName === 'professions' && (
          <img className="icon" src={item.iconUrl} alt="icon" />
        )}
        {item.name}
      </a>
    );
  };

  return (
    <div className="dropdown">
      {list.map((item) => {
        return <DropdownItem key={`${item.name}${item.id}`} item={item} />;
      })}
    </div>
  );
};
