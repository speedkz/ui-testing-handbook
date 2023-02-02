import { useState } from "react";
import { Input, PasswordInput } from "./Input";
import { BasicDatePicker } from "./DatePicker";
import { Select } from "./Select";
import { Controller, useForm, UseFormRegister } from "react-hook-form";
import { Card, CardArgs } from "./Card";
import { yupResolver } from "@hookform/resolvers/yup";

const COLSPANS = [6, 12] as const;
export interface IFormItem {
  component: string;
  label?: string;
  colSpan?: typeof COLSPANS[number];
  options?: any[];
  multiple?: boolean;
  autocomplete?: boolean;
  prependIcon?: any;
}
export interface IForm {
  formFields: TFormFields<any>;
  control?: any;
  register?: UseFormRegister<any>;
  errors: any;
}

export type TFormFields<T> = {
  [key in keyof T]: IFormItem;
};

export enum EFormItem {
  INPUT = "INPUT",
  PASSWORD = "PASSWORD",
  SWITCHER = "SWITCHER",
  DATE = "DATE",
  SELECT = "SELECT",
}

export const COLSPAN_STYLES = {
  6: "col-span-6",
  12: "col-span-12",
};

export const Form = (props: IForm) => {
  const { formFields, control, register, errors } = props;
  const items = Object.keys(formFields).map((key) => ({
    ...formFields[key],
    name: key,
  }));
  return (
    <div className="grid grid-cols-12 gap-4">
      {items.map((item, i) => (
        <FormItem
          key={i}
          {...item}
          register={register}
          control={control}
          error={errors[item.name]}
        ></FormItem>
      ))}
    </div>
  );
};

export const FormItem = ({
  component: componentName,
  label,
  colSpan = 12,
  name,
  control,
  register,
  rules,
  error,
  ...rest
}: IFormItem & any) => {
  const formItems = {
    [EFormItem.INPUT]: Input,
    [EFormItem.PASSWORD]: PasswordInput,
    [EFormItem.SWITCHER]: Switcher,
    [EFormItem.SELECT]: Select,
    [EFormItem.DATE]: BasicDatePicker,
  };
  const Component = formItems[componentName];
  return (
    <div className={`${COLSPAN_STYLES[colSpan]}`}>
      {label && (
        <div
          className="text-xs mb-1"
          dangerouslySetInnerHTML={{ __html: label }}
        ></div>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Component {...field} {...rest} register={register} />
        )}
      />
      {error?.message && (
        <div className="text-xs text-fail capitalize mt-1">
          {error?.message}
        </div>
      )}
    </div>
  );
};

export const RequiredLabel = (label) => {
  return `${label} <span class="text-fail">*</span>`;
};

const Switcher = ({ onChange }: { onChange? }) => {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
    if (onChange) onChange(value);
  };
  let options = [
    { text: "Male", value: "Male" },
    { text: "Female", value: "Female" },
  ];
  return (
    <div className="base-switcher">
      {options.map((option) => (
        <div
          key={option.value}
          className={`${
            value === option.value ? "bg-primary-light text-white" : ""
          }`}
          onClick={() => handleChange(option.value)}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
};

export interface IBasicForm {
  isValid?: boolean;
  handleSubmit?: any;
  getValues?: any;
}

export const BasicForm = ({
  schema,
  formFields,
  Header,
  Footer,
  cardArgs,
}: {
  schema: any;
  formFields: any;
  Header?: any;
  Footer: any;
  cardArgs?: CardArgs;
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  return (
    <Card {...cardArgs}>
      {Header && <Header />}
      <Form
        register={register}
        control={control}
        formFields={formFields}
        errors={errors}
      />
      {Footer && (
        <Footer
          getValues={getValues}
          handleSubmit={handleSubmit}
          isValid={isValid}
        />
      )}
    </Card>
  );
};
