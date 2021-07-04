import React, { useState, useEffect } from "react";
import HRMSDropdown from "../Utilities/customFormControls/HRMSDropdown";
import HRMSMultiDropdown from "../Utilities/customFormControls/HRMSMultiDropdown";
import HRMSTextInput from "../Utilities/customFormControls/HRMSTextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import WorkingTimeService from "../Services/workingTimeService";
import CityService from "../Services/cityService";
import WorkingTypeService from "../Services/workingTypeService";
import JobPositionService from "../Services/jobPositionService";
import JobAdvertisementService from "../Services/jobAdvertisementService";
import { Segment, Divider, Button } from "semantic-ui-react";

export default function JobAdvertisementFilter({ handleOnFilter }) {
    const initialValues = {

        jobPositions: "",
        city: "",
        workingTime: "",
        workingType: "",


        minSalary: "",
        maxSalary: "",


        jobDescription: "",
    }
    const JobAdvertisementSchema = Yup.object().shape({
        jobPositions: Yup.number(),
        city: Yup.number(),
        workingType: Yup.number(),
        workingTime: Yup.number(),

        jobDescription: Yup.string()
    });

    const [workingTimes, setWorkingTimes] = useState([]);
    const [workingTypes, setWorkingTypes] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    useEffect(() => {
        let workingTimeService = new WorkingTimeService()
        let workingTypeService = new WorkingTypeService()
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();

        workingTimeService.getAll().then(result => setWorkingTimes(result.data.data))
        workingTypeService.getAll().then(result => setWorkingTypes(result.data.data))
        cityService.getAll().then(result => setCities(result.data.data))
        jobPositionService.getAll().then(result => setJobPositions(result.data.data))
    }, [])
    const workingTimeOptions = workingTimes.map((workingTime) => ({
        key: workingTime.id,
        text: workingTime.workingTimeName,
        value: workingTime.id,
    }));
    const workingTypeOptions = workingTypes.map((workingType) => ({
        key: workingType.id,
        text: workingType.workingTypeName,
        value: workingType.id,
    }));
    const cityOptions = cities.map((city) => ({
        key: city.id,
        text: city.name,
        value: city.id,
    }));
    const jobPositionOptions = jobPositions.map((jobPosition) => ({
        key: jobPosition.id,
        text: jobPosition.title,
        value: jobPosition.id,
    }));

    const onSubmit = (values) => {
        // alert(JSON.stringify(values, null, 2))
        handleOnFilter(values)
    };

    return (
        <>
            <h1>Filtreler</h1>
            <Segment raised style={{ textAlign: "left", padding: "15px" }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={JobAdvertisementSchema}
                >
                    <Form className="ui large form">
                        <HRMSTextInput
                            name="search"
                            placeholder="Ara"
                            icon="search"
                            iconPosition="left"
                        />
                        <Divider clearing />
                        <HRMSMultiDropdown
                            name="jobPositions"
                            placeholder="İş Pozisyonu"
                            options={jobPositionOptions}
                        />
                        <Divider hidden />
                        <HRMSMultiDropdown
                            name="city"
                            placeholder="Şehir"
                            multiple
                            selection
                            options={cityOptions}
                        />
                        <Divider hidden />
                        <HRMSMultiDropdown
                            name="workingTime"
                            placeholder="Çalışma Şekli"
                            multiple
                            selection
                            options={workingTimeOptions}
                        />
                        <HRMSMultiDropdown
                            name="workingType"
                            placeholder="Çalışma Şekli"
                            multiple
                            selection
                            options={workingTypeOptions}
                        />
                        
                        <Divider clearing />
                        <HRMSTextInput
                            name="minSalary"
                            placeholder="Min. Maaş"
                            icon="money"
                            iconPosition="left"
                            type="number"
                        />
                        <HRMSTextInput
                            name="maxSalary"
                            placeholder="Maks. Maaş"
                            icon="money"
                            iconPosition="left"
                            type="number"
                        />

                        <Button fluid color="teal" size="large" style={{ marginTop: "35px" }} type="submit">
                            Filtrele
                        </Button>
                    </Form>
                </Formik>
            </Segment>
        </>
    )
}