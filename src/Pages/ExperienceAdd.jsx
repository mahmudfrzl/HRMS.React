
import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment } from "semantic-ui-react";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import { useParams } from "react-router-dom";
export default function ExperienceAdd(props) {

    const { id } = useParams()
    const initialValues = {
        jobPositionId: "",
        quitDate: "",
        startDate: "",
        workPlaceName: "",

    }
    const schema = Yup.object({


        startDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "The application deadline you entered is not in date format.(YYYY-AA-GG)"),
        quitDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "The application deadline you entered is not in date format.(YYYY-AA-GG)")
    });

    function handleSubmit(values) {
        const experience = {
            jobPositionId: parseInt(values.jobPositionId), quitDate: values.quitDate, startDate: values.startDate,

            workPlaceName: values.workPlaceName,

            candidateId: id
        }
        console.log(experience)
        let candidateCVService = new CandidateCvService()
        candidateCVService.updateExperience(experience)

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

                    <Button color="green">Update</Button>


                </Form>

            </Segment>
        </Formik>

    )
}
