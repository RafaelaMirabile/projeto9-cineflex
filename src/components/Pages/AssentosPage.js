import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Assentos from "../AssentosList/Assentos";


export default function AssentosPage(){

    const{idSessao} = useParams();
    const [assentos, setAssentos]= React.useState([]);
    const[movie, setMovie] = React.useState([]);
    const [weekday, setWeekday] =React.useState([]);
    const [session, setSession] = React.useState([]);
    const[dateNumber, setDataNumber]= React.useState([]);
    

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response)=>{
        setAssentos(response.data.seats);     
        setMovie(response.data.movie); 
        setWeekday(response.data.day.weekday);
        setSession(response.data.name);  
        setDataNumber(response.data.day.date);
        })

    },[]);


    return(
        <>
        <p>Selecione o(s) assento(s)</p>
        <Assentos assentos={assentos} setAssentos={setAssentos} movie={movie} weekday={weekday} session={session} dateNumber={dateNumber}/> 
        </>
    )
}