import Slider from 'react-slick';
import { EventsCard } from '../EventsCard';

export const Carousel = ({ posts }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas a mostrar al mismo tiemp
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: 0,
    lazyLoad: true,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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