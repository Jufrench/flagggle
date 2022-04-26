import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

export default function SubmitGuess(props) {
    // it seems that a function to update state already has access to the state it needs to update
    // This function component doesn't have "guessesList" passed to it as a prop, but the
    // props.updateGuessesList method has access to "guessesList"
    const [currentGuess, setCurrentGuess] = useState(null)
    const [stepTwo, setStepTwo] = useState(false)

    function handleSubmitGuess() {
        let guess = props.value
        
        guess.distance = props.calculateDistance()
        guess.percentCorrect = props.calculatePercentCorrect()
        props.updateGuessesList(guessesList => [...guessesList, guess])
        props.setCurrentGuess(guess)
        props.setValue({ id: 0, name: '' })
        setStepTwo(true)
    }

    function checkForGameOver() {
        if (props.flagOfTheDay.name === props.currentGuess.name) {
            handleEndOfGame(true)
        } else if (props.guessesList.length < props.amountOfGuesses) {
            console.log('keep going')
        } else if (props.guessesList.length === props.amountOfGuesses) {
            handleEndOfGame(false)
        }
    }

    function handleEndOfGame(userWon) {
        if (userWon) {
            props.setEndOfGame(true)
            console.log('you win!')
        } else {
            props.setEndOfGame(true)
            console.log('you lost!')
        }
    }

    useEffect(() => {
        if (props.canCheckForMatch) {
            handleSubmitGuess()
        }
    })

    useEffect(() => {
        if (stepTwo) {
            checkForGameOver(props.guessesList)
            setStepTwo(false)
        }

        props.setCanCheckForMatch(false)
    })
    
    
    return (
        <Button
            disabled={props.endOfGame}
            onClick={() => props.setCanCheckForMatch(true)}
            variant="contained" 
            style={{ marginTop: '10px', marginBottom: '10px', display: 'block', width: '100%' }}
        >Guess</Button>
    )
}