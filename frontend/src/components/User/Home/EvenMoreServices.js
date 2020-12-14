import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider,faPhoneVolume,faUserMd } from '@fortawesome/free-solid-svg-icons'
import './css/mobile.scss'

function EvenMoreServices() {
    return (
        <>  
            <div id="even-more-services">
                <img src="/images/carousel/business3.jpeg" alt="image" />
                <div className="right">
                    <h1>Even More Services</h1>
                    <div className="line"></div>
                    <div className="box">
                        <FontAwesomeIcon className="fa-2x" icon={faSpider} />
                        <div className="box-in">
                            <h3>SEO & SMO Services</h3>
                            <p></p>
                        </div>
                    </div>
                    <div  className="box">
                        <FontAwesomeIcon className="fa-2x" icon={faPhoneVolume} />
                        <div className="box-in">
                            <h3>Voice & Non-Voice process</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon className="fa-2x" icon={faUserMd} />
                        <div className="box-in">
                            <h3>Placement ( Domestic & International )</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default EvenMoreServices
