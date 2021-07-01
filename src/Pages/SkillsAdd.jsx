
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput, Table } from "semantic-ui-react";

import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
export default function SkillsAdd() {
    const initialValues = {
        usedTechnelogy: "",

    }
    const schema = Yup.object({
        usedTechnelogy: Yup.string()
    });
    function handleSubmit(values) {
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateTechnelogy(values).then(function (response) {
            if (toast.success(response.data.message, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
            })) {

            }


        })
    }

    return (
<Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
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
                                name="usedTechnelogy"
                                placeholder="Skills"

                            />
                        </FormField>
                        
                    </FormGroup>
                    
                </Form>

            </Segment>
        </Formik>

    )
}
