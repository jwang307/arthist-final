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
        <h1 className='art-title'>Sacred and Profane Love</h1>
        <p>Titian (p. 1514)</p>
        <div className='sapl'>
          <IconButton sx={{width: '60px',
                              height: '60px',
                              borderColor: '#000', 
                              borderWidth: '4px', 
                              position: 'absolute', 
                              left: '24%', 
                              top: '42%',
                              backgroundColor: 'red',
                              opacity: 0.2}}
                          onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/love/sacred.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>There were many theories on the identity of the two women in the painting; some drew from mythology, some drew from classical stories, and some drew from the historical context of the commission. However, the idealization of both figures and especially the woman on the right suggests that she could not be Baggaroti, as the subject in the painting is not dressed and depicted as a widow. This is seen in her flowing hair, as opposed to the typical pulled-up hair of a widow. </p>
                  <p>The idea of twin Venuses was not new in the time of Titian. The figure on the right is most similar to the idealized Venus seen in other famous paintings such as The Birth of Venus, and is often symbolized as the profane and carnal goddess. The one of the left, representing the heavenly and sacred Venus, mirrors writings by Boccaccio that describe this Venus as one adorned with flowers and myrtle. </p>
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
                              left: '40%', 
                              top: '66%',
                              backgroundColor: 'red',
                              opacity: 0.5}}
                          onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/love/foreground.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Continuing the parallel motif of eroticism and the idealized Renaissance woman, we see several erotic symbols in the foreground and around the left Venus. The first are the gloves worn by this Venus. Referenced by Petrarch and Castiglione, gloves prompted a sexual desire to see a sort of veiled beauty, and Castiglione compares taking off the glove to taking off the belt on the night of marriage. Another symbol is the spigot in the center of the fountain, which was a common analog to ejaculation in the Renaissance. To see such ripe symbols of eroticism and desire in conjunction with the nude Venus on the right further confirms the nature of the ideal Renaissance woman as innately sexual and deeply tied to the concept of procreation. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='page'>Overview</h1>
            <p>Sacred and Profane Love is an early work of one of the most talented painters of the Renaissance. Completed around 1514, the oil painting by Titian was commissioned by Niccolo Aurelio, whose coat of arms is displayed on the fountain. While the purpose of the painting is a celebration of marriage, the figures displayed in the work are usually not thought to be the bride. The nude woman on the right is undoubtedly Venus, but the identity of the dressed woman on the right is debated. Some believe it to be the bride, Laura Bagarotto, but the general consensus today is that the figure is also a portrayal of Venus. Though the painting is ripe with symbolism of marriage in the Renaissance, our annotations will focus on the ways Titian shows his skill in drawing the idealized Renaissance woman in the twin Venuses of the painting.</p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>Castiglione, Baldesar [Baldassare]. The Book of the Courtier: The Singleton Translation [Il libro del Cortigiano]. Edited by Daniel Javitch. New York and London: Norton, 2002.</li>
              <li>“Art and Love in Renaissance Italy - Marriage in the Renaissance.” YouTube, uploaded by The Met, 4 Dec. 2008, www.youtube.com/watch?v=OZFa17kxwWg&ab_channel=TheMet.</li>
              <li>Zhao, Eva. “Women in Italian Renaissance Art: Representation, Societal Ideals, and Identity.” The General: Brock University Undergraduate Journal of History, vol. 2, 2017, https://doi.org/10.26522/gbuujh.v2i0.1489.</li>
            </ul>
        </div>
        <div class='space'> </div>
      </>
    
  )
}

export default TestArt2