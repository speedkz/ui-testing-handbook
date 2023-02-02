import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../atomic/Card";
import {
  BasicForm,
  EFormItem,
  Form,
  IBasicForm,
  TFormFields,
} from "../atomic/Form";
import { Logo } from "../atomic/Logo";
import { Checkbox } from "../atomic/Checkbox";
import { Button } from "../atomic/Button";
import { User } from "components/icons/User";

export interface ILoginForm {
  username: string;
  password: string;
}

export const LoginForm = (props: ILoginForm) => {
  const defaultformFields: TFormFields<ILoginForm> = {
    username: {
      component: EFormItem.INPUT,
      prependIcon: <User />,
    },
    password: {
      component: EFormItem.PASSWORD,
    },
  };
  const [remember, setRemember] = useState(false);
  const [formFields, setFormFields] = useState(defaultformFields);
  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const submit = (value) => {
    console.log(value);
  };

  return (
    <BasicForm
      cardArgs={{ width: 388, className: "px-6 py-8" }}
      schema={schema}
      formFields={formFields}
      Header={() => (
        <>
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center text-sm text-primary-text my-8">
            Enter your login details
          </div>
        </>
      )}
      Footer={({ handleSubmit, isValid }: IBasicForm) => (
        <>
          <div className="flex justify-between items-center mt-4 mb-8">
            <Checkbox
              label="Remember me"
              checked={remember}
              onChange={setRemember}
            />
            <div className="text-sm text-primary-light">Forgot password</div>
          </div>
          <Button
            disabled={!isValid}
            width="100%"
            type="primary"
            label="Log in"
            onClick={handleSubmit(submit)}
          />
        </>
      )}
    />
  );
};
