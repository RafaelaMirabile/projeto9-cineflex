import { Link } from "react-router-dom";
import { MainContainer,Heading, Column, Info,Button} from "./style";

export default function Recibo(props){
   const{dataUser}=props;
    console.log(dataUser);
    console.log(dataUser.Username);

    const seats =[...dataUser.selectedSeats];
    console.log(seats[0].name);


    return(
        <MainContainer>
        <Heading>
            Pedido feito <br/>com sucesso!
        </Heading>
        <Column>
            <Info>
                <h3>Filme e sessão</h3>
                {<p>{dataUser.movie.title}</p>}
                {<p>{dataUser.dateNumber} - {dataUser.session}</p>}

                    <h3>Ingressos</h3>
                    {seats.map((value,index)=>
                    <div key ={index}>
                        <p>Assento {value.name}</p>
                    </div>
                    )}

                    <Info/>
                        <h3>Comprador</h3>
                        {<p>Nome: {dataUser.Usernome}</p>}
                        {<p>CPF: {dataUser.UserCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")} </p>}
                    </Info>


        </Column>
        <Link style={{textDecoration: "none"}} to="/"><Button>Voltar para Home</Button></Link>
    </MainContainer>
    )
}

//{info.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}