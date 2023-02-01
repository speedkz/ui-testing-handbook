import { useForm } from "react-hook-form";
import { Button } from "../atomic/Button";
import { Card } from "../atomic/Card";
import { EFormItem, Form, RequiredLabel, TFormFields } from "../atomic/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export interface IRegistrationForm {
  gender: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  country: number;
}

export const RegistrationForm = (props: IRegistrationForm) => {
  const [countries, setCountries] = useState([]);
  const defaultformFields: TFormFields<IRegistrationForm> = {
    gender: {
      component: EFormItem.SWITCHER,
      colSpan: 12,
    },
    name: {
      component: EFormItem.INPUT,
      label: RequiredLabel("Name"),
      colSpan: 6,
    },
    lastname: {
      component: EFormItem.INPUT,
      label: RequiredLabel("Last name"),
      colSpan: 6,
    },
    email: {
      component: EFormItem.INPUT,
      label: RequiredLabel("Email"),
      colSpan: 6,
    },
    phone: {
      component: EFormItem.INPUT,
      label: RequiredLabel("Phone"),
      colSpan: 6,
    },
    password: {
      component: EFormItem.PASSWORD,
      label: RequiredLabel("Password"),
    },
    birthday: {
      component: EFormItem.DATE,
      label: RequiredLabel("Birthday"),
      colSpan: 6,
    },
    country: {
      component: EFormItem.SELECT,
      label: RequiredLabel("Country"),
      colSpan: 6,
      options: [],
    },
  };
  const [formFields, setFormFields] = useState(defaultformFields);
  const schema = yup
    .object({
      name: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
    })
    .required();
  const {
    handleSubmit,
    control,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClick = () => {
    console.log(getValues());
  };

  const fetchCountries = useCallback(async () => {
    const data = await (
      await axios.get("https://restcountries.com/v3.1/all")
    ).data;
    setCountries(data.map((x) => x.name.common));
    const temp = { ...formFields };
    temp.country.options = data.map((x, i) => ({
      text: x.name.common,
      value: i + 1,
    }));
    setFormFields(temp);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <Card className="px-6 py-8">
      <div className="text-h4 mb-4 text-primary-text">Registration</div>
      <div className="text-paragraph text-primary-text-light mb-8">
        Enter your registration details
      </div>
      <Form
        register={register}
        control={control}
        formFields={formFields}
        errors={errors}
      />
      <div className="flex gap-2 mt-8 justify-end">
        <Button onClick={handleSubmit(handleClick)} label="Ok" width={109} />
        <Button
          type="secondary"
          effect="ghost"
          onClick={handleClick}
          label="Cancel"
          width={112}
        />
      </div>
    </Card>
  );
};
