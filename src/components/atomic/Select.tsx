import { Select as ASelect, SelectProps, Spin } from "antd";
import { debounce } from "lodash";
import { useMemo, useRef, useState } from "react";

export interface ISelect extends SelectProps {
  disabled?: boolean;
  width?: number | string;
  options: any[];
  optionLabelProp?: string;
  mode?: "multiple" | "tags";
  status?: "error" | "warning";
  defaultActiveFirstOption?: boolean;
  showSearch?: boolean;
  showArrow?: boolean;
}
export const Select = (props: ISelect) => {
  const {
    optionLabelProp = "label",
    width = "100%",
    optionFilterProp = "label",
  } = props;
  return (
    <ASelect
      {...props}
      style={{ width }}
      optionLabelProp={optionLabelProp}
      optionFilterProp={optionFilterProp}
    />
  );
};

export interface DebounceSelectProps<ValueType = any> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
  setOptions: any;
}

export interface ISearchRemoteSelect extends DebounceSelectProps, ISelect {}

export const SearchRemoteSelect = (props: ISearchRemoteSelect) => {
  const { debounceTimeout = 800, setOptions, fetchOptions } = props;
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout, setOptions]);
  return (
    <Select
      showSearch={true}
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    />
  );
};
