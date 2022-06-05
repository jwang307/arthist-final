import React, { useState } from 'react'
import '../../App.css'
import './LibyanSibyl.css'
import {IconButton, Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material'
import { Button } from '../Button'



function TestArt() {
  const [open, setOpen] = useState(false)
  function preventReload(e) {
    e.preventDefault();
    setOpen(false)
  }
  return (
      <>
        <h1 className='art-title'>Libyan Sibyl</h1>
        <p>by Michelangelo (1510)</p>
        <div className='test-art'>
            <IconButton sx={{width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '30%', 
                            color: 'red',
                            opacity: 0.2}}
                        onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            sx={{backgroundColor: 'white'}}>
              <DialogContent>
                <img src='images/soa.jpg' alt = 'filler'/>
                <DialogContentText id='dialog-desc' sx={{color: 'white'}}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload(e)}>Close</Button>
              </DialogActions>
              
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='overview'>Overview</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </>
    
  )
}

export default TestArt