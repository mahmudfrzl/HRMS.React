import React, { useState,useEffect } from 'react'
import JobAdvertisementService from '../Services/jobAdvertisementService'
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import { useParams } from 'react-router-dom';


export default function JobAdvertisementDetail() {
    let { id } = useParams()
    const [jobAdvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementFindById(id).then(result=>setJobAdvertisement(result.data.data))
    }, [id])
    return (
        <div>
            <Card fluid color={"black"}>
                <Card.Content header="Explanation" />
                <Card.Content>
                    Sxczxcv
                </Card.Content>
            </Card>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Table celled color={"black"} stackable>
                            <Table.Header>
                                {console.log(jobAdvertisements)}
                                <Table.Row>
                                    <Table.HeaderCell>Employer</Table.HeaderCell>
                                    <Table.HeaderCell>Information</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="building" />
                                                Company Name
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvertisements.employer?.companyName}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="mail" />
                                                Email
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvertisements[0]?.employer?.companyName}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="phone" />
                                                Telephone
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>lakdjsvn</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="world" />
                                                Web Site
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>ajsdf</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="list ul" />
                                                Details
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button >
                                            <Button.Content visible>Go to Details</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="arrow right" />
                                            </Button.Content>
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Table celled fixed singleLine color={"black"}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Job Advertisement</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Job Position</Table.Cell>
                                    <Table.Cell>asdv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>City</Table.Cell>
                                    <Table.Cell>asdv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Work Plave</Table.Cell>
                                    <Table.Cell>dfbv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Working Time</Table.Cell>
                                    <Table.Cell>adjbsgv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Minimum Salary</Table.Cell>
                                    <Table.Cell>lkdajsgv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Maximum Salary</Table.Cell>
                                    <Table.Cell>lakejv</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Open Position</Table.Cell>
                                    <Table.Cell>lakejdbvn</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Created Date</Table.Cell>
                                    <Table.Cell>slkdjvn</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Application Date</Table.Cell>
                                    <Table.Cell>ladkjfvnlakjd</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    );
}
