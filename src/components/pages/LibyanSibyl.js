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
        <h1 className='art-title'>Libyan Sibyl</h1>
        <p>Michelangelo (p. 1511)</p>
        <div className='ls'>
            <IconButton sx={{width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '21%',
                            top: '60%', 
                            color: 'red',
                            opacity: 0.25}}
                        onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/sibyl/ribs.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>It is evident that Michelangelo pays a great deal of attention to the accuracy of anatomy in both the sketch and the work. Here, we see a #3 etched next to the three ribs of the male subject in the sketch ("Deconstructing..." 1:40). Elsewhere, we see a similar level of attention, such as the circular annotations next to the deltoids. Similar to Titian’s mastery of the female nude, Michelangelo hopes to achieve mastery of drawing the male anatomy.</p>
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
                            left: '78%',
                            top: '112%', 
                            color: 'red',
                            opacity: 0.3}}
                        onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/sibyl/toe.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Of all the anatomical features Michelangelo chooses to focus on, it may be surprising that the toe is the most scrutinized in the sketch. Michelangelo sketches the big toe three times on the paper, with different levels of surrounding anatomy ("Deconstructing..." 1:10). When we see the finished product, however, it is clear that the big toe is the central focus of the Sibyl's masculinity. Almost all of her weight is held on the toe, and it is the mastery of such an uncommon anatomical part of the human body that distinguishes Michelangelo’s skill in perfecting the male figure. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
            <IconButton sx={{width: '60px',
                            height: '60px',
                            borderColor: '#000', 
                            borderWidth: '4px', 
                            position: 'absolute', 
                            left: '1%',
                            top: '100%', 
                            color: 'red',
                            opacity: 0.25}}
                        onClick={() => setOpen2(true)}/>
            <Dialog 
            open={open2} 
            onClose={() => setOpen2(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/sibyl/face.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Michelangelo’s use of a male model was not uncommon in his drawings of women. What is uncommon is for the final work to retain the masculine anatomy and pose of the male model. In this instance, the sketch shows the sole feminine aspects of the figure in her “graceful bend of the head, downcast eyes, [and] braided hair” (Even 29). This hint of femininity is really the only concrete indication that we are looking at a Sibyl and not an idealized male hero. It should be noted that the Libyan Sibyl is also not the only masculinized “hero” of the Renaissance: earlier sculptures of the biblical Judith also depicted a masculinized female hero (Even 30).</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload2(e)}>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='overview'>Overview</h1>
            <p>Michelangelo’s <i>Libyan Sibyl</i> is one of his many iconic works located on the Sistine Chapel ceiling. The Sibyls, which were prophetesses from the ancient world, were included in the ceiling as the Church considered them to set the stage for Christianity. The <i>Libyan Sibyl</i> was one of the last to be added onto the ceiling in 1511, and was preceded by a sketch that gives great insight into the creation of the Sibyl and the motivation behind Michelangelo’s masculine portrayal of the subject. Indeed, Michelangelo’s portrayal of the <i>Libyan Sibyl</i> is not the only time he paints women with masculine features. In <i>The Last Judgment</i>, St. Catherine is depicted in a powerful, masculine stance, and even in the Sistine Chapel, some of the other sibyls are equally masculine. Some attribute this to Michelangelo’s perceived homosexuality and his fascination with the male anatomy (Even 29). However, in a larger sense, it is the theme of idealization that appears in a different way; Michelangelo’s idealized human figure is male and masculine, so even in his drawings of women, he perpetuates the patriarchal outlook of the times in his depictions of masculine women.</p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>“Deconstructing Michelangelo’s Process from a Sistine Chapel Study | Art, Explained.” YouTube, uploaded by The Met, 20 Feb. 2013, www.youtube.com/watch?v=ICQCUTiC0mI&ab_channel=TheMet.</li>
              <li>Even, Yael. “The Heroine as Hero in Michelangelo's Art.” Woman's Art Journal, vol. 11, no. 1, 1990, p. 29., https://doi.org/10.2307/1358384. </li>
            </ul>
        </div>
        <div class='space'> </div>
      </>
    
  )
}

export default TestArt