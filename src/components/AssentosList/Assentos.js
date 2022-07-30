import React from "react";
import { AssentosContainer, Seat,Seats,SeatsOPtions,Option, UserInfos} from "./style"



export default function Assentos(props){
    const {assentos, updateSeats}=props;


    const newSeats = assentos.map(seat => ({ ...seat, "isSelected": false }));

    return(
        <AssentosContainer>
                <Seats >
                    {newSeats.map((seat) => 
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
                <UserInfos>
                    kkkkkkkk
                </UserInfos>

        </AssentosContainer>
    )



}
