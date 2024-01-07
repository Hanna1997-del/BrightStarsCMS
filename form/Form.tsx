import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, HTMLProps, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import {
  FormProvider as $FromProvider,
  useFormContext as $useFormContext,
  useForm,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  ValidationMode,
} from "react-hook-form";
import type { Request, Response, ResponseError } from "types/api";
import { AnyObjectSchema, object } from "yup";
import { OnSubmit } from "./types";

type Props = {
  url?: string;
  schema?: AnyObjectSchema;
  config?: Request;
  children: ReactNode | ((arg: UseFormReturn & { values: any }) => ReactNode);
  defaults?: object;
  transform?: (v: any) => object;
  onError?: OnError;
  onSubmit: OnSubmit;
  onSubmitError?: OnSubmitError;
  onSuccess?: OnSuccess;
  validateMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
  customForm?: UseFormReturn<object, any, undefined>;
  className?: string;
};

type OnError = (
  err: ResponseError & {
    values: any;
    setError: (name: never, msg: string) => void;
    setValue: UseFormSetValue<any>;
  }
) => void;

export const FormContext = createContext({} as {
  isFormSubmitting: boolean;
    setFormSubmitting: Dispatch<SetStateAction<boolean>>;
})


type OnSubmitError = (errors: any) => void;

type OnSuccess = (res: Response & { values: any }) => void;

const Form = ({
  url,
  config,
  schema = object({}),
  defaults,
  children,
  transform,
  onError,
  onSubmit,
  onSubmitError,
  onSuccess,
  validateMode = "onChange",
  customForm,
  ...rest
}: Props) => {
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const defaultForm = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaults,
    mode: validateMode,
  });
  

  const form = customForm ? customForm : defaultForm;

  const value = {
    isFormSubmitting,
    setFormSubmitting,

  }
  return (
    <FormContext.Provider value={value}>
    <$FromProvider {...form}>
      <form
        {...rest}
        onSubmit={form.handleSubmit((values) => {
          if (onSubmit) {
            setFormSubmitting(true);
            onSubmit(values, setFormSubmitting, form.reset, form.setError);
          } 
        }, onSubmitError)}
      >
        {typeof children === "function"
          ? children({ ...form, values: form.getValues() })
          : children}
      </form>
    </$FromProvider>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const customContext = useContext(FormContext);
  const defaultContext = $useFormContext();
  return {
    ...customContext,
    ...defaultContext
  }
}

export default Form;
