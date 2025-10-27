import { useState } from 'react';
import style from './portfolio.module.css';
import homeImg from './../../assets/img/home.webp';
import cakeImg from './../../assets/img/cake.webp';
import circusImg from './../../assets/img/circus.webp';
import gameImg from './../../assets/img/game.webp';
import safeImg from './../../assets/img/safe.webp';
import submarineImg from './../../assets/img/submarine.webp';

const images = [homeImg, cakeImg, circusImg, gameImg, safeImg, submarineImg];

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.code === 'ArrowRight') nextImage();
    if (e.code === 'ArrowLeft') prevImage();
    if (e.code === 'Escape') closeModal();
  };

  return (
    <>
      <div className='p-5 m-5' tabIndex={0} onKeyDown={handleKeyDown}>
        <h2 className={` text-center fw-bold text-uppercase pb-5 ${style.addressPortfolio}`}>Portfolio</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {images.map((img, i) => (
            <div className="col" key={i}>
              <a className="btn p-0">
                <img
                  src={img}
                  className='img-fluid w-100 rounded-3'
                  alt={`Portfolio ${i}`}
                  onClick={() => openModal(i)}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className={`${style.my_modal} ${style.show}`} onClick={closeModal}>
          <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
            <i className={`bi bi-x-circle-fill  ${style.close_btu}`} onClick={closeModal}></i>
            <i className={`bi bi-arrow-left-circle-fill ${style.left_but}`} onClick={prevImage}></i>
            
            <img src={images[currentIndex]} className={`${style.modal_img}rounded-3 `} alt="" />
            <i className={`bi bi-arrow-right-circle-fill ${style.right_but}`} onClick={nextImage}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
