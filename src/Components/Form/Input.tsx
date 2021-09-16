import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputColorOptions = {
  [keys: string]: string;
};

const statusColor: inputColorOptions = {
  error: "red.800",
  default: "gray.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, ...rest },
  ref
) => {
  const [colors, setColors] = useState<string>("default");

  useEffect(() => {
    if (!error) {
      return setColors("default");
    }
  }, [error]);

  return (
    <FormControl isInvalid={!!error} textAlign="center">
      <InputGroup>
        {Icon && (
          <InputLeftElement flexDirection="column">
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          {...rest}
          align="center"
          bg="#FFF"
          borderColor={statusColor[colors]}
          color={statusColor[colors]}
          size="md"
          variant="outlined"
          _placeholder={{ color: "gray.500" }}
          name={name}
          ref={ref}
        />
      </InputGroup>
      {!!error && (
        <FormErrorMessage
          align="center"
          color="red.500"
          fontStyle=""
          fontWeight="bold"
          justifyContent="center"
          marginTop="1"
        >
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
