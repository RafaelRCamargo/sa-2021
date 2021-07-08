import React from "react";
import TextContainer from '../components/TextContainer';
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './UrbanArtSection.css';
import AOS from 'aos';

let UrbanArtSection = () => {
    AOS.init();
    return(
        <div className="urbanart-section">
            <div className="body-container">
                <h1 data-aos="zoom-in-up" data-aos-duration="1000">Arte Urbana</h1>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                Jhonatan Alves, Laura Ferrari, <br />
                Marcia Ravadelli e Rafael <br />
                Rakochinski
                </p>
            </div>

            <TextContainer name="urban-art" title="o que é?" >
            O primeiro registro de algo assim data na Grécia Pré-Socrática com artistas recitando prosas, músicas e
            melodias. Após isso, suas maiores aparições históricas foram com os trovadores na Idade Média e nos anos 
            70 nos Estados Unidos com o Hip Hop. 
            <br/>
            A arte urbana é caracterizada por ser um tipo de manifestação cultural em espaços urbanos e pode ir de 
            grafites até apresentações feitas na rua. Propõe uma cultura acessível, dado o estilo de vida corrido 
            das grandes cidades onde muitas pessoas não têm tempo de ir até a arte, sendo a ideia levar a arte até elas.
            </TextContainer>
            
            <TextContainer name="urban-art r" title="Eduardo Kobra" src="https://f.i.uol.com.br/fotografia/2020/11/21/16060053625fb9b272cfd5f_1606005362_3x2_md.jpg">
            Conhecido mundialmente, Kobra é responsável por diversos painéis grafitados pelas maiores cidades, 
            sendo marcante pelas suas cores e figuras realistas. Uma de suas obras mais famosas é o Mural Etnias, 
            com 15 metros de altura e 170 metros de largura, feito em virtude das Olimpíadas de 2016 no Boulevard 
            Olímpico no Rio de Janeiro. 
            </TextContainer>
            
            <div className="carousel-container">
                <Carousel name="Eduardo-Kobra"/>
            </div>
            
            <TextContainer name="urban-art r" title="Rodrigo Rizo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZmnDg1YQV2N1w_odvR4BnkPdgKCe3qE6eHRPF47a__7AEzeHuMorwmoxBGdtJJA3LVo&usqp=CAU">
            Se você vive em Florianópolis, provavelmente já viu um de seus trabalhos. Rodrigo Rizo é um paulistano 
            que vive na ilha há mais de 20 anos e é a mente por trás dos vários camaleões espalhados por aí.
            </TextContainer>
            
            <div className="carousel-container" style={{ marginBottom:`0`, margin:`auto` }}>
                <Carousel name="Rodrigo-Rizo"/>
            </div>

        </div>
    );

}

export default UrbanArtSection;