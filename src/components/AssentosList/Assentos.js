import React from "react";
import { AssentosContainer, Seat,Seats,SeatsOPtions,Option} from "./style"
import UserForms from "../UserFormsList/UserForms";
import AssentosRodape from "./AssentosRodape";

export default function Assentos(props){
    
    const {assentos, setAssentos,movie,weekday,session, dateNumber}=props;
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
                    <Seat isSelected style={{ background: '#8DD7CF'}} >
                        <Option>Selecionado</Option>
                    </Seat>
                    <Seat isAvailable ={true}>
                        <Option>Disponível</Option>
                    </Seat>
                    <Seat isAvailable={false}>
                        <Option>Indisponível</Option>
                    </Seat>
                </SeatsOPtions>
                <UserForms selectedSeats={selectedSeats} movie={movie} weekday={weekday} session={session}  dateNumber={dateNumber}/>
                <AssentosRodape movie={movie} weekday={weekday} session={session}/>
        </AssentosContainer>
    )    
    
}   





