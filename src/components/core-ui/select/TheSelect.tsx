import { debounce } from "lodash";
import { useMemo, useRef, useState } from "react";
import { ISelect } from "./interface";
import { Select, Spin } from "antd";

export const TheSelect = (props: ISelect) => {
  const {
    optionLabelProp = "label",
    width = "100%",
    optionFilterProp = "label",
  } = props;
  return (
    <Select
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
