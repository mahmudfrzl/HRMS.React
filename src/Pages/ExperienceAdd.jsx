
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput, Table } from "semantic-ui-react";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
export default function ExperienceAdd(props) {

    const initialValues = {
        jobPositionId: "",
        quitDate: "",
        startDate: "",
        workPlaceName: "",

    }
    const schema = Yup.object({
        startDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "Girmiş olduğunuz son başvuru tarihi, tarih formatında değildir.(YYYY-AA-GG)"),
        quitDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "Girmiş olduğunuz son başvuru tarihi, tarih formatında değildir.(YYYY-AA-GG)")
    });
    function handleSubmit(values) {
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateExperience(values).then(function (response) {
            if (!response.data[0].success) {
                toast.error(response.data[0].message, {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                });
            } else {
                toast.success(response.data[0].message, {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                });
                document.getElementById("resumeForm").reset();
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
                                label="Work Place*"
                                name="workPlaceName"
                                placeholder="Work place"

                            />
                        </FormField>
                        <FormField>
                            <HRMSTextInput
                                label="Start Date*"
                                name="startDate"
                                placeholder="Start Date"



                            />
                        </FormField>
                    </FormGroup>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="Quit Date"
                                name="quitDate"
                                placeholder="Quit Date"

                            />
                        </FormField>
                        <FormField>
                            <HRMSTextInput
                                label="Job Position"
                                name="jobPositionId"
                                placeholder="Job Position"


                            />
                        </FormField>
                    </FormGroup>
                </Form>

            </Segment>
        </Formik>

    )
}
