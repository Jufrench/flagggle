import './App.css';
import React, { useEffect, useState } from 'react';
import * as CountriesAPI from './CountriesAPI.js'
import DailyFlag from './components/DailyFlag/DailyFlag';
import GuessesMain from './components/GuessesMain/GuessesMain';
import SelectSubmit from './components/SelectSubmit/SelectSubmit';
import Share from './components/Share/Share'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function App() {
    const [flagsData, getFlagsData] = useState([])
    const [flagOfTheDay, setFlagOfTheDay] = useState()
    const [guessesList, updateGuessesList] = useState([])
    const [randomNumber, getRandomNumber] = useState()
    const amountOfGuesses = 3
    const [canCheckForMatch, setCanCheckForMatch] = useState(false)
    const [endOfGame, setEndOfGame] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        CountriesAPI.Flags()
            .then(data => {
                getFlagsData(data)
            })

        getRandomNumber(Math.floor(Math.random() * 251))
    }, [])

    useEffect(() => {
        setFlagOfTheDay(flagsData[randomNumber])
    })

    return (
        <div className="App">
            <div className="inner-wrap">
                <header>
                    <Box sx={{ borderBottom: '2px solid #333', mb: '20px', padding: '6px' }}>
                        <nav>
                            <h1>Flagggle</h1>
                        </nav>    
                    </Box>
                </header>
                <DailyFlag flagOfTheDay={flagOfTheDay} />
                <GuessesMain 
                    guessesList={guessesList} 
                    flagOfTheDay={flagOfTheDay} />
                <SelectSubmit
                    flagsData={flagsData} 
                    guessesList={guessesList} 
                    updateGuessesList={updateGuessesList} 
                    amountOfGuesses={amountOfGuesses}
                    flagOfTheDay={flagOfTheDay}
                    setEndOfGame={setEndOfGame}
                    canCheckForMatch={canCheckForMatch}
                    setCanCheckForMatch={setCanCheckForMatch}
                    endOfGame={endOfGame}
                    setShowModal={setShowModal} />
                <Share
                    guessesList={guessesList}
                    endOfGame={endOfGame}
                    amountOfGuesses={amountOfGuesses} />
            </div>
        </div>
    );
}

export default App;
