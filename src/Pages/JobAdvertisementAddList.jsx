
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import WorkingTimeService from "../Services/workingTimeService";
import CityService from "../Services/cityService";
import WorkingTypeService from "../Services/workingTypeService";
import JobPositionService from "../Services/jobPositionService";
import JobAdvertisementService from "../Services/jobAdvertisementService";
import "../Pages/CSS/JobAddAvertisement.css"
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Container, Form, Label} from "semantic-ui-react";

export default function JobAdvertisementAddList() {
  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  const JobAdvertisementSchema = Yup.object().shape({
    jobPositions: Yup.number().required("Bu alan boş bırakılamaz"),
    city: Yup.number().required("Bu alan boş bırakılamaz"),
    workingType: Yup.number().required("Bu alan boş bırakılamaz"),
    workingTime: Yup.number().required("Bu alan boş bırakılamaz"),
    
    
    numberOfPosition: Yup.number()
      .required("Bu alan boş bırakılamaz")
      .min(1, "En az 1 kişilik boş pozisyon olmak zorunda!"),
    applicationDate: Yup.string()
      .matches(
        /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
        "Girmiş olduğunuz son başvuru tarihi, tarih formatında değildir.(YYYY-AA-GG)"
      )
      .required("Bu alan boş bırakılamaz!"),
    
    jobDescription: Yup.string().required("Bu alan boş bırakılamaz!"),
  });
  const formik = useFormik({
    initialValues: {
      
      jobPositions: "",
      city: "",
      workingTime: "",
      workingType: "",

      numberOfPosition: "",
      minSalary: "",
      maxSalary: "",
      applicationDate: "",

      jobDescription: "",
    },
    validationSchema: JobAdvertisementSchema,
    onSubmit: (jobAdvertisement) => {
      jobAdvertisement.jobPositions = parseInt(jobAdvertisement.jobPositions);
      jobAdvertisement.city = parseInt(jobAdvertisement.city);
      jobAdvertisement.workingType = parseInt(jobAdvertisement.workingType);
      jobAdvertisement.workingTime = parseInt(jobAdvertisement.workingTime);
      jobAdvertisement.employer = 10;
      jobAdvertisement.numberOfPosition = parseInt(
        jobAdvertisement.numberOfPosition
      );
      jobAdvertisement.minSalary = parseInt(jobAdvertisement.minSalary);
      jobAdvertisement.maxSalary = parseInt(jobAdvertisement.maxSalary);
      let jobAdvertisementService = new JobAdvertisementService();
      
      jobAdvertisementService.addJobAdvertisement(jobAdvertisement).then(function (response) {
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
          document.getElementById("addJobAdvertisementForm").reset();
        }
      });
    },
  });

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

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Container className="AddJobAdvertisementContainer">
        <Form id="addJobAdvertisementForm" onSubmit={formik.handleSubmit}>
          <Form.Field className="Header">
            <Label size="massive" color="teal" content="Yeni İş İlanı"></Label>
          </Form.Field>
          <Form.Field className="mt-4">
            <Form.Group widths="equal">
              <Form.Field>
                <Form.Select
                  label="İş Pozisyonu*"
                  clearable
                  placeholder="İş Pozisyonu Seç"
                  search
                  onChange={(_event, data) =>
                    handleChangeSemantic(data.value, "jobPositions")
                  }
                  onBlur={formik.onBlur}
                  id="jobPositions"
                  value={formik.values.jobPositions}
                  options={jobPositionOptions}
                />
                {formik.errors.jobPositions &&
                  formik.touched.jobPositions && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.city}
                    </div>
                  )}
              </Form.Field>
              <Form.Field>
                <Form.Select
                  clearable
                  label="Şehir*"
                  placeholder="Şehir Seç"
                  search
                  onChange={(_event, data) =>
                    handleChangeSemantic(data.value, "city")
                  }
                  onBlur={formik.onBlur}
                  id="city"
                  value={formik.values.city}
                  options={cityOptions}
                />
                {formik.errors.city && formik.touched.city && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.city}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Select
                  clearable
                  label="Çalışma Türü*"
                  placeholder="Çalışma Türü Seç"
                  search
                  selection
                  onChange={(_event, data) =>
                    handleChangeSemantic(data.value, "workingType")
                  }
                  onBlur={formik.onBlur}
                  id="workingType"
                  value={formik.values.workingType}
                  options={workingTypeOptions}
                />
                {formik.errors.workingType &&
                  formik.touched.workingType && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.workingType}
                    </div>
                  )}
              </Form.Field>
              <Form.Field>
                <Form.Select
                  clearable
                  label="Çalışma Zamanı*"
                  placeholder="Çalışma Zamanı Seç"
                  search
                  selection
                  onChange={(_event, data) =>
                    handleChangeSemantic(data.value, "workingTime")
                  }
                  onBlur={formik.onBlur}
                  id="workingTime"
                  value={formik.values.workingTime}
                  options={workingTimeOptions}
                />
                {formik.errors.workingTime &&
                  formik.touched.workingTime && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.workingTime}
                    </div>
                  )}
              </Form.Field>
            </Form.Group>
          </Form.Field>
          <Form.Field className="mt-4">
            <Form.Group widths="equal">
              <Form.Field>
                <Form.Input
                  icon="user plus"
                  iconPosition="left"
                  label="Boş Pozisyon Sayısı*"
                  id="numberOfPosition"
                  name="numberOfPosition"
                  onChange={formik.handleChange}
                  value={formik.values.numberOfPosition}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Boş Pozisyon Sayısı Gir"
                />
                {formik.errors.numberOfPosition &&
                  formik.touched.numberOfPosition && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.numberOfPosition}
                    </div>
                  )}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  icon="lira"
                  iconPosition="left"
                  label="En Düşük Ücret"
                  type="number"
                  placeholder="En Düşük Ücret Gir"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  icon="lira"
                  iconPosition="left"
                  type="number"
                  label="En Yüksek Ücret"
                  placeholder="En Yüksek Ücret Gir"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Son Başvuru Tarihi*"
                  placeholder="YYYY-AA-GG"
                  icon="calendar alternate"
                  iconPosition="left"
                  onChange={(_event, data) =>
                    handleChangeSemantic(data.value, "applicationDate")
                  }
                  value={formik.values.applicationDate}
                  onBlur={formik.handleBlur}
                  name="applicationDate"
                />
                {formik.errors.applicationDate &&
                  formik.touched.applicationDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.applicationDate}
                    </div>
                  )}
              </Form.Field>
            </Form.Group>
          </Form.Field>
          
          <Form.Field className="mt-4">
            <Form.TextArea
              placeholder="İş Tanımı Gir (**Bu metin iş ilanı detaylarında gözükecek metindir**)"
              label="İş Tanımı*"
              style={{ minHeight: "225px", maxHeight: "225px" }}
              value={formik.values.jobDescription}
              name="jobDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.jobDescription && formik.touched.jobDescription && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.jobDescription}
              </div>
            )}
          </Form.Field>
          <Form.Field className="mt-4">
            <Form.Button
              fluid
              size="big"
              className="addJobAdvertisementButton"
              animated
              content="İş İlanı Ekle"
              labelPosition="right"
              icon="add"
              color="teal"
              type="submit"
            />
          </Form.Field>
        </Form>
      </Container>
    </div>
  )
}
