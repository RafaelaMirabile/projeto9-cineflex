import {FormContainer, Info, Button } from "./style"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function UserForms(props){
    const{selectedSeats, movie, weekday,session, dateNumber}= props;
    console.log(selectedSeats);


    const seats = selectedSeats.map(value =>(value.id));
    console.log(seats);
    
    const navigate = useNavigate();

    const[Usernome, setNome] = useState("");
    const[UserCPF, setCPF]= useState("");

    const dataUser ={
        selectedSeats,
        Usernome :Usernome,
        UserCPF : UserCPF,
        movie, 
        weekday,
        session,
        dateNumber
    }

    function buySeats(e){
        
        e.preventDefault();

        
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',{
            ids :seats,    
            name:Usernome,
            cpf:UserCPF,
        });
        requisicao.then(response=>{
            navigate("/sucesso", {state: {dataUser}});
            resetForm();
        })
        requisicao.catch((err) => console.log(err));
    }

    function resetForm(){
        setNome("");
        setCPF("")
    }

    return(
        <>
        <FormContainer>
            <form onSubmit={buySeats}>
                <Info>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." type="text" required value={Usernome} onChange={e => setNome(e.target.value)} ></input>
                </Info>
                <Info>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." pattern="\d*" maxLength={11} minLength={11} type="text"  required value={UserCPF} onChange={e => setCPF(e.target.value)}></input>
                </Info>
                <div><Button type="submit">Reservar assento(s)</Button></div>
            </form>
        </FormContainer>
        </>
    )
}

