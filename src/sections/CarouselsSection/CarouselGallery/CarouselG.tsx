import "./CarouselG.scss";

interface ICarouselG {
  customClass?: string;
}

function CarouselG({ customClass }: ICarouselG) {
  return (
    <div className={`carouselG ${customClass}`}>
      <div className="ciao"></div>
    </div>
  );
}

export default CarouselG;
