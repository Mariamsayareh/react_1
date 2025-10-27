import style from './about.module.css';

function About() {
  return (
    <>
        <div className={`${style.bgMain} d-flex flex-column justify-content-center align-items-center py-5 mb-5`}>
            <h2 className={`${style.about} text-center fw-bold text-uppercase py-5 text-white`}>about</h2>
            <div className="pb-4 row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
                <div className="col w-25">
                    <p className={`text-white fs-5`}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col w-25">
                    <p className={`text-white fs-5`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            <div lassName={` `}>
            <button className={`${style.actve} btn border border-light py-2 px-4`}><i className={`${style.actveText} bi bi-download text-white pe-2`}></i> <span className={`${style.actveText} text-white`}>Free Download!</span></button>
            </div>
        </div>
    </>
  );
}

export default About;
