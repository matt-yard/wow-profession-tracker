import React, { useState } from 'react';
import './DropdownList.css';
import FontAwesome from 'react-fontawesome';

export const DropdownList = ({ list, headerTitle }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  if (list.length) {
    return (
      <div className="dd-wrapper">
        <button type="button" className="dd-header" onClick={toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </button>
        {isListOpen && (
          <div role="list" className="dd-list">
            {list.map((item) => (
              <button type="button" className="dd-list-item" key={item.id}>
                {item.title} {item.selected && <FontAwesome name="check" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div>Nothing to show</div>;
  }
};
