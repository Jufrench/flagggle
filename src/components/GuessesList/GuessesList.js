import React, { useEffect, useState } from 'react'
import './GuessesList.css'
import GuessItem from '../GuessItem/GuessItem'
import Stack from '@mui/material/Stack';

export default function GuessesList(props) {
    const [fotdLatLong, setFotdLatLong] = useState(null)
    const guessesAvailable = 3

    useEffect(() => {
        if (props.flagOfTheDay && fotdLatLong === null) {
            console.log(props.flagOfTheDay)
            setFotdLatLong([props.flagOfTheDay.latlng[0], props.flagOfTheDay.latlng[1]])
        }
    })


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