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
        <h1 className='art-title'>Judith Slaying Holofernes</h1>
        <p>Artemisia Gentileschi (p. 1612)</p>
        <div className='judith'>
          <IconButton sx={{width: '80px',
                              height: '80px',
                              borderColor: '#000', 
                              borderWidth: '4px', 
                              position: 'absolute', 
                              left: '50%', 
                              top: '30%',
                              backgroundColor: 'red',
                              opacity: 0.45}}
                          onClick={() => setOpen(true)}/>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/judith/an2.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Whereas in most renderings of this scene, Abra does not participate in the assassination, Gentileschi depicts Abra as an equal participant. She actively pins down the general as Judith beheads him. This rendering emphasizes the power of female unity - two strong, determined female figures work together to save their town. </p>
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
                              left: '43%', 
                              top: '82%',
                              backgroundColor: 'red',
                              opacity: 0.54}}
                          onClick={() => setOpen1(true)}/>
            <Dialog 
            open={open1} 
            onClose={() => setOpen1(false)} 
            aria-describedby='dialog-desc' 
            >
              <DialogContent>
                <img src='images/judith/an1.png' alt = 'filler'/>
                <DialogContentText id='dialog-desc'>
                  <p>Here, one can clearly see the gruesome depiction of blood spurting from Holofernes’ neck. Blood sprays in upward arcs and drips down the bedsheets below the general, who stares blankly toward the audience. Gentileschi does not shy away from violence; this vivid imagery emphasizes Judith’s strength as she brutally murders the general. </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(e) => preventReload1(e)}>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
        <div className='intro'>
            <h1 className='page'>Overview</h1>
            <p>Artemisia Gentileschi 	was an Italian artist during the Italian Baroque period. She was taught by her father, Orazio Gentileschi, a well-known artist at the time. From a young age, it was evident that she would become an “artistic powerhouse of her time” (Seaman 19). In 1611, Agostino Tassi, Orazio’s longtime friend and Artemisia’s tutor, raped Artemisia when alone with her. Orazio brought Tassi to trial which resulted in the public humiliation and torture of Artemisia and a five-year exile from society for Tassi (Seaman 20). Many scholars say that her artworks are in-part autobiographical as they respond to tragedies experienced in her own life.</p>
            <p>In this painting, Gentileschi depicts the story of Judith, a young widow living in the Jewish town of Bethulia. As the story is told in the Book of Judith, King Nebuchadnezzar had sent his general, Holofernes, and a huge army to starve and besiege her city. Judith took it upon herself to save her town by deceiving the general that she had inside information on the Israelites, seducing him, and getting him extremely drunk. Then, with the help of her servant Abra, she beheads Holofernes (Seaman 17).</p>
            <p>Judith Slaying Holofernes represents the naturalism, realism and drama that Gentileschi is known for. In the painting, Judith and Abra hold down Holofernes’ head while Judith forcefully pushes a sword through his neck. Compared to other depictions of this scene, this particular painting has a striking portrayal of the blood violently spraying from the general’s neck. The depiction of Judith in this painting departs from the conventional portrayal of women during the time period. Rather than a conventionally beautiful woman, Judith’s “slitted eyes, frowning face, and furrowed brow distort any potential for beauty” (Seaman 113). Gentileschi instead focuses on portraying Judith’s power and determination in completing her task. This illustrates Gentileschi’s departure from the idealized portrayal of women during the Renaissance, instead portraying women as strong, capable individuals. Judith shows no hesitation or fear and is instead actively engaged in the act of beheading. </p>
            <p>Many scholars believe that Gentileschi was portraying her own traumatic experience of rape through her rendering of Judith. Judith Mann, a senior curator of European art, wrote in 1997 that in the eyes of many writers, “the emphasis on spurting blood and the details of decapitation make the Judith and Holofernes … the vicarious realization of her revenge toward Agostino Tassi” (162). According to many scholars, the gruesome imagery is representative of Gentileschi’s rage toward Tassi and her seeking revenge. However, Mann argues that interpreting her art as merely an extension of her experiences has “minimized her intellectual endeavor” and comes “dangerously close to past restrictive readings of women’s art as a reflection of inferior intellectual capabilities” (179). Regardless of the interpretation, it is clear that Gentileschi is portraying the strength of women through her gruesome yet powerful depiction of this biblical scene. </p>
        </div>
        <div className='intro'>
            <h1 className='overview'>Citations</h1>
            <ul>
              <li>Mann, Judith W. "Caravaggio and Artemisia: testing the limits of Caravaggism." Studies in Iconography 18 (1997): 161-185.</li>
              <li>Seaman, Leah M. The depiction of female emotion as seen through the work of Italian Renaissance artists Artemisia Gentileschi and Michelangelo Caravaggios Judith Beheading Holofernes and Artemisia Gentileschi and Cavaliere dArpinos Susanna and the Elders. Diss. Marietta College, 2021. </li>
            </ul>
        </div>
        <div class='space'> </div>
      </>
  )
}

export default TestArt2