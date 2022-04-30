import React, { FC } from "react";
import logo from "./logo.svg";
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

function App() {
    return (
        <Container maxW="container.lg">
            <Navbar />
        </Container>
    );
}

export default App;
