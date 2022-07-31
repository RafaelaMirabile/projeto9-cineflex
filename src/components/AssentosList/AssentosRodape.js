import { useState } from "react"
import { Rodape, Container, Poster, Info} from "./style"

export default function AssentosRodape(props){
    const {movie, weekday, session }=props;

    console.log(session);

    return(
        <Rodape>
            <Container>
                <Poster>
                    {<img src={movie.posterURL} alt={movie.title} />}
                </Poster>
                <Info>
                    {<h2>{movie.title}</h2>}
                    {weekday && session && <h2>{`${weekday} - ${session}`}</h2>}
                </Info>
            </Container>
        </Rodape>
    )
}