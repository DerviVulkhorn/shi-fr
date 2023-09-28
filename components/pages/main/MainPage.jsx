import Home from "../home/Home"
import PositionPage from "../chiferPositionPage/PositionChifer"
import Login from "../login/Login"
import {Routes, Route, Link, Router} from "react-router-dom"
import "./MainPageStyle.css"

function MainPage() {
    function btn_click(){
        document.location='https://github.com/DerviVulkhorn'
    }
    return(
        <div className="main-content">
        <nav className="nav-bar">
            <Link to="/" className="title-site"><span>ШИ</span>-фр</Link>
            <ul>
                <li>
                    <Link to="/position">Позиционный</Link>
                </li>
                <li>
                    <Link to="/other">Другие</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/login">Войти</Link>
                </li>
                <li>
                    <Link to="/other">Зарегистрироваться</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/position" element={<PositionPage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        <footer className="footer">
        <div className="container">
            <div className="contact-info">
                <h3>О проекте</h3>
                <p>GitHub: <button onClick={btn_click}>DerviVulkhorn</button></p>
            </div>
        </div>
        </footer>
        </div>
    )
}

export default MainPage