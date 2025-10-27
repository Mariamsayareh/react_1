import style from './footer.module.css';


function Footer() {
  return (
    <>
    
        <div class={`${style.footer} py-5 px-5 row row-cols-1 row-cols-md-3 g-4`}>
            <div className="col">
                <h2 className={`pb-4 text-white text-center fw-bold text-uppercase`}>Location</h2>
                <p className={`text-white text-center fs-5`}>
                    <span>2215 John Daniel Drive </span>
                    <br/>
                    <span>Clark, MO 65243</span>
                </p>
                
            </div>
            <div class="col"> 
                <h2 className={`text-white text-center fw-bold text-uppercase`}>Around the Web</h2>
                <div className={`${style.icon} text-white pt-4 d-flex justify-content-center column-gap-3`}>
                    <a className="btn btn-outline-light rounded-circle" href="#">
                       <i className={`${style.icon} bi bi-facebook`}></i>
                    </a>
                    <a className="btn btn-outline-light rounded-circle" href="#">
                        <i className={`${style.icon} bi bi-twitter`}></i>
                    </a>
                    <a className="btn btn-outline-light rounded-circle" href="!">
                        <i className={`${style.icon} bi bi-linkedin`}></i>
                    </a>
                    <a className="btn btn-outline-light rounded-circle" href="#">
                        <i className={`${style.icon} bi bi-cc-circle-fill`}></i>
                    </a>
                </div>
            </div>
            <div class="col">
                <h2 className={`pb-4 text-white text-center fw-bold text-uppercase`}>About Freelancer</h2>
                <p className={`text-white text-center fs-5`}>
                    <span>Freelance is a free to use, MIT licensed </span>
                    <br/>
                    <span>Bootstrap theme created by</span>
                    <span>
                        <a className={` ${style.colors}`}> Start Bootstrap</a>
                    </span> .
                </p>
            </div>
        </div>
    </>
  );
}
export default Footer;
