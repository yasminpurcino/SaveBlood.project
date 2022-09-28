//  @TODO1 - Create basic routing app 

import { Grid, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './routes/routes';


const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container sx={{ margin: 5 }}>
        <Grid item xs>
          <Button onClick={() => navigate('/home')}>Home</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate('/posts')}>Posts</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
        </Grid>
      </Grid>
      <AppRoutes />
    </div>
  );
}

export default App;