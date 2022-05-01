import { HStack, Input, Select } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const SearchBox = (props: Props) => {
    return (
        <>
            <Input placeholder="search" />
            <HStack>
                <Select placeholder="search for fighter">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Select placeholder="search for position">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Select placeholder="search for category">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </HStack>
        </>
    );
};
