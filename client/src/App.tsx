import React, {useContext} from "react";

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
import Test from "./pages/Test"

import {Container} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
import {DarkModeContext} from "./context/DarkModeProvider";
import Search from "./pages/Search";


function App() {
  const {isDarkMode} = useContext(DarkModeContext)
  const style = document.getElementById('dark-mode')

  style?.setAttribute("href",isDarkMode ? 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css' : 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/flatly/bootstrap.min.css')
  return (
    <>
      <Layout>
        <Container>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/algorithms"> <Algorithms/> </Route>
            <Route path="/computations"> <Computations/> </Route>
            <Route path="/conversions"> <Conversions/> </Route>
            <Route path="/datastructures"> <DataStructures/> </Route>
            <Route path="/search"> <Search/> </Route>
            <Route path="/login"> <Login/> </Route>
            <Route path="/register"> <Register/> </Route>
            <Route path="/account"> <Account/> </Route>
            <Route path="/history"> <History/> </Route>
            <Route path="/selectionsort"><SelectionSort/></Route>
            <Route path="/binarysearchtree"><BinarySearchTree/></Route>
            <Route path="/test"><Test/></Route>
          </Switch>
        </Container>
      </Layout>
    </>
  );
}

export default App;
