import React from "react";
import Header from "../Components/Header";
import ArtBoard from "../Components/ArtBoard";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function Main() {
    


    return (
        <React.Fragment>
            <Header />
            {/* TODO : 인터랙션 디자인이나 무언가... 추가하기.. */}
            {/* <Nav /> */}
            <ArtBoard />
            {/* <Footer /> */}
        </React.Fragment>
    ); 
}

export default Main;