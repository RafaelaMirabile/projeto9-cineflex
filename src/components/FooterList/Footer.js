import { FooterContainer , Title, Poster, MovieName} from "./style";

export default function Footer(props){
    const{filmeId} =props;
    return(
    <FooterContainer>
        <Title> 
          <Poster>{<img src={filmeId.posterURL} alt={filmeId.title} />}</Poster>  
          <MovieName>{filmeId.title}</MovieName> 
        </Title>
    </FooterContainer>
    );
}