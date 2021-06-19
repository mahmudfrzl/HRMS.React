import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import Signedin from './Signedin'
import SignOut from './SignOut'
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
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
                    <Menu.Item as={Link} to={"/jadvert"}
                        icon="home"
                        name='home'
                    />
                    <Menu.Item as={Link} to={"/jadvert"}
                        icon="list"
                        name='Job Advertisement'
                    />
                    <Menu.Item
                        icon="id card outline"
                        name='Cv'
                    />

                    <Menu.Menu position='right'>
                    <Menu.Item as={Link} to={"/addadvert"}
                        icon="edit outline"
                        name='Add job posting'
                    />
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {isAuthenticated ? <Signedin signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
