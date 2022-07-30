import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Assentos from "../AssentosList/Assentos";



export default function AssentosPage(){

    const{idSessao} = useParams();
    const [assentos, setAssentos]= React.useState([]);
    const [selectedSeats, setselectedSeats]= React.useState([]);

 
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response)=>{
            setAssentos(response.data.seats);         
        })

    },[])

       function updateSeats(id,disponivel,name){
        if (disponivel === false ){
            alert("Esse assento não está disponível")
        }else{
            const jaexiste = selectedSeats.find((value) => value.id === id); // aqui tira;
           if(jaexiste){
                const novo = selectedSeats.filter((value)=> value.id !== jaexiste.id); 
                setselectedSeats(novo);
            } else{
                setselectedSeats([...selectedSeats,{id:id, isSelected: true, name:name}]);
                console.log(selectedSeats);
 
            }

        }
}   



    




    return(
        <>
        <p>Selecione o(s) assento(s)</p>
        <Assentos  assentos={assentos} updateSeats={updateSeats}  selectedSeats={selectedSeats}/>
        <button >imprimir</button>
        </>
    )
}