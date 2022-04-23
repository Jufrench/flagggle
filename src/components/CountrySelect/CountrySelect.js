import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect(props) {
//    const [currentGuess, setCurrentGuess] = useState('')
    const [test, setTest] = useState()
    const [filteredFlags, updateFilteredFlags] = useState()

    useEffect(() => {
        updateFilteredFlags(props.flagsData)
    })

    function handleSetCurrrentGuess(country) {
        if (country) {
            props.setCurrentGuess(country)
        }

        // props.setValue(country?.name)
        // props.setInputValue(country?.name)
    }

    function filterFlagList(searchValue) {
        console.log('searchValue:', searchValue)
        const filteredList = filteredFlags.filter(flag => {
            if (flag.name.includes(searchValue)) {
                return flag
            }
        })
        console.log('%cfilteredList', 'color:tomato', filteredList)
        updateFilteredFlags(filteredList);
    }

    function handleValueChange(newValue) {
        props.setValue(newValue)
        props.setCurrentGuess(newValue)
    }

    return (
        <>
            <div style={{border: '1px solid limegreen'}}>{props.flagOfTheDay?.name}</div>
            <div style={{border: '1px solid dodgerblue'}}>Current Guess: {props.currentGuess?.name}</div>
            <Autocomplete
                disabled={props.endOfGame}
                freeSolo
                value={props.value}
                // onChange={(e, newValue) => props.setValue(newValue)}
                onChange={(e, newValue) => handleValueChange(newValue)}
                inputValue={props.inputValue}
                onInputChange={(e, newValue) => props.setInputValue(newValue)}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                id="country-select"
                options={props.flagsData}
                getOptionLabel={(option) => option.name}
                sx={{ color: 'primary.light' }}
                renderInput={(params) => <TextField {...params} label="Countries/Territories" />}
            />
        </>
    )
}