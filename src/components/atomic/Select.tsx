import { ChevronDown } from "components/icons/ChevronDown";
import { useCallback, useEffect, useState } from "react";
import { Input } from "./Input";
import { Menu, MenuArgs } from "./Menu";

export const Select = (props: MenuArgs) => {
  const {
    options = [],
    width = "fit-content",
    value,
    keyValue = "value",
    keyText = "text",
    onChange,
    readOnly = true,
    multiple,
  } = props;
  const [valueStr, setValueStr] = useState("");

  const getValueStr = useCallback(
    (key) => {
      const option = options.find((x) => x[keyValue] === key);
      return option ? option[keyText] : "";
    },
    [options, keyText, keyValue]
  );

  useEffect(() => {
    if (!value) {
      setValueStr("");
      return;
    }
    setValueStr(getValueStr(value));
  }, [value, getValueStr]);

  const handleChange = (newValue) => {
    onChange(
      multiple
        ? [...(Array.isArray(value) ? value : [value]), newValue]
        : newValue
    );
  };
  return (
    <>
      <Menu
        width={width}
        multiple={multiple}
        container={
          <Input
            value={valueStr}
            width={width}
            readOnly={readOnly}
            appendIcon={<ChevronDown />}
          >
            {multiple &&
              (Array.isArray(value) ? value : [value]).map((x) =>
                getValueStr(x)
              )}
          </Input>
        }
        options={options}
        onChange={handleChange}
      />
    </>
  );
};
