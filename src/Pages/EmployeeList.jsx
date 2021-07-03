import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card} from 'semantic-ui-react'
import EmployeeService from '../Services/employeeService'

export default function EmployeeList() {
    
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result => setEmployees(result.data.data))
    }, [])
    return (


        <div>
            {
                employees.map((employee) => (
                    <Card fluid className="cardFloat"   key={employee.id}>
                        <Card.Content>
                            <Card.Header>{employee.firstName}  {employee.lastName}</Card.Header>
                            <Card.Description>{employee.email}</Card.Description>
                        </Card.Content>
                        <Card.Content >
                            <div className='ui two buttons'>

                                <Link to={`employees/update/${employee.id}`}>
                                    
                                        <Button  className="btnUpdate" basic color='green'>
                                            Update
                                        </Button>
                                    
                                    <br />
                                </Link>
                                
                                    
                                        <Button  className="btnUpdate" basic color='red'>
                                            Delete
                                        </Button>
                                    
                                
                            </div>
                        </Card.Content>
                    </Card>
                ))
            }
        </div>






    )





}
