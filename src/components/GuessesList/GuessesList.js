import React, { useEffect, useState } from 'react'
import './GuessesList.css'
import GuessItem from '../GuessItem/GuessItem'
import Stack from '@mui/material/Stack';

export default function GuessesList(props) {
    const [fotdLatLong, setFotdLatLong] = useState(null)
    const guessesAvailable = 3

    // const [distance, setDistance] = useState(null)
    // const [percentCorrect, setPercentCorrect] = useState(null)

    useEffect(() => {
        if (props.flagOfTheDay && fotdLatLong === null) {
            // console.log(props.flagOfTheDay)
            setFotdLatLong([props.flagOfTheDay.latlng[0], props.flagOfTheDay.latlng[1]])
        }
    })

    useEffect(() => {
        if (fotdLatLong && props.countryGuessed) {
            const [guessLat, guessLong] = props.countryGuessed.latlng
            const [fotdLat, fotdLong] = props.fotdLatLong
            const distance = calculateDistance(guessLat, guessLong, fotdLat, fotdLong)
            const percentCorrect = calculatePercentCorrect(guessLat, guessLong, fotdLat, fotdLong)
            props.countryGuessed.distance = distance
            props.countryGuessed.percentCorrect = percentCorrect
            // setDistance(calculateDistance(guessLat, guessLong, fotdLat, fotdLong))
            // setPercentCorrect(calculatePercentCorrect(guessLat, guessLong, fotdLat, fotdLong))

            console.log(props.countryGuessed)
        }
    })

    function calculateDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295    // Math.PI / 180
        var c = Math.cos
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2
        return Math.ceil(12742 * Math.asin(Math.sqrt(a))) // 2 * R; R = 6371 km
    }

    function calculatePercentCorrect(lat1, lon1, lat2, lon2) {
        return (lat2 + lon2) / (lat1 + lon1)
    }


    return (
        // <ul className="guesses-list">
        //     {Array(guessesAvailable).fill(0).map((_, i) => {
        //         return <Guess key={i} />
        //     })}
        // </ul>

        <Stack spacing={1} sx={{ mb: '10px' }}>
            {Array(guessesAvailable).fill(0).map((_, i) => {
                return (
                    <GuessItem
                        key={i} 
                        countryGuessed={props.guessesList[i]} 
                        list={props.guessesList}
                        fotdLatLong={fotdLatLong}
                        flagOfTheDay={props.flagOfTheDay} />
                )
            })}
        </Stack>
    )
}