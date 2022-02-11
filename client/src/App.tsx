import React from "react";

import Home from "./pages/Home";
import Algorithms from "./pages/algorithms/Algorithms";
import Computations from "./pages/computations/Computations";
import Conversions from "./pages/conversions/Conversions";
import DataStructures from "./pages/datastructures/DataStructures";
import Login from "./pages/accounts/Login";
import Register from "./pages/accounts/Register";
import Account from "./pages/accounts/Account";
import History from "./pages/accounts/History";
import SelectionSort from "./pages/algorithms/SelectionSort";
import BinarySearchTree from "./pages/datastructures/BinarySearchTree";

import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
import Search from "./pages/Search";
import OtherFeatures from "./pages/OtherFeatures";


function App() {
    const style = document.getElementById('dark-mode')
    if (localStorage.getItem('darkMode') == null) {
        localStorage.setItem('darkMode', JSON.stringify(false));
    }

    style?.setAttribute("href", JSON.parse(localStorage.getItem('darkMode') || '') ? 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css' : 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/flatly/bootstrap.min.css')
    return (
        <>
            <Layout>
                <Container>
                    <Routes>
                        <Route path="*" element={<Home/>}/>
                        <Route path="/algorithms" element={<Algorithms/>}/>
                        <Route path="/computations" element={<Computations/>}/>
                        <Route path="/conversions" element={<Conversions/>}/>
                        <Route path="/datastructures" element={<DataStructures/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/selectionsort" element={<SelectionSort/>}/>
                        <Route path="/binarysearchtree" element={<BinarySearchTree/>}/>
                        <Route path="/otherFeatures" element={<OtherFeatures/>}/>
                    </Routes>
                </Container>
            </Layout>
        </>
    );
}

export default App;
