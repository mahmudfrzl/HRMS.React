
import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import EmployerService from '../Services/employerService'


export default function EmployerList() {

    const [employers, setEmployer] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployer(result.data.data))

    }, [])

    return (
        <div>

            <Table  compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />

                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Address</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Activated</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map((employer) => (
                            <Table.Row key={employer.id}>
                                <Table.Cell collapsing>
                                    <Checkbox slider />
                                </Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.password}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAdress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.activated}</Table.Cell>

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
