import {
  COLSPAN_STYLES,
  EFormItem,
  IForm,
  IFormItem,
  IFormSystem,
} from "./interface";

import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TheCard } from "../card/TheCard";
import { TheInputPassword } from "../input/TheInputPassword";
import { TheRadioGroup } from "../radio/TheRadio";
import { SearchRemoteSelect } from "../select/TheSelect";

export const FormSystem: IFormSystem = {
  login: {
    username: {
      label: "user name",
      component: EFormItem.INPUT,
      required: true,
    },
    password: {
      label: "password",
      component: EFormItem.PASSWORD,
      required: true,
    },
  },
};

export const Form = (props: IForm) => {
  const { formFields, control, register, errors } = props;
  const [items, setItems] = useState([] as any[]);
  useEffect(() => {
    const temp = Object.keys(formFields).map((key) => ({
      ...formFields[key],
      name: key,
      "data-testid": key,
    }));
    setItems(temp);
  }, [formFields]);
  return (
    <div className="grid grid-cols-12 gap-4">
      {items.map((item, i) => (
        <>
          <FormItem
            key={i}
            {...item}
            register={register}
            control={control}
            error={errors[item.name]}
          ></FormItem>
        </>
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
  required,
  ...rest
}: IFormItem & any) => {
  const formItems = {
    [EFormItem.INPUT]: Input,
    [EFormItem.PASSWORD]: TheInputPassword,
    [EFormItem.RADIO]: TheRadioGroup,
    [EFormItem.SELECT]: Select,
    [EFormItem.DATE]: DatePicker,
    [EFormItem.SELECT_SEARCH_REMOTE]: SearchRemoteSelect,
  };
  const Component = formItems[componentName];
  return (
    <div className={`${COLSPAN_STYLES[colSpan]}`}>
      {label && (
        <div className="text-xs mb-1 capitalize font-semibold">
          {label}
          {required && <span className="text-primary">*</span>}
        </div>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Component
            {...field}
            {...rest}
            register={register}
            status={Boolean(error) ? "error" : ""}
          />
        )}
      />
      {error?.message && (
        <div className="text-xs text-red-1 capitalize mt-1">
          {error?.message}
        </div>
      )}
    </div>
  );
};

export interface IBasicForm {
  isValid?: boolean;
  handleSubmit?: any;
  getValues?: any;
}

export const TheBasicForm = ({
  schema,
  formFields,
  Header,
  Footer,
  className,
}: {
  schema: any;
  formFields: any;
  Header?: any;
  Footer: any;
  className?: string;
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
    <TheCard className={className}>
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
    </TheCard>
  );
};
