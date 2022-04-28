import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function DailyFlag(props) {
    // console.log('DailyFlag:', props)

    return (
        <Container>
            {props.flagOfTheDay ? 
                // <Box 
                //     sx={{ 
                //         height: '15vh',
                //         width: '20%',
                //         margin: '0 auto',
                //         backgroundImage: `url(${props.flagOfTheDay.png})`,
                //         backgroundPosition: 'center',
                //         backgroundSize: 'contain',
                //         backgroundRepeat: 'no-repeat'
                //     }}> 
                // </Box>
                <img style={{border:'1px solid #707070'}} src={`${props.flagOfTheDay.png}`}/>
                :
                'Loading...'
            }
        </Container>
    )
}