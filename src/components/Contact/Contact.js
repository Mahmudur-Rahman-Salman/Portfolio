import React from 'react';
import { Form } from 'react-bootstrap';


const Contact = () => {
    const fbClick = () => {
        window.open('https://www.facebook.com/profile.php?id=100006635527447');
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h3 className='text-center text-dark'>Contact me</h3>
            <div className="underline"></div>

            <div className="row mt-5 pt-5">
                <div className="col-lg-6 mb-3">
                    <h4 className='text-start mb-4 pb-4'>Contact Information</h4>
                    <div className='d-flex align-items-center' data-aos="fade-right" data-aos-duration="1000">
                        <i class="fas fa-phone fa-2x align-items-center text-danger"></i>
                        <div className='text-start ms-3'>
                            <h5 className='ms-2'>Phone</h5>
                            <p className='ms-2 '>+8801776145803</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center ' data-aos="fade-right" data-aos-duration="2000">
                        <i class="fas fa-envelope-open fa-2x align-items-center text-danger"></i>
                        <div className='text-start ms-3'>
                            <h5 className='ms-2'>Email</h5>
                            <p className='ms-2 '>mahmudur.salman@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center' data-aos="fade-right" data-aos-duration="3000">
                        <i class="fas fa-map-marked fa-2x align-items-center text-danger"></i>
                        <div className='text-start ms-3'>
                            <h5 className='ms-2'>Location</h5>
                            <p className='ms-2 '>Sylhet, Bangladesh</p>
                        </div>
                    </div>
                    {/* <div className='d-flex' data-aos="fade-right" data-aos-duration="3000">
                        <i class="fab fa-facebook fa-2x m-2 text-info" onClick={fbClick}></i>
                        <a href="www.google.com"><i class="fab fa-instagram fa-2x m-2 text-info"></i></a>
                        <a href="www.google.com"><i class="fab fa-linkedin fa-2x m-2 text-info"></i></a>
                        <a href="www.google.com"><i class="fab fa-github fa-2x m-2 text-info"></i></a>

                    </div> */}


                </div>
                <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="2000">
                    <Form>
                        <div className='container p-5 bg-dark text-dark'>
                            <h4 className='text-light mb-4'>Message me</h4>
                            <input type="text" className="form-control" placeholder="Full name" aria-label="First name" />
                            <br />
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            <br />
                            <textarea placeholder="Enter message" className="form-control" id="exampleFormControlTextarea1" rows="3">
                            </textarea>
                            <button className="btn btn-outline-light rounded-pill my-3">Send Message</button>
                        </div>

                    </Form>
                </div>
            </div>


        </div>
    );
};

export default Contact;