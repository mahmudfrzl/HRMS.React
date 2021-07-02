
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput, Table } from "semantic-ui-react";

import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import { useParams } from "react-router-dom";
export default function LanguageAdd() {
    const {id} = useParams()
    const initialValues = {
        name: "",
        languageLevel: "",

    }
    const schema = Yup.object({
        name: Yup.string().required("Shouldn't be left blank"),
        languageLevel: Yup.number()
    });
    function handleSubmit(values) {
        const language ={
            languageLevel : parseInt(values.languageLevel),
            name: values.name,
            candidateId:id 

        }
        console.log(language)
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateLanguage(language)
    }

    return (
<Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >

            <Segment className="bg-dark">
                <Label
                    as={Button}
                    ribbon="right"
                    color="teal"

                    size="medium"
                    icon="arrow right"
                />



                <Form className="ui form inverted">
                    <FormField className="text-center">
                        <Label size="big" color="blue" content="New Language" />
                    </FormField>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="Language"
                                name="name"
                                placeholder="Language"

                            />
                        </FormField>
                    </FormGroup>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="Level"
                                name="languageLevel"
                                placeholder="Level"

                            />
                        </FormField>
                    </FormGroup>
                    <Button color="green">Update</Button>
                </Form>
                

            </Segment>
        </Formik>

    )
}
