import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Assentos from "../AssentosList/Assentos";

export default function AssentosPage(){

    const{idSessao} = useParams();
    const [assentos, setAssentos]= React.useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response)=>{
        setAssentos(response.data.seats);        
        })

    },[]);

//     const newSeats = assentos.map(seat => ({ ...seat, "isSelected": false }));
//  setAssentos([...newSeats]);
//     console.log(assentos);
       

    return(
        <>
        <p>Selecione o(s) assento(s)</p>
       <Assentos assentos={assentos} setAssentos={setAssentos} /> 
        <button >imprimir</button>
        </>
    )
}