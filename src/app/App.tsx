import React from 'react';
import '../css/app.css';
import { Box, Container, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/base';


function App() {
  return <Container maxWidth="sm">
    <Stack flexDirection={"column"}>
      <Box sx={{my:4}}>
        <Typography variant='h4' component={"h4"}>
          Creat React App on TypeScript with REDUX
        </Typography>
      </Box>
      <Button > Contained</Button>
    </Stack>
  </Container>
}

export default App;
