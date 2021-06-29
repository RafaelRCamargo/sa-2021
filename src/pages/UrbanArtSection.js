import React from "react";
import './UrbanArtSection.css';

let UrbanArtSection = () => {

    return(
        <div className="urbanart-section">
            <div className="body-container">
                <div className="body-container-2">
                    <h1>Arte Urbana</h1>
                    <p>
                    Jhonatan Alves, Laura Ferrari, <br />
                    Marcia Ravadelli e Rafael <br />
                    Rakochinski
                    </p>
                </div>
            </div>

            {/*O que é*/}

            <div className="what-is">
                <div className="what-is-p">
                    <h2>O que é?</h2>
                    <p>O primeiro registro de algo assim data na Grécia Pré-Socrática com artistas recitando prosas, 
                        músicas e melodias. Após isso, suas maiores aparições históricas foram com os trovadores na 
                        Idade Média e nos anos 70 nos Estados Unidos com o Hip Hop. 
                        A arte urbana é caracterizada por ser um tipo de manifestação cultural em espaços urbanos e 
                        pode ir de grafites até apresentações feitas na rua. Propõe uma cultura acessível, dado o 
                        estilo de vida corrido das grandes cidades onde muitas pessoas não têm tempo de ir até a arte, 
                        sendo a ideia levar a arte até elas.</p>
                </div>
            </div>

            {/*Eduardo Kobra*/}

            <div className="eduardo-kobra">
                <div className="eduardo-kobra-m">
                    <div className="eduardo-foto"></div>
                    <div className="eduardo-kobra-p">
                        <h2>Eduardo Kobra</h2>
                        <p>Conhecido mundialmente, Kobra é responsável por diversos painéis grafitados pelas maiores 
                            cidades, sendo marcante pelas suas cores e figuras realistas. Uma de suas obras mais famosas 
                            é o Mural Etnias, com 15 metros de altura e 170 metros de largura, feito em virtude das 
                            Olimpíadas de 2016 no Boulevard Olímpico no Rio de Janeiro.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default UrbanArtSection;