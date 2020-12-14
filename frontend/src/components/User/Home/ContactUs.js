import React from 'react'
import './css/mobile.scss'

function ContactUs() {
    return (
        <>
            <div id="contact-us">
                <div className="container">
                    <h1>Contact Us</h1>
                    <div className="line"></div>
                    <form>
                        <div className="form-control">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Name"/>
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Email"/>
                        </div>
                        <div className={`form-control`}>
                            <label>Subject</label>
                            <input type="text" className="full-width" placeholder="Enter Subject"/>
                        </div>
                        <div className="form-control">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Type Message"/>
                        </div>
                        <input type="submit" value="submit"/>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
