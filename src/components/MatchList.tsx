import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Collapse,
    Flex,
    HStack,
    IconButton,
    Link,
    List,
    ListItem,
    Slide,
    Spacer,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const MatchList: React.FC = () => {
    return (
        <List spacing={3} marginTop="5">
            <ListItem>
                <Fight />
            </ListItem>

            <ListItem>
                <Fight />
            </ListItem>

            <ListItem>
                <Fight />
            </ListItem>

            <ListItem>
                <Fight />
            </ListItem>
        </List>
    );
};

interface FightProps {
    fighter1: String;
    fighter2: String;
    link: String;
}

const Fight: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            borderBottom="1px"
            borderColor="gray.200"
            borderRadius="base"
            padding="1"
            _hover={{
                border: "1px",
                borderColor: "gray.200",
                cursor: "pointer",
            }}
            onClick={onToggle}
        >
            <HStack>
                <Text>
                    <Link>Fighter A</Link> vs <Link>Fighter B</Link>
                </Text>
                <IconButton
                    icon={<ChevronRightIcon />}
                    aria-label="Youtube link"
                    colorScheme="red"
                    size="xs"
                ></IconButton>
            </HStack>
            <Collapse in={isOpen}>
                <Box color="gray.500">wiecej statystyk, inne linki itd</Box>
            </Collapse>
        </Box>
    );
};
