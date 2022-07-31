import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/common/Cabecalho";
import HorariosPage from "./components/Pages/HorariosPage";
import AssentosPage from "./components/Pages/AssentosPage";
import SucessoPage from "./components/Pages/SucessoPage";
import MoviesPage from "./components/Pages/MoviesPage";

export default function App(){
    return(
        <BrowserRouter>
        <Cabecalho/>
        <Routes>
            <Route path="/" element ={<MoviesPage/>}/>
            <Route path="/sessoes/:idFilme" element ={<HorariosPage/>}/>
            <Route path="/assentos/:idSessao" element ={<AssentosPage/>}/>
            <Route path="/sucesso" element ={<SucessoPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}