import { formSystem } from "build-system/form";
import { INotification, Notification } from "components/atomic/Notification";
import { useRef, useState } from "react";
import * as yup from "yup";
import { Button } from "../atomic/Button";
import { Checkbox } from "../atomic/Checkbox";
import { BasicForm, IBasicForm } from "../atomic/Form";
import { Logo } from "../atomic/Logo";
import { useNavigate } from "react-router-dom";
import { login } from "services/auth.service";
import { AxiosError } from "axios";

export interface ILoginForm {
  username: string;
  password: string;
}

export const defaultformFields = formSystem().login;

export const LoginForm = () => {
  const notiRef = useRef(null);
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
        if (notiRef.current) {
          (notiRef.current as INotification).success();
        }
        navigate("/shipping-order");
      })
      .catch((err: AxiosError) => {
        if (notiRef.current) {
          (notiRef.current as INotification).error(err.status, err.message);
        }
      });
  };

  return (
    <>
      <Notification ref={notiRef} />
      <BasicForm
        cardArgs={{ width: 388 }}
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
                data-testid="remember-me"
                label="Remember me"
                checked={remember}
                onChange={setRemember}
              />
              <div className="text-sm text-primary-light">Forgot password</div>
            </div>
            <Button
              disabled={!isValid}
              block
              type="primary"
              onClick={handleSubmit(submit)}
              data-testid="btn-submit"
            >
              Log in
            </Button>
          </>
        )}
      />
    </>
  );
};
