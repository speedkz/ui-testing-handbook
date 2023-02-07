import { User } from "components/icons/User";
import { useRef, useState } from "react";
import * as yup from "yup";
import { Button } from "../atomic/Button";
import { Checkbox } from "../atomic/Checkbox";
import {
  BasicForm,
  EFormItem,
  IBasicForm,
  RequiredLabel,
  TFormFields,
} from "../atomic/Form";
import { Logo } from "../atomic/Logo";
import { Notification } from "components/atomic/Notification";

export interface ILoginForm {
  username: string;
  password: string;
}

export const defaultformFields: TFormFields<ILoginForm> = {
  username: {
    label: RequiredLabel("user name"),
    component: EFormItem.INPUT,
    prependIcon: <User />,
  },
  password: {
    label: RequiredLabel("password"),
    component: EFormItem.PASSWORD,
  },
};

export const LoginForm = (props: ILoginForm) => {
  const notiRef = useRef(null);
  const [remember, setRemember] = useState(false);
  const [formFields, setFormFields] = useState(defaultformFields);
  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const submit = (value) => {
    if (notiRef.current) {
      (notiRef.current as any).notify();
    }
    console.log(value);
  };

  return (
    <>
      <Notification ref={notiRef} />
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
