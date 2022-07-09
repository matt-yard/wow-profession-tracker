import React, { useState } from 'react';
import { DropdownList } from './DropdownList/DropdownList.jsx';

export const Home = ({
  professions,
  selectedProfession,
  setSelectedProfession,
  selectedRealm,
  setSelectedRealm,
  realms,
}) => {
  const [openProfessions, setOpenProfessions] = useState(false);
  const [openRealms, setOpenRealms] = useState(false);
  const DropdownButton = (props) => {
    const { open, setOpen } = props;
    return (
      <div className="list-container">
        <div className="dd-button-container">
          <a
            href="#"
            className="dropdown-button list-item"
            onClick={() => setOpen(!open)}
          >
            {props.selected.id && props.menuName === 'profession' && (
              <img src={props.selected.iconUrl} className="icon" />
            )}
            {props.selected.id
              ? `${props.selected.name}`
              : `Choose ${props.menuName}`}
          </a>
          {open && props.children}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-row">
      {/* <DropdownList list={professions} headerTitle="Select a Profession" /> */}
      <DropdownButton
        menuName="profession"
        selected={selectedProfession}
        setOpen={setOpenProfessions}
        open={openProfessions}
      >
        <DropdownList
          listName="professions"
          list={professions}
          setSelected={setSelectedProfession}
          setOpen={setOpenProfessions}
          open={openProfessions}
        />
      </DropdownButton>
      <DropdownButton
        menuName="realm"
        selected={selectedRealm}
        setOpen={setOpenRealms}
        open={openRealms}
      >
        <DropdownList
          listName="realms"
          list={realms}
          setSelected={setSelectedRealm}
          setOpen={setOpenRealms}
          open={openRealms}
        />
      </DropdownButton>
    </div>
  );
};
