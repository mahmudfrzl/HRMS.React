import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../Services/jobAdvertisementService'
import { Table, Button, Header, Icon, Popup, Grid } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoFavoriteAdvertisements } from '../store/actions/advertisementActions';
import { toast } from 'react-toastify';
import JobAdvertisementFilter from './JobAdvertisementFilter';
export default function JobAdvertisementList() {

    const dispatch = useDispatch()
    const [jobAdvertisements, setJobAdvertisement] = useState([])
    const colors = ["teal",]
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisement(result.data.data))
    }, [])

    const handleAddtoFavoriteAdvertisements = (jobAdvertisement) => {
        dispatch(addtoFavoriteAdvertisements(jobAdvertisement))
        toast.success(`${jobAdvertisement.jobPositions.title} added to system!`)
    }
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}><JobAdvertisementFilter/></Grid.Column>
                    <Grid.Column width={12}>
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
                            <Table.HeaderCell>Add to Favorites</Table.HeaderCell>
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
                                <Table.Cell><Button onClick={() => handleAddtoFavoriteAdvertisements(jobadvertisement)} > <Popup
                                    trigger={<Icon name='heart' color='red' size='large' circular />}
                                    content='Add to Favorites'
                                    
                                /></Button></Table.Cell>
                                <Table.Cell>
                                    <Link to={"/jobAdvertisementDetail"}><Button>View</Button></Link>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            ))}
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}
