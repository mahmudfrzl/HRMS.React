import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu vertical className="category">
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Candidate</Dropdown.Item>
        <Dropdown.Item>Employer</Dropdown.Item>
        <Dropdown.Item>Employee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
    </div>
  )
}

