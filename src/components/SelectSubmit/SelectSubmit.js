import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import CountrySelect from '../CountrySelect/CountrySelect';
import SubmitGuess from '../SubmitGuess/SubmitGuess'

export default function SelectSubmit(props) {
    const [currentGuess, setCurrentGuess] = useState()
    const [value, setValue] = useState({ id: 0, name: '' })
    const [inputValue, setInputValue] = useState('')
    const [distance, setDistance] = useState(null)
    const [percentCorrect, setPercentCorrect] = useState(null)

    console.log('currentGuess:', currentGuess)

    // function calculateDistance(lat1, lon1, lat2, lon2) {
    //     var p = 0.017453292519943295    // Math.PI / 180
    //     var c = Math.cos
    //     var a = 0.5 - c((lat2 - lat1) * p)/2 + 
    //             c(lat1 * p) * c(lat2 * p) * 
    //             (1 - c((lon2 - lon1) * p))/2
    //     // return Math.ceil(12742 * Math.asin(Math.sqrt(a))) // 2 * R; R = 6371 km

    //     setDistance(Math.ceil(12742 * Math.asin(Math.sqrt(a))))
    // }
    function calculateDistance() {
        const [lat1, lon1] = currentGuess.latlng
        const [lat2, lon2] = props.flagOfTheDay.latlng

        var p = 0.017453292519943295    // Math.PI / 180
        var c = Math.cos
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2
                
        return Math.ceil(12742 * Math.asin(Math.sqrt(a))) // 2 * R; R = 6371 km
    }

    // function calculatePercentCorrect(lat1, lon1, lat2, lon2) {
    //     // return (lat2 + lon2) / (lat1 + lon1)
    //     setPercentCorrect((lat2 + lon2) / (lat1 + lon1))
    // }
    function calculatePercentCorrect() {
        const [lat1, lon1] = currentGuess.latlng
        const [lat2, lon2] = props.flagOfTheDay.latlng

        return (lat2 + lon2) / (lat1 + lon1)
    }

    return (
        <FormControl style={{ display: 'block' }}>
            <CountrySelect
                value={value}
                setValue={setValue}
                inputValue={inputValue}
                setInputValue={setInputValue}
                flagsData={props.flagsData} 
                amountOfGuesses={props.amountOfGuesses}
                guessesList={props.guessesList}
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
                setCanCheckForMatch={props.setCanCheckForMatch}
                endOfGame={props.endOfGame}
                flagOfTheDay={props.flagOfTheDay} />
            <SubmitGuess 
                value={value}
                setValue={setValue}
                // inputValue={inputValue}
                // setInputValue={setInputValue}
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
                calculateDistance={calculateDistance}
                calculatePercentCorrect={calculatePercentCorrect}
                guessesList={props.guessesList} 
                updateGuessesList={props.updateGuessesList} 
                amountOfGuesses={props.amountOfGuesses}
                flagOfTheDay={props.flagOfTheDay}
                canCheckForMatch={props.canCheckForMatch}
                setCanCheckForMatch={props.setCanCheckForMatch}
                endOfGame={props.endOfGame}
                setEndOfGame={props.setEndOfGame}
                setShowModal={props.setShowModal} />
        </FormControl>
    )
}