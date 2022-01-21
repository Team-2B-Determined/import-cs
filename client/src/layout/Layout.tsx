import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout:React.FC = ({children}) => {
    return (
        <Router>
            <Menu />
            <main>{children}</main>
            <Footer />
        </Router>
    )
}

export default Layout