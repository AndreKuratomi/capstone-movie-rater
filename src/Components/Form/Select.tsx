import {
  FormControl,
  FormErrorMessage,
  Select as ChakraSelect,
  SelectFieldProps as ChakraSelectProps,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";

interface SelectFieldProps extends ChakraSelectProps {
  name: string;
  error?: FieldError | null;
}

type selectColorOptions = {
  [keys: string]: string;
};

const statusColor: selectColorOptions = {
  error: "red.300",
  default: "gray.500",
};

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps
> = ({ name, error = null, ...rest }, ref) => {
  const [colors, setColors] = useState<string>("default");

  useEffect(() => {
    if (!error) {
      return setColors("default");
    }
  }, [error]);

  return (
    <FormControl isInvalid={!!error}>
      <ChakraSelect
        {...rest}
        bg="#FFF"
        _placeholder={{ color: "gray.500" }}
        name={name}
        ref={ref}
      />

      {!!error && (
        <FormErrorMessage
          align="center"
          color="red.500"
          fontStyle=""
          fontWeight="bold"
          justifyContent="center"
          marginTop="1"
          width="190px"
        >
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
