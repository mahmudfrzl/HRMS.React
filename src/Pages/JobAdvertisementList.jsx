import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../Services/jobAdvertisementService'
import { Table, Button,Header,Icon } from "semantic-ui-react";
export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisement] = useState([])
    const colors = ["red",]
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisement(result.data.data))
    }, [])
    return (
        <div>
            <Header as="h3" icon >
                <Icon name="list alternate outline" />
                <Header.Content >Job Advert List</Header.Content>
            </Header>
            {colors.map((color) => (
                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Job Title</Table.HeaderCell>
                            
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Salary</Table.HeaderCell>
                            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                            <Table.HeaderCell>Publish Date</Table.HeaderCell>
                            <Table.HeaderCell>Deadline</Table.HeaderCell>
                            <Table.HeaderCell>Is Open</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {jobAdvertisements.map((jobadvertisement) => (
                            <Table.Row key={jobadvertisement.id}>
                                <Table.Cell>{jobadvertisement.jobPositions.title}</Table.Cell>
                                
                                <Table.Cell>{jobadvertisement.city.name}</Table.Cell>
                                <Table.Cell>{jobadvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>
                                    {jobadvertisement.minSalary}TL - {jobadvertisement.maxSalary}TL
                                </Table.Cell>
                                <Table.Cell>{jobadvertisement.numberOfPosition}</Table.Cell>
                                <Table.Cell>{jobadvertisement.createdAt}</Table.Cell>
                                <Table.Cell>{jobadvertisement.applicationDate}</Table.Cell>
                                <Table.Cell>{jobadvertisement.enable.toString()}</Table.Cell>
                                <Table.Cell>
                                    <Button>View</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            ))}
        </div>
    )
}
