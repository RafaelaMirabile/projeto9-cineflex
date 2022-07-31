import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useEffect } from 'react';
import Horarios from "../HorariosList/Horarios";
import Footer from "../FooterList/Footer";

export default function HorariosPage(){

    const{idFilme}= useParams();
    const[filmeId, setFilmeId]= React.useState({});
    const[horarios, setHorarios] = React.useState([]);
    
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
            setFilmeId(response.data); 
            setHorarios(response.data.days);
        })
    },[])
    return(
        <>
        <p>Selecione o horário</p>
            <Horarios horarios={horarios} filme={filmeId}/>
            <Footer filmeId={filmeId}/>
        </>
    )
}