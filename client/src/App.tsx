import React from "react";

import authService from "./services/auth.service";
import Home from "./pages/Home";
import Algorithms from "./pages/algorithms/Algorithms";
import Computations from "./pages/computations/Computations";
import Conversions from "./pages/conversions/Conversions";
import DataStructures from "./pages/datastructures/DataStructures";
import Login from "./pages/accounts/Login";
import Register from "./pages/accounts/Register";
import Account from "./pages/accounts/Account";
import History from "./pages/accounts/History";
import SelectionSort from "./components/algorithms/sorting/SelectionSort";
import BinarySearchTree from "./pages/datastructures/BinarySearchTree";

import {Container} from "react-bootstrap";
import {Route, Routes,Navigate} from "react-router-dom";
import hotkeys from "hotkeys-js";
// import useNavigate from "react-router-dom";
// Layout
import Layout from "./layout/Layout";
import OtherFeatures from "./pages/OtherFeatures";
import Sorting from "./pages/algorithms/Sorting";
import SingleElementDataStructures from "./pages/datastructures/SingleElementDataStructures";
import ListDataStructure from "./pages/datastructures/ListDataStructure";


function App() {
    const fontStyle = document.getElementById('styleElement');

    /**
     * Sets default font preferences if local storage is empty.
     */
    if (localStorage.getItem('fontsPref') == null) {
        localStorage.setItem('fontsPref',
            JSON.stringify(
                {
                    family: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                    fSize: "1.0rem"
                }));
    }

    /**
     * Sets the font settings of the site from local storage
     */
    if (fontStyle != null) {
        let family = JSON.parse(localStorage.getItem('fontsPref') || '').family
        let fSize = JSON.parse(localStorage.getItem('fontsPref') || '').fSize
        console.log(family + fSize)
        fontStyle.innerHTML = "* {\n" +
            "    font-size: " + fSize + ";\n" +
            "    font-family: \"" + family + "\", sans-serif;\n" +
            "}"
    }

    /**
     * Sets default hotkey mappings if local storage is empty.
     */
    if (localStorage.getItem('keyBinds') == null) {
        localStorage.setItem('keyBinds',
            JSON.stringify(
                {
                    KeyBindString: "alt+1,alt+2,alt+3,alt+4,alt+8,alt+9,alt+0",
                    KeyBindDict: {
                        algorithms: "alt+1",
                        computations: "alt+2",
                        datastructures: "alt+3",
                        conversions: "alt+4",
                        account: "alt+8",
                        history: "alt+9",
                        home: "alt+0",
                    }
                }));
    }

    /**
     * Establishes hotkey mappings.
     * Keys are taken from local storage and applied to location paths.
     */
    let bindsDict = JSON.parse(localStorage.getItem("keyBinds") || '');
    hotkeys(bindsDict.KeyBindString, function (event, handler) {
        switch (handler.key) {
            case bindsDict.KeyBindDict.algorithms:
                window.location.href = ("/algorithms");
                break;
            case bindsDict.KeyBindDict.computations:
                window.location.href = ("/computations");
                break;
            case bindsDict.KeyBindDict.datastructures:
                window.location.href = ("/datastructures");
                break;
            case bindsDict.KeyBindDict.conversions:
                window.location.href = ("/conversions");
                break;
            case bindsDict.KeyBindDict.account:
                window.location.href = ("/account");
                break;
            case bindsDict.KeyBindDict.history:
                window.location.href = ("/history");
                break;
            case bindsDict.KeyBindDict.home:
                window.location.href = ("/");
                break;
            default:
                alert(event);
        }
    });

    const LoggedInWrapper = (children) => {
        console.log(children)
        console.log(<Login/>)
        return authService.isLoggedIn() ? <Navigate to='/account'  /> : children.children
        }
    return (
        <>
            <Layout>
                <Container>
                    <Routes>
                        <Route path="*" element={<Home/>}/>
                        <Route path="/algorithms" element={<Algorithms/>}/>
                        <Route path="/algorithms/sorting" element={<Sorting/>}/>
                        <Route path="/computations" element={<Computations/>}/>
                        <Route path="/conversions" element={<Conversions/>}/>
                        <Route path="/datastructures" element={<DataStructures/>}/>
                        <Route path="/datastructures/single-element" element={<SingleElementDataStructures/>}/>
                        <Route path="/datastructures/lists" element={<ListDataStructure/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/binarysearchtree" element={<BinarySearchTree/>}/>
                        <Route path="/otherFeatures" element={<OtherFeatures/>}/>
                        <Route path="/login" element={<LoggedInWrapper><Login/></LoggedInWrapper>}/>
                        <Route path="/register" element={<LoggedInWrapper><Register/></LoggedInWrapper>}/>
                    </Routes>
                </Container>
            </Layout>
        </>
    );
}

export default App;
