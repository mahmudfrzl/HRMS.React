import React, { useEffect, useState } from 'react'
import ResumeService from '../Services/resumeService'
import { Table, List, Rating, Image, Reveal, Grid, Button, Icon } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'
import "../Pages/CSS/ResumeIdCss.css"

export default function ResumeList() {
    const { id } = useParams()
    const [resume, setResume] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getById(id).then(result => setResume(result.data.data))
    }, [id])



    return (
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column width={3}>
                    {resume.links?.map((link) => (
                        <div key={link.id}>

                            <List >
                                {resume.photo?.map((profil) => (

                                    <Reveal className="profilPhoto" key={profil.id} active animated='move'>
                                        <Reveal.Content visible>

                                            <Image src={profil.url} size='massive' circular />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image src={profil.url} size='big' circular />
                                        </Reveal.Content>
                                        
                                    </Reveal>

                                ))}
                                <br />
                                <div>
                                    <List.Item>
                                        <List.Icon />
                                        <List.Content>
                                            <Button className="btnLinkLength" color="black"><Icon name="github" /> <a className="githubLink" href={link.githubLink}>Github</a></Button>
                                        </List.Content>
                                    </List.Item>

                                    <List.Item>
                                        <List.Icon />
                                        <List.Content >
                                            <Button className="btnLinkLength" color="linkedin" ><Icon name="linkedin" /> <a className="linkedinLink" href={link.linkedinLink}>LinkedIn</a></Button>
                                        </List.Content>
                                    </List.Item>



                                </div>

                            </List>
                        </div>

                    ))}
                </Grid.Column>
                <Grid.Column width={13}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Work Place</Table.HeaderCell>
                                <Table.HeaderCell>Job Position</Table.HeaderCell>
                                <Table.HeaderCell>Start Date</Table.HeaderCell>
                                <Table.HeaderCell>Quit Date</Table.HeaderCell>

                            </Table.Row>

                        </Table.Header>

                        <Table.Body>
                            {resume.experiences?.map((experience) => (
                                <Table.Row key={experience.id}>
                                    <Table.Cell>{experience.workPlaceName}</Table.Cell>
                                    <Table.Cell>{experience.jobPositions.title}</Table.Cell>
                                    <Table.Cell>{experience.startDate}</Table.Cell>
                                    <Table.Cell>{experience.quitDate}</Table.Cell>
                                </Table.Row>
                            ))}


                        </Table.Body>


                    </Table>

                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>School Name</Table.HeaderCell>
                                <Table.HeaderCell>Type</Table.HeaderCell>
                                <Table.HeaderCell>Department</Table.HeaderCell>
                                <Table.HeaderCell>Start Date</Table.HeaderCell>
                                <Table.HeaderCell>Gradiation Date</Table.HeaderCell>


                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {resume.schools?.map((school) => (
                                <Table.Row key={school.id}>
                                    <Table.Cell>{school.school.name} </Table.Cell>
                                    <Table.Cell>{school.school.schoolType.typeName}</Table.Cell>
                                    <Table.Cell>{school.schoolDepartment}</Table.Cell>
                                    <Table.Cell>{school.startDate}</Table.Cell>
                                    <Table.Cell>{school.gradiationDate}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Skills</Table.HeaderCell>
                                <Table.HeaderCell>Level</Table.HeaderCell>



                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {resume.technelogies?.map((technelogy) => (
                                <Table.Row key={technelogy.id}>
                                    <Table.Cell>{technelogy.usedTechnology} </Table.Cell>
                                    <Table.Cell><Rating icon='star' defaultRating={3} maxRating={3} /> </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Language</Table.HeaderCell>
                                <Table.HeaderCell>Level</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {resume.languages?.map((language) => (
                                <Table.Row key={language.id}>
                                    <Table.Cell>{language.name} </Table.Cell>
                                    <Table.Cell><Rating icon='star' defaultRating={language.languageLevel} maxRating={5} /></Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>

                    </Table>
                    <List.Item>
                        <List.Content >
                            <Link to={`/resume/update/${id}`}>
                                <Button className="btnLength" color="green">
                                    Add
                                </Button>
                            </Link>
                            <Link to={`/resume/update/${id}`}>
                                <Button  className="btnLength" color="youtube">
                                    Update
                                </Button>
                            </Link>
                        </List.Content>
                    </List.Item>

                </Grid.Column>
            </Grid.Row>

        </Grid>

    )
}
