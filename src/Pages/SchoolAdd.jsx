import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, FormInput } from "semantic-ui-react";

import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CandidateCvService from "../Services/candidateCVService";
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import { useParams } from "react-router-dom";

export default function SchoolAdd() {
    const {id} = useParams()
    const initialValues = {
        department: "",
        name: "",
        startDate: "",
        gradiationDate: "",
        
        schoolType:""
    }
    const schema = Yup.object({
        startDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "The application deadline you entered is not in date format.(YYYY-AA-GG)"),
        gradiationDate: Yup.string().matches(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            "The application deadline you entered is not in date format.(YYYY-AA-GG)")
    });
    function handleSubmit(values) {
        const school = {
            schoolId: id, department: values.department, startDate:values.startDate,
            gradiationDate: values.gradiationDate, schoolType: id,candidateId:id,
            

        }
        console.log(school)
        let candidateCVService  = new CandidateCvService()
        candidateCVService.updateSchool(school)
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
                        <Label size="big" color="blue" content="New School" />
                    </FormField>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="School Name"
                                name="schoolName"
                                placeholder="School Name"

                            />
                        </FormField>
                        <FormField>
                            <HRMSTextInput
                                label="Type"
                                name="typeName"
                                placeholder="Type"



                            />
                        </FormField>
                    </FormGroup>
                    <FormGroup className="mt-4" widths="equal">
                        <FormField>
                            <HRMSTextInput
                                label="Department"
                                name="department"
                                placeholder="Department"

                            />
                        </FormField>
                        <FormField>
                            <HRMSTextInput
                                label="Start Date"
                                name="startDate"
                                placeholder="Start Date"


                            />
                        </FormField>
                        <FormField>
                            <HRMSTextInput
                                label="Gradiation Date"
                                name="gradiationDate"
                                placeholder="Gradiation Date"


                            />
                        </FormField>
                    </FormGroup>
                    <Button color="green" >Update</Button>
                </Form>

            </Segment>
        </Formik>
    )
}
