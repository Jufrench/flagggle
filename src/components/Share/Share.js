import React from 'react';
import Button from '@mui/material/Button';

export default function Share(props) {
    let showCopiedText = false

    function copyText() {
        // console.log('copying text', navigator)
        navigator.clipboard.writeText('You suck lol 🟩')

        showCopiedText = true
        console.log('showcopiedtext', showCopiedText)
        setTimeout(() => {
            showCopiedText = false
            console.log('showcopiedtext', showCopiedText)
        }, 3000)
    }

    return (
        <>
            <Button
                // style={{ display: props.guessesList.length === props.amountOfGuesses ? 'block' : 'none' }} 
                style={{ display: props.endOfGame === true ? 'block' : 'none', width: '100%' }} 
                onClick={copyText}
                variant="outlined" 
            >Share</Button>
            <div style={{ display: showCopiedText === true ? 'block' : 'none' }}>Copied to clipboard</div>
        </>
    )
}