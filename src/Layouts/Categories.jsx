import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical className="categoryMenu">


        <Menu.Item as={Link} to={"/employers"}>
          <Icon name="user" />
          Employer
        </Menu.Item>
        <Menu.Item as={Link} to={"/candidates"}>
          <Icon name="users" />
          Candidate
        </Menu.Item>

        <Menu.Item as={Link} to={"/employees"} >
          <Icon name="user circle outline" />
          Employee
        </Menu.Item>

      </Menu>
    </div>
  )
}



