import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import "../Layouts/CSS/style.css"
export default function FavoriteAdvertisement() {
    const { advertisementItems } = useSelector(state => state.favoriteAdvertisement)
    return (
        <div>
            <Dropdown className="marginTopADvert" item text='Favorite Advertisement'>
                <Dropdown.Menu > 
                    {
                        advertisementItems.map((advertisementItem) => (
                            <Dropdown.Item  key={advertisementItem.jobadvertisement.id}>{advertisementItem.jobadvertisement.jobPositions.title}</Dropdown.Item>
                        ))
                    }
                    

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
