
import React from 'react'
import './AppHeader.css'

const AppHeader = ({done, active}) => {

  return (
    <div className='d-flex align-items-center justify-content-between'>
        <h3>Todo list</h3>
        <h4>{active} more todo {done} done</h4>
    </div>
  )
}

export default AppHeader