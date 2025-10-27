import style from './hero.module.css';
import heroImg from './../../assets/img/hero.webp'

function Hero() {
  return (
    <>
    <div className='w-100'>
      <img src={heroImg} alt="Hero Image" />
      </div>
    </>
  );
}

export default Hero;
