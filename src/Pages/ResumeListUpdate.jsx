import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FormField, FormGroup } from 'semantic-ui-react';
import "../Pages/CSS/ResumeIdCss.css"
import { Table, List,  Image, Reveal, Button} from 'semantic-ui-react'
import * as Yup from "yup";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import ResumeService from '../Services/resumeService';

import { Container } from 'semantic-ui-react'
import { useParams } from 'react-router';
import ExperienceAdd from './ExperienceAdd';
import SchoolAdd from './SchoolAdd';
import SkillsAdd from './SkillsAdd';
import LanguageAdd from './LanguageAdd';
export default function ResumeListUpdate() {
    function add() {
        console.log("abc")
    }
    const { id } = useParams()
    const [resume, setResume] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getById(id).then(result => setResume(result.data.data))
    }, [id])

  
    const initialValues = {
        githubLink: "",
        linkedinLink: "",
        startDate: "",
        gradiationDate: "",
        quitDate: "",
        name: "",
        languageLevel: "",
        department: "",
        schoolId: "",
        usedTechnelogy: "",
        gradiationDate: "",
        typeName:""
    }


    const schema = Yup.object({
        githubLink: Yup.string().url("This field must be in URL format"),
        linkedinLink: Yup.string().url("This field must be in URL format"),

    })



    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}>

                <Container className="cvContainer">
                    {resume.links?.map((link) => (
                        <div key={link.id}>

                            <List >
                                {resume.photo?.map((profil) => (

                                    <Reveal key={profil.id} active animated='move'>
                                        <Reveal.Content visible>
                                            <div  className="imagerel">
                                            <Image className="profilPhotoUpdate" src={profil.url} size='medium' circular />
                                            </div>
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <div className="imagerel">
                                            <Image className="profilPhotoUpdate" src={profil.url} size='medium' circular />
                                            </div>
                                        </Reveal.Content>

                                    </Reveal>

                                ))}


                            </List>
                        </div>

                    ))}
                    <Form className="ui form ">

                        <FormGroup className="mt-4" widths="equal">
                            <Table>
                                <FormField>
                                    <HRMSTextInput
                                        name="githubLink"
                                        placeholder="Github Hesap linkini giriniz"
                                    />
                                </FormField>
                                <FormField>
                                    <HRMSTextInput
                                        name="linkedinLink"
                                        placeholder="Linkedin Hesap linkini giriniz"
                                    />
                                </FormField>
                            </Table>
                        </FormGroup>
                        <FormField className="text-center mt-4">
                            <Button color="green" type="submit" >Finish</Button>
                        </FormField>

                    </Form>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Experience</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><ExperienceAdd addExperience={() => add()}></ExperienceAdd></Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>School</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><SchoolAdd addSchool={() => add()}></SchoolAdd></Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Skills</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><SkillsAdd addSkills={() => add()}></SkillsAdd></Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Languages</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><LanguageAdd addLanguage={() => add()}></LanguageAdd></Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Container>

            </Formik>
        </div>
    )
}




/*<Tab menu={{ secondary: true, pointing: true }} panes={panes} /> */
