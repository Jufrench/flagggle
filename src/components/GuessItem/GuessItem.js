import React, { useEffect, useState } from 'react'
import './GuessItem.css'

export default function GuessItem(props) {
    // console.group('%cstart', 'color:tomato')
        // console.log('latlong:', props.fotdLatLong)
        // console.log('guessitem:', props.countryGuessed)
        // console.log('flagOfTheDay', props.flagOfTheDay)
    // console.groupEnd()
    const [distance, setDistance] = useState(null)
    const [percent, setPercent] = useState(null)

    function calculateDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295    // Math.PI / 180
        var c = Math.cos
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2
      
        return Math.ceil(12742 * Math.asin(Math.sqrt(a))) // 2 * R; R = 6371 km
    }

    // console.log(props.fotdLatLong)
    // console.log('countryGuessed:', props.countryGuessed)

    useEffect(() => {
        if (props.fotdLatLong && distance === null && props.countryGuessed) {
            const [guessLat, guessLong] = props.countryGuessed.latlng
            const [fotdLat, fotdLong] = props.fotdLatLong

            setDistance(calculateDistance(guessLat, guessLong, fotdLat, fotdLong))

            console.log('%cdistance:', 'color:tomato', distance)
        }
    })

    return (
        <>
            {props.countryGuessed ? 
                <div className='guess-item'>
                    <span className='guess-item-col name'>{props.countryGuessed?.name}</span>
                    <span className='guess-item-col'>{distance} km</span>
                </div>
                :
                <div className='empty-row'></div>
            }
        </>
    )
}