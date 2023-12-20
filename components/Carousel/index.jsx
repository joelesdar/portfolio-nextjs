import Slider from 'react-slick';
import { EventsCard } from '../EventsCard';

export const Carousel = ({ posts }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas a mostrar al mismo tiemp
    slidesToScroll: 3,
    initialSlide: 0,
    centerPadding: 0,
    lazyLoad: false,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  return (
    <Slider {...settings}>
      {posts.map(post => (
        <div key={post.id}>
          <EventsCard post={post}/>
        </div>
      ))}
    </Slider>
  );
};