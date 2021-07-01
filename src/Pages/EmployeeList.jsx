import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table,Card } from 'semantic-ui-react'
import EmployeeService from '../Services/employeeService'

export default function EmployeeList() {
    
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result=>setEmployees(result.data.data))
    }, [])
    return (
        

        
            <Table  compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />

                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Approval OF Employee</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employees.map((employee) => (
                            <Table.Row key={employee.id}>
                                <Table.Cell collapsing>
                                    <Checkbox slider />
                                </Table.Cell>
                                <Table.Cell>{employee.email}</Table.Cell>
                                <Table.Cell>{employee.password}</Table.Cell>
                                <Table.Cell>{employee.firstName}</Table.Cell>
                                <Table.Cell>{employee.lastName}</Table.Cell>
                                <Table.Cell>{employee.approvalOfEmployee}</Table.Cell>

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


    )
}
