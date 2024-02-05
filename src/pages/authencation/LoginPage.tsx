import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import {
  TheBasicForm,
  FormSystem,
  TheButton,
  TheCheckbox,
  TheIcon,
} from "components/core-ui";

import { login } from "services/auth.service";
import { IBasicForm } from "components/core-ui/form";

export const defaultformFields = FormSystem.login;

export const LoginPage = () => {
  const [remember, setRemember] = useState(false);
  const [formFields, setFormFields] = useState(defaultformFields);
  const navigate = useNavigate();
  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const submit = (value) => {
    login(value)
      .then(() => {
        navigate("/shipping-order");
      })
      .catch((err: AxiosError) => {});
  };

  return (
    <>
      <TheBasicForm
        className="w-[552px] bg-grey"
        schema={schema}
        formFields={formFields}
        Header={() => (
          <>
            <div className="flex justify-center">
              <TheIcon icon="Logo" />
            </div>
            <div className="text-center text-2xl text-red-1 font-semibold my-8">
              SIGN IN
            </div>
          </>
        )}
        Footer={({ handleSubmit, isValid }: IBasicForm) => (
          <>
            <div className="flex justify-between items-center mt-4 mb-8">
              <TheCheckbox
                data-testid="remember-me"
                label="Remember me"
                checked={remember}
                onChange={setRemember}
              />
              <div className="text-sm text-primary-light">Forgot password</div>
            </div>
            <TheButton
              size="large"
              disabled={!isValid}
              block
              onClick={handleSubmit(submit)}
              data-testid="btn-submit"
            >
              Sign in
            </TheButton>
          </>
        )}
      />
    </>
  );
};
