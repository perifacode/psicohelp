import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, multiline, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {multiline ? (
        <textarea {...rest} ref={inputRef} />
      ) : (
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      )}
    </>
  );
}
