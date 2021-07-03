import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {  Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import FavoriteAdvertisement from './FavoriteAdvertisement'
import Signedin from './Signedin'
import SignOut from './SignOut'
export default function Navi() {
    const { advertisementItems } = useSelector(state => state.favoriteAdvertisement)
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


                    <Menu.Menu position='right'>
                    <Menu.Item as={Link} to={"/addadvert"}
                        icon="edit outline"
                        name='Add job posting'
                    />
                        <Menu.Item  >  {advertisementItems.length>0&&<FavoriteAdvertisement/>}</Menu.Item>
                        
                        {isAuthenticated ? <Signedin signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
