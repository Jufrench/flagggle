import React from 'react'
import Button from '@mui/material/Button'

export default function Share(props) {
    let showCopiedText = false

    function createShareContent() {
        // console.log('how many guesses:', props.howManyGuesses)
        let results = ''
        const rows = props.howManyGuesses
        const columns = 5

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
                results += '🟩'
            }
            results += `\n`
        }

        // console.log(results)
    }

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
        navigator.clipboard.writeText(results())

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
                onClick={createShareContent}
                variant="outlined" 
            >Share</Button>
            <div style={{ display: showCopiedText === true ? 'block' : 'none' }}>Copied to clipboard</div>
        </>
    )
}