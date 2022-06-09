import React, { useState } from 'react'
import '../../App.css'
import './Paintings.css'
import {IconButton, Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material'
import { Button } from '../Button'

function TestArt2() {
  const [open, setOpen] = useState(false)
  function preventReload(e) {
    e.preventDefault();
    setOpen(false)
  }

  const [open1, setOpen1] = useState(false)
  function preventReload1(e) {
    e.preventDefault();
    setOpen1(false)
  }
  return (
      <>
        <h1 className='art-title'>Bernardino Campi Painting Sofonisba Anguissola</h1>
        <p>Sofonisba Anguissola (p. 1559)</p>
        <div className='anguissola'>
          <IconButton sx={{width: '80px',
                              height: '80px',
                              borderColor: '#000', 
                              borderWidth: '4px', 
                              position: 'absolute', 
                              left: '54%', 
                              top: '178%',
                              backgroundColor: 'red',
                              opacity: 0.5}}
                          onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/anguissola/an1.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Anguissola’s second left hand, symbolizing that she is the true artist of this painting, and that she is the superior artist.  </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload(e)}>Close</Button>
              </DialogActions>
            </Dialog>
            <IconButton sx={{width: '80px',
                              height: '80px',
                              borderColor: '#000', 
                              borderWidth: '4px', 
                              position: 'absolute', 
                              left: '55%', 
                              top: '130%',
                              backgroundColor: 'red',
                              opacity: 0.54}}
                          onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/anguissola/an2.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Campi is depicted holding a mahlstick, a tool used by artists to steady the hand. In Renaissance art, the mahlstick “connoted artistic timidity or preoccupation with detail” (Garrard 564). Anguissola may have depicted Campi with a mahlstick to further diminish his artistic importance in relation to her own. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='page'>Overview</h1>
            <p>Sofonisba Anguissola was a Renaissance painter who became one of the first female artists to gain international recognition. She is most well known for her portraiture, and Bernardino Campi Painting Sofonisba Anguissola is one of her most iconic works. This portrait depicts Anguissola being painted by her teacher, Bernardino Campi. Historical interpretations of this painting saw the inclusion of Campi as self-effacing. As art historian and pioneer of feminist art theory Mary Garrard explains, “it is he who calls our attention to this woman artist, he who commemorates her identity by painting an image of her” (560). This interpretation posits that the inclusion of Campi implies that a woman requires external validation from a man to be significant. Additionally, because Campi was Anguissola’s teacher, the pervasive viewpoint during the Renaissance would read Sofonisba as “Campi’s creation” - because she is a woman, her male teacher brought her to life. </p> 
	        <p>However, this interpretation overlooks subtle details which imply that Anguissola was portraying herself as a distinguished artist in her own right. Anguissola is depicted as larger and brighter than Campi, which implies that she surpassed her teacher’s abilities. Her portrayal competes with that of Campi, “not only from its larger size but its position in the design” which is higher and aligned with the central axis (Garrard 562). Perhaps the most important detail in the painting is that Anguissola has a second left hand which appears to merge with Campi’s hand. This subtle symbolism demonstrates that Campi is not the true artist of this portrait; it is Anguissola herself. In fact, she “distinctly one-ups Camp for while he paints only her, she paints both him and her.” Thus, Anguissola argues that she was not born out of her teacher’s skill, but that she is talented on her own accord.</p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>Garrard, Mary D. "Here's looking at me: Sofonisba Anguissola and the problem of the woman artist." Renaissance Quarterly 47.3 (1994): 556-622.</li>
            </ul>
        </div>
        <div class='space'> </div>
      </>
  )
}

export default TestArt2