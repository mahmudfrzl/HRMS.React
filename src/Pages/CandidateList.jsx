
import React,{ useEffect, useState} from 'react'
import {  Checkbox, Icon, Table,Button } from 'semantic-ui-react'
import CandidateService from '../Services/candidateService'
import { Link } from 'react-router-dom';


export default function CandidateList() {
    const [candidates, setCandidates] = useState([])
    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    },[])


    return (
        <div>
            <Table compact  celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />

                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        <Table.HeaderCell>CV</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map((candidate)=>(
                            <Table.Row key={candidate.id}>
                            <Table.Cell collapsing>
                                <Checkbox slider />
                            </Table.Cell>
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.email}</Table.Cell>
                            <Table.Cell>{candidate.birthDate}</Table.Cell>
                            <Table.Cell>{candidate.identityNumber}</Table.Cell>
                            <Table.Cell>
                                    <Link to={`/resume/${candidate.id}`}><Button>View</Button></Link> 
                                </Table.Cell>
                        </Table.Row>
                        ))
                    }



                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                            >
                                <Icon name='user' /> Add User
                            </Button>
                            <Button size='small'>Approve</Button>
                            <Button disabled size='small'>
                                Approve All
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
