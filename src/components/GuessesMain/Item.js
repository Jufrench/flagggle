import React, { useEffect, useState } from 'react'
import './Item.css'

export default function GuessItem(props) {
    // const [distance, setDistance] = useState(null)
    // const [percentCorrect, setPercentCorrect] = useState(null)

    // function calculateDistance(lat1, lon1, lat2, lon2) {
    //     var p = 0.017453292519943295    // Math.PI / 180
    //     var c = Math.cos
    //     var a = 0.5 - c((lat2 - lat1) * p)/2 + 
    //             c(lat1 * p) * c(lat2 * p) * 
    //             (1 - c((lon2 - lon1) * p))/2
    //     return Math.ceil(12742 * Math.asin(Math.sqrt(a))) // 2 * R; R = 6371 km
    // }

    // function calculatePercentCorrect(lat1, lon1, lat2, lon2) {
    //     return (lat2 + lon2) / (lat1 + lon1)
    // }

    // useEffect(() => {
    //     if (props.fotdLatLong && distance === null && props.countryGuessed) {
    //         const [guessLat, guessLong] = props.countryGuessed.latlng
    //         const [fotdLat, fotdLong] = props.fotdLatLong

    //         setDistance(calculateDistance(guessLat, guessLong, fotdLat, fotdLong))
    //         setPercentCorrect(calculatePercentCorrect(guessLat, guessLong, fotdLat, fotdLong))
    //     }
    // })

    return (
        <>
            {props.countryGuessed ? 
                <div className='guess-item'>
                    <span className='guess-item-col name'>{props.countryGuessed?.name}</span>
                    <span className='guess-item-col'>{props.countryGuessed.distance} km</span>
                    <span className='guess-item-col'>{props.countryGuessed.percentCorrect}%</span>
                </div>
                :
                <div className='empty-row'></div>
            }
        </>
    )
}