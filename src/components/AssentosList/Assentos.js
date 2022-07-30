import React from "react";
import { AssentosContainer, Seat,Seats,SeatsOPtions,Option} from "./style"
import UserInfos from "../FormsList/Forms";



export default function Assentos(props){
    
    const {assentos, setAssentos}=props;
    const [selectedSeats, setselectedSeats]= React.useState([]);


    function updateSeats(id,disponivel,name){
       
        if (disponivel === false ){
            alert("Esse assento não está disponível");
        }else{
            const jaexiste = selectedSeats.find((value) => value.id === id); // true ou false;
           if(jaexiste){
            const assentoSelecionado = assentos.find((value)=> value.id === id);
            assentoSelecionado.isSelected = false; // crio um atributo;
            const novo = selectedSeats.filter((value)=> value.id !== jaexiste.id); 
                setselectedSeats(novo);
            } else{
                setselectedSeats([...selectedSeats,{id:id, isSelected: true, name:name}]);
                const assentoSelecionado = assentos.find((value)=> value.id === id);
                assentoSelecionado.isSelected = true; // crio um atributo;
            }
        }
    }

    console.log(selectedSeats);

    return(
        <AssentosContainer>
                <Seats >
                    {assentos.map((seat) => 
                    <Seat isAvailable={seat.isAvailable} isSelected={seat.isSelected} onClick={() => updateSeats(seat.id,seat.isAvailable,seat.name)} key={seat.id}>
                        {seat.name}
                    </Seat>
                    )}
                </Seats>
                <SeatsOPtions>
                    <Seat style={{ background: '#8DD7CF'}}>
                        <Option>Selecionado</Option>
                    </Seat>
                    <Seat isAvailable ={true}>
                        <Option>Disponível</Option>
                    </Seat>
                    <Seat isAvailable={false}>
                        <Option>Indisponível</Option>
                    </Seat>
                </SeatsOPtions>
                <UserInfos selectedSeats={selectedSeats}/>
        </AssentosContainer>
    )    
    
}   





