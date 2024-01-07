import { Dispatch, SetStateAction } from "react";
import { UseFormSetError } from "react-hook-form";

export type OnSubmit = (
    values: any,
    setFormSubmitting: Dispatch<SetStateAction<boolean>>,
    reset?: () => void,
    setError?: UseFormSetError<any>,
    
  ) => void;