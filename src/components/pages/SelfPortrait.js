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
        <h1 className='art-title'>Self Portrait Making Music</h1>
        <p>Laviana Fontana (p. 1561)</p>
        <div className='sp'>
          <IconButton sx={{width: '80px',
                              height: '80px',
                              borderColor: '#000', 
                              borderWidth: '4px', 
                              position: 'absolute', 
                              left: '55%', 
                              top: '62%',
                              backgroundColor: 'red',
                              opacity: 0.55}}
                          onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/selfportrait/an1.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>An empty easle is visible in the background of Fontana’s Self Portrait Making Music. Although it is depicted in the background, it is a key element of this self-portrait. Critically, the keyboard is placed next to a cassone, a large wooden chest containing her wedding trosseau. (Drisdelle 56). By placing the easel parallel to the cassone, Fontana implies that “her painterly talents and their results were part of her dowry,” indicating that “her art was considered as having value” (Drisdelle 56). </p>
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
                              left: '22%', 
                              top: '36%',
                              backgroundColor: 'red',
                              opacity: 0.6}}
                          onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/selfportrait/an2.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>For those who are curious, the inscription in the upper-left hand corner of the painting reads, “Lavinia virgo Prosperi Fontanae/Filia ex speculo imaginem/oris sui expresi anno 1557” which translates to “Lavinia maiden daughter of Prospero Fontana has represented the likeness of her face from the mirror in the year 1577” (Mclver 4).</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='page'>Overview</h1>
            <p>Lavinia Fontana is considered by many to be the first professional female artist. In 1577, she married Gian Paolo Zappi and it is agreed that her Self Portrait Making Music served as a gift to her husband’s father Severo. This self-portrait demonstrates how female artists could use self-portraits as a means to elevate their character and status. Traditional Renaissance images of women were painted by men for the male gaze - thus, most paintings emphasized the ideals of beauty and elegance. However, Fontana presents herself as more than a conventional beauty - here she depicts herself as “a distinct individual, a woman with character” (Mclver 4). She is elegantly dressed and demonstrates her proficiency in music. Specifically, this self-portrait can be read as a claim to nobility as Fontana follows the outline of a Renaissance gentildonna from Baldassare Castiglione’s Book of the Courtier. The Book of the Courtier defines a gentildonna as a woman who “wrote poetry, sang, played musical instruments, and participated in the atricals” (Mclver 4). Fontana depicts herself making music with an empty easel in the background - these activities are chosen in accordance with the Book of the Courtier. This focus on intellectual achievement in addition to idealized beauty standards serves as a “subtle form of self-promotion” (Mclver 4). Furthermore, the attention in this painting is presently on music instead of painting. Thus, Fontana is implicitly arguing that he is “mentally and financially able to stop painting in order to partake in another … activity” (Drisdelle 60). Overall, this painting serves as a method of raising her own status.</p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>Drisdelle, Julie Lynne. "Female Self-portraiture and the Construction of the Self." (2006). McIver, Katherine A. "Lavinia Fontana's" Self-Portrait Making Music"." Woman's Art Journal 19.1 (1998): 3-8.</li>
            </ul>
        </div>
        <div class='space'> </div>
      </>
  )
}

export default TestArt2