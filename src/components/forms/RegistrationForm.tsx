import axios from "axios";
import { Notification } from "components/atomic/Notification";
import { cloneDeep } from "lodash";
import { useCallback, useRef, useState } from "react";
import * as yup from "yup";
import { Button } from "../atomic/Button";
import {
  BasicForm,
  EFormItem,
  IBasicForm,
  RequiredLabel,
  TFormFields,
} from "../atomic/Form";

export interface IRegistrationForm {
  gender: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  country: number;
}

export const registrationForm: TFormFields<IRegistrationForm> = {
  gender: {
    component: EFormItem.RADIO,
    colSpan: 12,
    options: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
  name: {
    component: EFormItem.INPUT,
    label: RequiredLabel("Name"),
    colSpan: 6,
  },
  lastName: {
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
    component: EFormItem.SELECT_SEARCH_REMOTE,
    label: RequiredLabel("Country"),
    colSpan: 6,
    options: [],
  },
};

export const RegistrationForm = (props: IRegistrationForm) => {
  const fetchCountries = useCallback(async (value) => {
    try {
      if (!value) return [];
      const data = await (
        await axios.get(`https://restcountries.com/v3.1/name/${value}`)
      ).data;
      return data.map((x) => ({
        label: x.name.common,
        value: x.name.common,
      }));
    } catch (err) {
      return [];
    }
  }, []);
  const defaultformFields = {
    ...registrationForm,
    country: {
      component: EFormItem.SELECT_SEARCH_REMOTE,
      label: RequiredLabel("Country"),
      colSpan: 6,
      options: [],
      fetchOptions: fetchCountries,
      setOptions: (value) => setCountries(value),
    },
  };
  const [formFields, setFormFields] = useState(defaultformFields);
  const notiRef = useRef(null);

  const setCountries = (value) => {
    const temp = cloneDeep(defaultformFields);
    temp.country.options = value;
    setFormFields(temp);
  };
  const schema = yup
    .object({
      name: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
    })
    .required();

  const handleClick = (value) => {
    if (notiRef.current) {
      (notiRef.current as any).notify();
    }
    console.log(value);
  };

  return (
    <>
      <Notification ref={notiRef} />
      <BasicForm
        cardArgs={{ width: 520 }}
        schema={schema}
        formFields={formFields}
        Header={() => (
          <>
            <div className="text-h4 mb-4 text-primary-text">Registration</div>
            <div className="text-paragraph text-primary-text-light mb-8">
              Enter your registration details
            </div>
          </>
        )}
        Footer={({ handleSubmit, isValid }: IBasicForm) => (
          <div className="flex gap-2 mt-8 justify-end">
            <Button
              onClick={handleSubmit(handleClick)}
              width={109}
              disabled={!isValid}
              data-testid="btn-submit"
            >
              Ok
            </Button>
            <Button type="text" onClick={handleClick} width={112}>
              Cancel
            </Button>
          </div>
        )}
      />
    </>
  );
};
