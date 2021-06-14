import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} primary> Sign In</Button>
                <Button color="green" style={{marginLeft:"0.5em"}} >Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
