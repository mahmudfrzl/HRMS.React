import React from 'react'

import { Formik, Form } from "formik";
import { FormGroup, FormField, Label, Button, Segment, Confirm } from "semantic-ui-react";

import { toast } from "react-toastify";
import * as Yup from "yup";
import EmployeeService from '../Services/employeeService';
import HRMSTextInput from '../Utilities/customFormControls/HRMSTextInput';
import { Link, useParams } from 'react-router-dom';
export default function EmployeeUpdate() {
    
    const initialValues = {

        firstName: "",
        email: "",
        lastName: "",
        password: ""
    }
    const schema = Yup.object({
        email: Yup.string(),
        password: Yup.number().min(6)
    })
    function handleSubmit(values) {

        let employeeService = new EmployeeService()
        employeeService.updateEmployee(values).then(function (response) {
            toast.success(response.data.message, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
            });
        })
    }



    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }} >
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
                            <Label size="big" color="blue" content="Employee's Information" />
                        </FormField>
                        <FormGroup className="mt-4" widths="equal">
                            <FormField>
                                <HRMSTextInput
                                    label="Name"
                                    name="firstName"
                                    placeholder="Name"

                                />
                            </FormField>
                        </FormGroup>
                        <FormGroup className="mt-4" widths="equal">
                            <FormField>
                                <HRMSTextInput
                                    label="Surname"
                                    name="lastName"
                                    placeholder="Surname"

                                />
                            </FormField>
                        </FormGroup>
                        <FormGroup className="mt-4" widths="equal">
                            <FormField>
                                <HRMSTextInput
                                    label="E-mail"
                                    name="email"
                                    placeholder="E-mail"

                                />
                            </FormField>
                        </FormGroup>
                        <FormGroup className="mt-4" widths="equal">
                            <FormField>
                                <HRMSTextInput
                                    label="Password"
                                    name="password"
                                    placeholder="Password"

                                />
                            </FormField>
                        </FormGroup>
                        
                            <Button color="green">Update</Button>
                        
                    </Form>


                </Segment>
            </Formik>
        </div>
    )
}


