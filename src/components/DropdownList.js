import React from 'react'

export const DropdownList = ({ list }) => {

  if(list.length) {
    return (
    <div>
      <select>
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
