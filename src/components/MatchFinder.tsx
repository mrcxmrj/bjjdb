import {
    Box,
    Divider,
    Flex,
    HStack,
    Input,
    List,
    ListIcon,
    ListItem,
    Select,
} from "@chakra-ui/react";
import React from "react";
import { SearchBox } from "./SearchBox";

export const MatchFinder: React.FC = () => {
    return (
        <Flex direction="column" gap="1" marginTop="1">
            <SearchBox />
        </Flex>
    );
};
