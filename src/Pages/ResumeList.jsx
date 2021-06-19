import React, { useEffect, useState } from 'react'
import ResumeService from '../Services/resumeService'
import { Icon, Menu, Table } from 'semantic-ui-react'


export default function ResumeList() {
    
    const [resume, setResume] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getById(4).then(result => setResume(result.data.data))
    }, [])



    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        {console.log(resume)}
                    </Table.Row>
                    
                </Table.Header>
                <Table.Body>
                    <Table.Row key={resume.id}>
                        <Table.Cell>{resume.candidate?.firstName}</Table.Cell>
                        <Table.Cell>{resume.candidate?.lastName}</Table.Cell>
                        <Table.Cell>{resume.candidate?.birthDate}</Table.Cell>
                        
                    </Table.Row>






                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
