import React from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import makeStyles from './styles'
const Header = () => {
  const classes=makeStyles()
  return (
   <AppBar position='static'>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.Toolbar} >
          kapsmaps travels
      </Typography>
      <Box display="flex">
      <Typography variant="h5" className={classes.title} >
          Exploration is Happiness
      </Typography>
      {/* <Autocomplete> */}
        <div className={classes.search}>
          <div className={classes.searchIcon} >
            <SearchIcon/>
          </div>
          <InputBase placeholder='Search..' classes={{root:classes.inputroot,input:classes.inputInput}}/>
            
        </div>
      {/* </Autocomplete> */}
      </Box>
    </Toolbar>
   </AppBar>
   

  )
}

export default Header