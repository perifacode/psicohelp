import React, { useRef, useEffect } from "react";
import ReactSelect from "react-select";
import { useField } from "@unform/core";

const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return "";
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <ReactSelect
      isSearchable={false}
      placeholder="Selecione..."
      defaultValue={defaultValue}
      ref={selectRef}
      {...rest}
      styles={{
        indicatorSeparator: () => null,
        control: () => ({
          display: "flex",
          height: 40,
          background: "#eee",
          alignItems: "center",
          color: "#fc8686",
          borderColor: "#fc8686",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 5,
          marginBottom: 5,
        }),
        option: () => ({
          display: "flex",
          alignItems: "flex-start",
          padding: 5,
          color: "#fc8686",
        }),
        dropdownIndicator: (styles) => ({
          ...styles,
          color: "#fc8686",
        }),
        menu: (styles) => ({
          ...styles,
          borderColor: "transparent",
          padding: 0,
          margin: 0,
          boxShadow: 0,
        }),
        placeholder: (styles) => ({ ...styles, color: "#fc8686" }),
        singleValue: (styles) => ({ ...styles, color: "#fc8686" }),
      }}
    />
  );
};
export default Select;
