import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://yt3.ggpht.com/ytc/AAUvwngdmJQ-E06LKsjDw5PFiYWNE5vxZ9fMJSy3Qi_B=s900-c-k-c0x00ffffff-no-rj" />
                <Dropdown pointing="top left" text="Mahmud">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
