import React, { useEffect, useState } from 'react'
import List from './List'
import Item from './Item'
import Stack from '@mui/material/Stack';

export default function GuessesMain(props) {
    const [fotdLatLong, setFotdLatLong] = useState(null)
    // const guessesAvailable = 3

    // const [distance, setDistance] = useState(null)
    // const [percentCorrect, setPercentCorrect] = useState(null)

    useEffect(() => {
        if (props.flagOfTheDay && fotdLatLong === null) {
            setFotdLatLong([props.flagOfTheDay.latlng[0], props.flagOfTheDay.latlng[1]])
        }
    })

    useEffect(() => {
        if (fotdLatLong && props.countryGuessed) {
            // const [guessLat, guessLong] = props.countryGuessed.latlng
            // const [fotdLat, fotdLong] = props.fotdLatLong
            // const distance = calculateDistance(guessLat, guessLong, fotdLat, fotdLong)
            // const percentCorrect = calculatePercentCorrect(guessLat, guessLong, fotdLat, fotdLong)

            // setDistance(calculateDistance(guessLat, guessLong, fotdLat, fotdLong))
            // setPercentCorrect(calculatePercentCorrect(guessLat, guessLong, fotdLat, fotdLong))
            
        }
    })

    // useEffect(() => {
    //     console.log('props')
    // })

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

    return (
        <List
            guessesList={props.guessesList}
            howManyGuesses={props.howManyGuesses}
            fotdLatLong={fotdLatLong} />
    )
}

/*
Gueses Array
contains a list of object
each object will have:
    the country guessed
    the country's distance
    percentage correct
    and direction to go
    emoji string to populate

The guesses array will be passed down from app 
since the form needs it too
*/
