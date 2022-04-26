import React, { useEffect, useState } from 'react'
import './List.css'
import Item from './Item'
import Stack from '@mui/material/Stack';

export default function GuessesList(props) {

    // useEffect(() => {
    //     console.log('%cguessesList', 'color:tomato', props.guessesList)

    // })

    return (
        // <ul className="guesses-list">
        //     {Array(guessesAvailable).fill(0).map((_, i) => {
        //         return <Guess key={i} />
        //     })}
        // </ul>
        

        <Stack spacing={1} sx={{ mb: '10px' }}>
            {Array(props.guessesAvailable).fill(0).map((_, i) => {
                return (
                    <Item
                        key={i} 
                        // countryGuessed={props.guessesList[i] ? props.guessesList[i] : ''} 
                        countryGuessed={props.guessesList?.[i]} 
                        list={props.guessesList}
                        // fotdLatLong={fotdLatLong}
                        flagOfTheDay={props.flagOfTheDay} />
                )
            })}
        </Stack>

                // <Stack spacing={1} sx={{ mb: '10px' }}>
        //     {Array(guessesAvailable).fill(0).map((_, i) => {
        //         return (
        //             <GuessItem
        //                 key={i} 
        //                 countryGuessed={props.guessesList[i]} 
        //                 list={props.guessesList}
        //                 fotdLatLong={fotdLatLong}
        //                 flagOfTheDay={props.flagOfTheDay} />
        //         )
        //     })}
        // </Stack>
    )
}