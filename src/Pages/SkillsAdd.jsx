
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput, Table } from "semantic-ui-react";

import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import { useParams } from "react-router-dom";
export default function SkillsAdd() {
    const {id} = useParams()
    const initialValues = {
        usedTechnology: "",

    }
    const schema = Yup.object({
        usedTechnology: Yup.string()
    });
    function handleSubmit(values) {
        const skill = {
            usedTechnology: values.usedTechnology,
            candidateId:id
        }
        console.log(skill)
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateTechnelogy(skill)
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
                        <Label size="big" color="blue" content="New Skills" />
                    </FormField>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="Skills"
                                name="usedTechnology"
                                placeholder="Skills"

                            />
                        </FormField>
                        
                    </FormGroup>
                    <Button color="green" >Update</Button>
                </Form>

            </Segment>
        </Formik>

    )
}
