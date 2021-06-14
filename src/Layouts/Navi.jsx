import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Container} from 'semantic-ui-react'
import Signedin from './Signedin'
import SignOut from './SignOut'
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history =useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
        history.push("/jadvert")
    }
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
                    {isAuthenticated?<Signedin signOut ={handleSignOut} />:<SignOut signIn={handleSignIn} />}
                    
                </Menu.Menu>
                </Container>
                
            </Menu>
        </div>
    )
}
