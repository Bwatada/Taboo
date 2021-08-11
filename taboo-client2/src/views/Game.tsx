import React, { useEffect } from 'react';
import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'constants/colors';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
  app: {
    display: 'flex',
    height:'100vh',
    width: '100vw',
    backgroundColor: colors.midnightBlue,
  },
  gameCard: {
    margin: 'auto',
    height: "65%",
    width: "50%"
  }
});

export const Game = (): any => {
  const classes = useStyles();
  return <div className={classes.app}>
        <Card className={classes.gameCard}/>
    </div>
}
  
  
      
