import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import CountrySelect from '../CountrySelect/CountrySelect';
import SubmitGuess from '../SubmitGuess/SubmitGuess'

export default function Form(props) {
    const [currentGuess, setCurrentGuess] = useState()
    const [value, setValue] = useState({ id: 0, name: '' })
    const [inputValue, setInputValue] = useState('')

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
                // currentGuess={props.currentGuess} 
                value={value}
                setValue={setValue}
                // inputValue={inputValue}
                // setInputValue={setInputValue}
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
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