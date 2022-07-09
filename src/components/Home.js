import React from 'react'
import {DropdownList} from "./DropdownList"

export const Home = ({professions}) => {
  return (
    <div>
      <DropdownList list={professions} />
    </div>
  )
}
