import React, { useState } from 'react'
import '../../App.css'
import './Paintings.css'
import {IconButton, Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material'
import { Button } from '../Button'



function TestArt() {
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

  const [open2, setOpen2] = useState(false)
  function preventReload2(e) {
      e.preventDefault();
      setOpen2(false)
  }

  return (
      <>
        <h1 className='art-title'>Lady with an Ermine</h1>
        <p>Leonardo Da Vinci (p. 1490)</p>
        <div className='ermine'>
            <IconButton sx={{color: 'blue',
                            width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '45%', 
                            top: '66%',
                            opacity: 0.3}}
                        onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/ermine/neck.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>The pose of the portrait in Lady with an Ermine is distinctively similar to the pose of Mary in Madonna with the Long Neck, painted about 45 years after during the height of Mannerism by Parmigianino. Even though the painting preceded Mannerism - where anatomy was exaggerated to idealize the human figure, it is evident that the posture of the woman in Lady with an Ermine was meant to highlight an ideal pose of the neck and head. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
            <div>
            <IconButton sx={{width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '55%', 
                            top: '30%',
                            color: 'red',
                            opacity: 0.35}}
                        onClick={() => setOpen2(true)}/>
            <Dialog 
            open={open2} 
            onClose={() => setOpen2(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/ermine/eyes.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Da Vinci utilized several techniques to enhance the beauty of the subject in this portrait. One of the most distinctive techniques Da Vinci uses are the dots of white in the pupil of the subject, which are meant to simulate reflected light and create a sense of sparkling in the eyes. Another more common technique that Da Vinci pioneered was sfumato in the oil medium, which resulted in the smooth gradients of skin tone across the face and upper chest (Masters 17).</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload2(e)}>Close</Button>
              </DialogActions>
            </Dialog>
            </div>
            <div>
            <IconButton sx={{width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '45%', 
                            top: '108%',
                            color: 'red',
                            opacity: 0.45}}
                        onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/ermine/hand.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Perhaps the most anatomically defining characteristic of the woman in the painting is the enlarged hand. Da Vinci is known to have done this in many paintings, most notably the Madonna of the Rocks. While this is far from an idealization of the body part, it does draw attention to the way she caresses the ermine in the painting - almost with an erotic quality. This type of sensual pose unsurprisingly shows itself in many other paintings in the time and is a common motif in displaying not only the ideal beauty of the Renaissance women, but her ideal qualities as well. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload(e)}>Close</Button>
              </DialogActions>
            </Dialog>
            </div>
        </div>
        <div className='intro'>
            <h1 className='overview'>Overview</h1>
            <p><i>Lady with an Ermine</i> is one of the only surviving portrait paintings by the great polymath Leonardo Da Vinci. Painted in 1490, the work depicts Cecilia Gallerani, a mistress to Ludovico Sforza, whom Da Vinci was the court painter for at the time. Over time, the painting has become iconic for the ways Da Vinci incorporates symbols of the house and the subject within the painting - the most obvious of which is the house symbol that Gallerani caresses. In this page, we will explore the techniques that Da Vinci used to idealize the beauty of the subject as well as several motifs of this idealization, such as hints of eroticism and the positioning of the subject. </p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>“Leonardo Da Vinci’s ‘The Lady with an Ermine,’ a Beguiling Portrait of Elegant Mystique.” YouTube, uploaded by Sotheby’s, 10 Sept. 2019, www.youtube.com/watch?v=NzT0fgrLL_c&ab_channel=Sotheby%27s.</li>
              <li>Masters, Rachel D. "The Portraiture of Women During the Italian Renaissance." (2013).</li>  
            </ul>
        </div>
        <div class='space'> </div>
      </>
    
  )
}

export default TestArt