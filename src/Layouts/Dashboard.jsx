import React from 'react'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../Pages/CandidateList'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                    <Categories/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                    <CandidateList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            
        </div>
    )
}
