import { MainContainer , Sessao, Button, Buttons } from "./style"
import { Link } from "react-router-dom";

export default function Horarios(props){
const {horarios} =props;
    return(
            <MainContainer>
                {horarios.map(horario => 
                  <Sessao key ={horario.id}>
                    <div> <span>{horario.weekday}</span> - <span>{horario.date}</span></div> 
                    <Buttons>
                      {horario.showtimes.map(time =>
                        <Link to ={`/assentos/${time.id}`} key ={time.id} style={{ textDecoration: 'none' }} >
                          <Button>{time.name}</Button>
                        </Link>
                      )}
                    </Buttons>
                  </Sessao>
                )} 
            </MainContainer>
    )
}
