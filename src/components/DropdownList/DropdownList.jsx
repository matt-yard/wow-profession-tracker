import React from 'react'
import "./DropdownList.css"

export const DropdownList = ({ list }) => {

  if(list.length) {
    return (
    <div>
      <select className="Dropdown">
      {
        list.map(item => {
          return (
            <option key={item.id}>{item.name}</option>
          )
        })
      }
      </select>
    </div>
  )
  } else {
    return <div>Nothing to show</div>
  }

}
