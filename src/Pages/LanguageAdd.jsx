
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput, Table } from "semantic-ui-react";

import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
export default function LanguageAdd() {
    const initialValues = {
        name: "",
        languageLevel: "",

    }
    const schema = Yup.object({
        name: Yup.string(),
        languageLevel: Yup.number()
    });
    function handleSubmit(values) {
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateLanguage(values).then(function (response) {
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
                        <Label size="big" color="blue" content="New Experience" />
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
                </Form>

            </Segment>
        </Formik>

    )
}
