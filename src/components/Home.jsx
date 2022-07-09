import React from 'react';
import { DropdownList } from './DropdownList/DropdownList.jsx';

export const Home = ({ professions }) => {
  return (
    <div>
      <DropdownList list={professions} headerTitle="Select a Profession" />
    </div>
  );
};
