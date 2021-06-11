import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Container} from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed='top' >
                <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='Job Advertisement'
                />

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button primary>Sign In</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
                
            </Menu>
        </div>
    )
}
