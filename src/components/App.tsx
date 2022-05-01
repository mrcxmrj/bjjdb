import React from "react";
import "./App.css";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    Container,
    Heading,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { MatchFinder } from "./MatchFinder";

function App() {
    return (
        <Container maxW="container.lg">
            <Navbar />
            <MatchFinder />
        </Container>
    );
}

export default App;
