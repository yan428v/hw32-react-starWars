import React, {useState} from 'react';
import "./App.css"
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <div>
            <Header setCurrentPage={setCurrentPage}/>
            <Main currentPage={currentPage}/>
            <Footer/>
        </div>
    );
};
export default App;









