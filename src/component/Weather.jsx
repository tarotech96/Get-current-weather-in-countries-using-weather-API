import React from 'react';

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1 className="city">{props.city}&rsquo;{props.country}</h1>
                <h5 className="py-4">
                    <span><i className={`wi ${props.iconWeather} display-1`} /></span>
                </h5>
                <h4>{props.celcius ? (<h1 className="py-2">{props.celcius}&deg;</h1>) : null}</h4>

                {/* show max and min temp */}
                <h4>{minmaxTemp(props.temp_min, props.temp_max)}</h4>

                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="py-4">Min: {min}&deg;</span><br></br>
                <span className="py-4">Max: {max}&deg;</span>
            </h3>
        )
    }
}

export default Weather;