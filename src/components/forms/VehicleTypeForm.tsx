import { Button } from "components/atomic/Button";
import {
  BasicForm,
  EFormItem,
  IBasicForm,
  RequiredLabel,
  TFormFields,
} from "components/atomic/Form";
import { useState } from "react";
import * as yup from "yup";

export interface IVehicleTypeForm {
  name: string;
}

export const VehicleTypeForm = (props: IVehicleTypeForm) => {
  const defaultformFields: TFormFields<IVehicleTypeForm> = {
    name: {
      component: EFormItem.INPUT,
      label: RequiredLabel("Name"),
    },
  };
  const [formFields, setFormFields] = useState(defaultformFields);
  const schema = yup
    .object({
      name: yup.string().required().max(50),
    })
    .required();

  const handleCancel = () => {};

  const submit = (value) => {
    console.log(value);
  };
  return (
    <BasicForm
      Header={() => (
        <div className="text-h4 mb-4 text-primary-text">
          Add new Vehicle Type
        </div>
      )}
      formFields={formFields}
      schema={schema}
      Footer={({ handleSubmit, isValid }: IBasicForm) => (
        <div className="flex gap-2 mt-8 justify-end">
          <Button type="text" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            disabled={!isValid}
            type="primary"
            onClick={handleSubmit(submit)}
          >
            Submit
          </Button>
        </div>
      )}
    />
  );
};
