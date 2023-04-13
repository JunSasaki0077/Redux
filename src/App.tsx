import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import UserView from './view/user/UserView';
import ArticleView from './view/article/ArticleView';
import { FLEXIBLE_MAX_WIDTH, FLEXIBLE_MIN_WIDTH } from './view/theme';
import { blue } from '@mui/material/colors';

const App:React.FC = ()  => {
  return (
    <AppContainer>
      <AppHeader />    
      <MainContainer>
        <Stack spacing={2}>
          <UserView/>
          <ArticleView/>
        </Stack>
      </MainContainer>
    </AppContainer>
  );
}

  type AppContainerProps = {
    children: React.ReactNode
  }

  const AppContainer: React.FC<AppContainerProps> = (props) => {
    return (
      <Box display="flex" flexDirection="column">
        {props.children}
      </Box>
    )
  }

  type MainContainerProps = {
    children: React.ReactNode;
  }


  const MainContainer: React.FC<MainContainerProps> = (props) => {
    return (
      <Box flexGrow={1} sx={{overflowY: 'auto'}}>
        <Box width="100vw" minWidth={`${FLEXIBLE_MIN_WIDTH}px`} maxWidth={`${FLEXIBLE_MAX_WIDTH}px`} margin="auto" px="32px" py="16px">
          {props.children}
        </Box>
      </Box>
    )
  }

  const AppHeader:React.FC = () => {
    return (
      <AppBar sx={{backgroundColor:blue[900]}} position='static'>
        <Toolbar sx={{
          width:"100vw",
          minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
          maxWidth: `${FLEXIBLE_MAX_WIDTH}px`,
          margin: "auto"
        }}>
          <Box sx={{fontSize:'1.5rem',fontWeight:'bold'}}>Managing Normalized Data</Box>
        </Toolbar>
      </AppBar>
    )
  }
export default App;
