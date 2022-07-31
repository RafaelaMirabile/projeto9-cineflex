import { MainContainer , Sessao, Button,Day, Buttons } from "./style"
import { Link } from "react-router-dom";

export default function Horarios(props){
const {horarios, filme} =props;
console.log(horarios);
console.log(filme);

    return(

            <MainContainer>
                {horarios.map(horario => 
                  <Sessao key ={horario.id}>
                    <Day> <span>{horario.weekday}</span> - <span>{horario.date}</span></Day> 
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
