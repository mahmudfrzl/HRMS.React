import React from 'react'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../Pages/CandidateList'
import EmployerList from '../Pages/EmployerList'
import { Route } from 'react-router'
import EmployeeList from '../Pages/EmployeeList'
import JobAdvertisementList from '../Pages/JobAdvertisementList'

import JobAdvertisementDetail from '../Pages/JobAdvertisementDetail'




export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                    <Route path="/jadvert" component={Categories}/>
                    <Route path="/candidates" component={Categories}/>
                    <Route path="/employers" component={Categories}/>
                    <Route exact path="/employees" component={Categories}/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                    <Route  path="/jadvert" component={JobAdvertisementList}/>
                    <Route  path="/candidates" component={CandidateList}/>
                    <Route path="/employers" component={EmployerList}/>
                    <Route exact path="/employees" component={EmployeeList}/>
                    
                    <Route path="/jobAdvertisementDetail" component={JobAdvertisementDetail} />
                    
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            
        </div>
    )
}
