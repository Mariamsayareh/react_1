import style from './hero.module.css';
import heroImg from './../../assets/img/hero.webp'

function Hero() {
  return (
    <>
    <div className='py-5 mt-4'>
      <img src={heroImg} className='img-fluid w-100' alt="Hero Image" />
      </div>
    </>
  );
}

export default Hero;
