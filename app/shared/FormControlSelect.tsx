"use client";

import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { RiArrowDownSFill } from "react-icons/ri";

interface FormControlSelectProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function FormControlSelect({
  label,
  placeholder,
  onChange,
  options,
}: FormControlSelectProps) {
  return (
    <FormControl>
      <FormLabel fontWeight={800} fontSize={16}>
        {label}
      </FormLabel>
      <Select
        bg={"white"}
        icon={<RiArrowDownSFill />}
        placeholder={placeholder}
        borderColor={"gray.500"}
        fontSize={14}
        onChange={({ target }) => onChange(target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
