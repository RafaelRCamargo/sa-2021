import React from "react";
import TextContainer from '../components/TextContainer';
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PopArtSection.css";

let PopArtSection = () => {
  return (
    <div className="popart-section">
      <div className="body-container">
        <h1>Pop Art</h1>
        <p>
          Jhonatan Alves, Laura Ferrari, <br />
          Marcia Ravadelli e Rafael <br />
          Rakochinski
        </p>
      </div>
      
      <TextContainer name="pop-art" title="o que é?">
        A Pop art é um movimento artístico que surgiu nos anos 50 como forma de reação ao expressionismo abstrato e representava críticas à sociedade consumista, que vinha crescendo na época, além de trazer temas como sexualidade, fama e industrialização.
        <br />
        Marcado pela utilização de cores vibrantes, componentes ostensivos da cultura popular e objetos industrializados, a pop art traz esses elementos como ferramenta de crítica, hoje podemos encontrar esse tipo de arte em grafismo, quadrinhos, design e na moda.
      </TextContainer>
      
      <TextContainer name="pop-art r" title="Andy Warhol" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg">
        Pintor e cineasta norte-americano, é um dos artistas mais conhecidos do movimento. Utilizava retratos de famosos da música e do cinema popular, por exemplo Marilyn Monroe e Elvis Presley, além de fazer uso de objetos do consumo em massa, como coca-cola, latas de sopa e automóveis.
      </TextContainer>
      
      <div className="carousel-container">
        <Carousel name="Andy-Warhol"/>
      </div>
      
      <TextContainer name="pop-art r" title="Claudio Tozzi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZmnDg1YQV2N1w_odvR4BnkPdgKCe3qE6eHRPF47a__7AEzeHuMorwmoxBGdtJJA3LVo&usqp=CAU">
        Ganhou destaque no movimento ao reinventar técnicas de reprodução fotográfica. Uma de suas obras de destaque quase foi assolada durante um atentado realizado por um grupo de extrema direita, a obra se chamava “Guevara vivo ou morto”.      
      </TextContainer>
      
      <div className="carousel-container" style={{ marginBottom:`0` }}>
        <Carousel name="Claudio-Tozzi"/>
      </div>
    </div>
  );
};

export default PopArtSection;
