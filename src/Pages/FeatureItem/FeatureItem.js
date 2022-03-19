
import React, { useState } from 'react';
import './FeatureItem.css';

const FeatureItem = ({feature}) => {
    const { img, title, logo, description } = feature;
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);

    const handleShowMore = () => {
        setDescriptionCollapse(true);
    }
    const handleShowLess = () => {
        setDescriptionCollapse(false);
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="item-style">
                <img className='img-fluid rounded-3 pt-2' style={{ height: '320px', width: '350px' }} src={img} alt="" />
                <div className="d-flex py-3">
                    <div>
                        <img className='ps-5 pe-3' src={logo} alt="" />
                    </div>
                    <div>
                        <h4 className="mt-2 font">{title}</h4>
                    </div>
                </div>
                <p>
                    {
                        descriptionCollapse ? description : description.substr(0, 110) + "..."
                    }
                </p>

                {
                    descriptionCollapse ?
                        <span className="font collapse-btn" onClick={handleShowLess}> See less
                             
                        </span> :
                        <span className="font collapse-btn" onClick={handleShowMore}>See More
                             
                        </span>
                }
            </div>
        </div>
    );
};

export default FeatureItem;