import React from 'react'
import Button from '@mui/material/Button'

export default function Share(props) {
    let showCopiedText = false
    const guesses = 3;

    function results() {
        let text = '🟩🟩🟩🟩🟩'

        // for (let i = 0; i <= guesses.length; i++) {
        //     text += `
        //     🟩🟩🟩🟩🟩
        //     `
        // }
        // console.log('text:', text)
        return text
    }

    function shareResults() {
        // console.log('copying text', navigator)
        navigator.clipboard.writeText(results())

        showCopiedText = true
        console.log('showcopiedtext', showCopiedText)
        setTimeout(() => {
            showCopiedText = false
            console.log('showcopiedtext', showCopiedText)
        }, 3000)
    }

    // console.log('%cresults:', 'color:dodgerblue', results())

    return (
        <>
            <Button
                // style={{ display: props.guessesList.length === props.amountOfGuesses ? 'block' : 'none' }} 
                style={{ display: props.endOfGame === true ? 'block' : 'none', width: '100%' }} 
                onClick={shareResults}
                variant="outlined" 
            >Share</Button>
            <div style={{ display: showCopiedText === true ? 'block' : 'none' }}>Copied to clipboard</div>
        </>
    )
}