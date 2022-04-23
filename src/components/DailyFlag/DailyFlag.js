import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function DailyFlag(props) {
    // console.log('DailyFlag:', props)

    return (
        <Container maxWidth="sm" sx={{ mb: '10px', background: '#ccc' }}>
            {props.flagOfTheDay ? 
                <Box 
                    sx={{ 
                        // border: '2px solid #333', 
                        // height: '75px',
                        height: '15vh',
                        // width: '150px',
                        width: '20%',
                        margin: '0 auto',
                        // backgroundImage: `url('https://flagcdn.com/co.svg')`,
                        backgroundImage: `url(${props.flagOfTheDay.png})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}> 
                </Box>
                :
                'Loading...'
            }
        </Container>
    )
}