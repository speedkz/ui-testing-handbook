import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm, UseFormRegister } from "react-hook-form";
import { Card, CardArgs } from "./Card";
import { DatePicker } from "./Datepicker";
import { Input, PasswordInput } from "./Input";
import { RadioGroup } from "./Radio";
import { SearchRemoteSelect, Select } from "./Select";

const COLSPANS = [6, 12] as const;
export interface IFormItem {
  component: keyof typeof EFormItem;
  label?: string;
  colSpan?: typeof COLSPANS[number];
  options?: any[];
  multiple?: boolean;
  autocomplete?: boolean;
  prependIcon?: any;
  fetchOptions?: any;
  setOptions?: any;
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
  RADIO = "RADIO",
  DATE = "DATE",
  SELECT = "SELECT",
  SELECT_SEARCH_REMOTE = "SELECT_SEARCH_REMOTE",
}

export const COLSPAN_STYLES = {
  6: "col-span-6",
  12: "col-span-12",
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
  ...rest
}: IFormItem & any) => {
  const formItems = {
    [EFormItem.INPUT]: Input,
    [EFormItem.PASSWORD]: PasswordInput,
    [EFormItem.RADIO]: RadioGroup,
    [EFormItem.SELECT]: Select,
    [EFormItem.DATE]: DatePicker,
    [EFormItem.SELECT_SEARCH_REMOTE]: SearchRemoteSelect,
  };
  const Component = formItems[componentName];
  return (
    <div className={`${COLSPAN_STYLES[colSpan]}`}>
      {label && (
        <div
          className="text-xs mb-1 capitalize"
          dangerouslySetInnerHTML={{ __html: label }}
        ></div>
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
