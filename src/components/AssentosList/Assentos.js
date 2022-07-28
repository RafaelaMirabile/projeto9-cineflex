import { AssentosContainer,  Seat,Seats} from "./style"


export default function Assentos(props){
    const {assentos}=props;

    console.log(assentos);
    
    return(
        <AssentosContainer>
                <Seats>
                    {assentos.map(seat => 
                    <Seat key={seat.id}>
                        {seat.name}
                    </Seat>
                    )}
                </Seats>
        </AssentosContainer>
    )
}