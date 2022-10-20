import { StyledCard, StyledImagem } from "./Styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <StyledCard onClick={reproduzVideo}>
      <StyledImagem src={props.image1} alt={props.textoAlternativo}/>
      <h4>{props.titulo}</h4>
    </StyledCard>
  );
}

export default CardVideo;
