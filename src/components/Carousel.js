import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = (props) => {
  return (
    <Carousel autoPlay interval={2000} infiniteLoop centerMode dynamicHeight emulateTouch showThumbs={false} showStatus={false}>
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
        <img alt="" src="https://lh3.googleusercontent.com/proxy/r3RyuGxWX1PD9KJqMt6h-xXF3Oo82iQxXZ25gNQeQcxMJL1ACdU4CBimvbZkK6TVQ0YdDZpBPvA4dht4ny-GBvVQaltMo1bKk20sledTXv6yzmh4uFSiiDa-_Qv1pE5RRl4n-yR6R5HilJTdp34C9qOiHYFTC6JntipBZTt7Bafd" />
      </div>
    </Carousel>
  )
};

export default CarouselSlider;