import { faCalendar, faCalendarCheck, faMapMarkedAlt, faPhoneSlash, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div class="row">
                <div class="col-sm service-col">
                    <div><h3><FontAwesomeIcon icon={faCalendarCheck} /></h3></div>
                    <div><h2>Mon-Fri: 10AM-9:30PM</h2> <h6>Working Hour</h6></div>

                </div>
                <div class="col-sm service-col">
                    <div><h3><FontAwesomeIcon icon={faMapMarkedAlt} /></h3></div>
                    <div><h2>Mirpur-10 Dhaka</h2> <h6>Store Location</h6></div>

                </div>
                <div class="col-sm service-col">
                    <div><h3><FontAwesomeIcon icon={faPhoneVolume} /></h3></div>
                    <div><h2>+9997 509 876</h2> <h6>Working Hour</h6></div>

                </div>
            </div>
        </div>
    );
};

export default Services;