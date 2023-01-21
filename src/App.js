import Albums from "./pages/albums/albums";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Photos from "./pages/photos/photos";
import PhotoDetail from "./pages/photoDetail/photoDetail";
import './App.scss'

function BackgroundAnimation() {
    return <div data-test="big" className="night">
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
        <div className="shooting_star"/>
    </div>
}

function App() {
    return (
        <BrowserRouter className="App">
            <BackgroundAnimation/>
            <Routes>
                <Route path="/" element={<Albums/>}/>
                <Route path="/albums/:albumId" element={<Photos/>}/>
                <Route path="/photos/:photoId" element={<PhotoDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
