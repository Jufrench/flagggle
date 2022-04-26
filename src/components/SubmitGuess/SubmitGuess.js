import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

export default function SubmitGuess(props) {
    // it seems that a function to update state already has access to the state it needs to update
    // This function component doesn't have "guessesList" passed to it as a prop, but the
    // props.updateGuessesList method has access to "guessesList"

    // const [canCheckForAnswer, checkForAnswer] = useState(false)
    const [currentGuess, setCurrentGuess] = useState(null)
    const [stepTwo, setStepTwo] = useState(false)

    function handleSubmitGuess() {
        // props.setCurrentGuess(props.value)
        props.updateGuessesList(guessesList => [...guessesList, props.value])
        props.setCurrentGuess(props.value)
        props.setValue({ id: 0, name: '' })
        // props.setCanCheckForMatch(false)
        setStepTwo(true)
    }

    function checkForGameOver() {
        if (props.flagOfTheDay.name === props.currentGuess.name) {
            // props.setEndOfGame(true)
            // alert('you win!')
            // setUserWon(true)
            handleEndOfGame(true)
        } else if (props.guessesList.length < props.amountOfGuesses) {
            console.log('keep going')
        } else if (props.guessesList.length === props.amountOfGuesses) {
            // setUserWon(false)
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

    // function checkForMatch() {
    //     if (props.value.name === props.flagOfTheDay.name) {
    //         console.log('%cYou Win', 'color:limegreen')
    //         props.setEndOfGame(true)
    //     } else {
    //         console.group('%cTry again', 'color:tomato')
    //             console.log('amountOfGuesses:', props.amountOfGuesses)
    //             console.log('guessesList length:', props.guessesList.length)
    //         console.groupEnd()
    //         if (props.amountOfGuesses === props.guessesList.length) {
    //             props.setEndOfGame(true)
    //         }
    //     }
    // }
    // useEffect(() => {
    //     if (currentGuess !== null) {

    //     }
    // })

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
        // if (props.guessesList.length > 0) {
        //     checkForGameOver()
        // }

        // if (props.canCheckForMatch) {
            // handleSubmitGuess()
            // props.updateGuessesList(guessesList => [...guessesList, props.value])
            // checkForGameOver()
            // console.group('start')
            // console.log('current', props.currentGuess)
            // console.log('list', props.guessesList)
            // console.groupEnd()


        props.setCanCheckForMatch(false)
        // }
    })
    
    
    return (
        <Button
            disabled={props.endOfGame}
            // onClick={handleSubmitGuess}
            onClick={() => props.setCanCheckForMatch(true)}
            variant="contained" 
            style={{ marginTop: '10px', marginBottom: '10px', display: 'block', width: '100%' }}
        >Guess</Button>
    )
}