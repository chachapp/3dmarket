import React from "react";
import Header from "../Components/Header";
import ArtBoard from "../Components/ArtBoard";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function Main() {
    
    return (
        <React.Fragment>
            <Header />
            <Nav />
            <ArtBoard />
            <Footer />
        </React.Fragment>
    ); 
}

export default Main;