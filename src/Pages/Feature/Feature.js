import React from 'react';
import './Feature.css';
import featuresData from '../../Data/feature.json';
import FeatureItem from '../FeatureItem/FeatureItem';

const Feature = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-4">
                    <div className="col">
                    <h1 className="text-warning text-center banner-title py-3">WHY CHOOSE US</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        featuresData.map(feature => <FeatureItem
                            key={feature.title}
                            feature={feature}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;