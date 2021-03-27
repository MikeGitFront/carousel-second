import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";

const App = () => {
    return (
        <Carousel
            toShow={3}
            toScroll={3}
        >
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16554.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16555.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16556.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16557.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16558.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16559.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16553.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16552.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16511.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16527.jpg" ></div>
            <div src="https://wallpapershome.ru/images/wallpapers/ama-dablam-3840x2160-gori-16521.jpg" ></div>
        </Carousel>
    );
};

export default App;