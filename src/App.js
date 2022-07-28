import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/common/Cabecalho";
import Menu from "./components/Pages/MoviesPage";
import Sessoes from "./components/Pages/SessoesPage";
import Assentos from "./components/Pages/AssentosPage"
import Sucesso from "./components/Pages/SucessoPage"


export default function App(){
    
    
    return(
        <BrowserRouter>
        <Cabecalho/>
        <Routes>
            <Route path="/" element ={<Menu/>}/>
            <Route path="/sessoes/:idFilme" element ={<Sessoes/>}/>
            <Route path="/assentos/:idSessao" element ={<Assentos/>}/>
            <Route path="/sucesso" element ={<Sucesso/>}/>
        </Routes>
        </BrowserRouter>
    )
}