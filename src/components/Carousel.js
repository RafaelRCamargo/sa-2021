import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = (props) => {
  if(props.name === "Andy-Warhol") {
    return (
      <Carousel autoPlay interval={4000} infiniteLoop centerMode dynamicHeight emulateTouch showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2021/03/marilyn.jpg" />
        </div>
        <div>
          <img alt="" src="https://fremplast.com.br/new-site/wp-content/uploads/2012/12/andy-warhol-1200x900.jpg" />
        </div>
        <div>
          <img alt="" src="https://dasartes.com.br/dasartes.com.br/wp-content/uploads/2020/11/What-Else-Mag-Cultura-Arte-Pop-Art-Andy-Warhol-Cover.jpg" />
        </div>
        <div>
          <img alt="" src="https://static.todamateria.com.br/upload/ch/eg/cheguevara2.jpg" />
        </div>
      </Carousel>
    )
  }
  if(props.name === "Claudio-Tozzi") {
    return (
      <Carousel autoPlay interval={4000} infiniteLoop centerMode dynamicHeight emulateTouch showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/12/JR-CT-007-Cl%C3%A1udio-Tozzi-P%C3%A1ssaro-ASTcPM-40-X-40-cm-frente.jpg" />
        </div>
        <div>
          <img alt="" src="https://i.pinimg.com/originals/b3/b2/35/b3b2352b05b4bf64e3ba0fe61310d271.jpg" />
        </div>
        <div>
          <img alt="" src="https://www.leilaodearte.com/obras/claudio-tozzi-floresorganica-acrilica-sobre-tela-13529.jpg" />
        </div>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/06/CT-003-Cl%C3%A1udio-Tozzi-Cidade-AST-110-X-145-cm-2000-frente.jpg" />
        </div>
      </Carousel>
    )
  }
  if(props.name === "Eduardo-Kobra") {
    return (
      <Carousel autoPlay interval={4000} infiniteLoop centerMode dynamicHeight emulateTouch showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/12/JR-CT-007-Cl%C3%A1udio-Tozzi-P%C3%A1ssaro-ASTcPM-40-X-40-cm-frente.jpg" />
        </div>
        <div>
          <img alt="" src="https://i.pinimg.com/originals/b3/b2/35/b3b2352b05b4bf64e3ba0fe61310d271.jpg" />
        </div>
        <div>
          <img alt="" src="https://www.leilaodearte.com/obras/claudio-tozzi-floresorganica-acrilica-sobre-tela-13529.jpg" />
        </div>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/06/CT-003-Cl%C3%A1udio-Tozzi-Cidade-AST-110-X-145-cm-2000-frente.jpg" />
        </div>
      </Carousel>
    )
  }
  if(props.name === "Rodrigo-Rizo") {
    return (
      <Carousel autoPlay interval={4000} infiniteLoop centerMode dynamicHeight emulateTouch showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/12/JR-CT-007-Cl%C3%A1udio-Tozzi-P%C3%A1ssaro-ASTcPM-40-X-40-cm-frente.jpg" />
        </div>
        <div>
          <img alt="" src="https://i.pinimg.com/originals/b3/b2/35/b3b2352b05b4bf64e3ba0fe61310d271.jpg" />
        </div>
        <div>
          <img alt="" src="https://www.leilaodearte.com/obras/claudio-tozzi-floresorganica-acrilica-sobre-tela-13529.jpg" />
        </div>
        <div>
          <img alt="" src="https://bg1.com.br/wp-content/uploads/2015/06/CT-003-Cl%C3%A1udio-Tozzi-Cidade-AST-110-X-145-cm-2000-frente.jpg" />
        </div>
      </Carousel>
    )
  }
};

export default CarouselSlider;