import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Heading,
    Flex,
    HStack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorMode,
    useColorModeValue,
    Button,
    Box,
} from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.100", "whiteAlpha.100");

    return (
        <Flex
            justify="space-between"
            align="center"
            bg={bgColor}
            p="5"
            fontSize="2xl"
        >
            <Heading>BJJ Database</Heading>
            <HStack>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">asdf</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">asdf</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">asdf</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
        </Flex>
    );
};
