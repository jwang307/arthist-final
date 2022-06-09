import React from 'react';
import '../../App.css';
import CardList from '../CardList';
import CardList2 from '../CardList2';


function Home() {
  return (
      <>
        <div className='intro'>
            <h1 className='page'>Welcome!</h1>
            <p><i>Mona Lisa. Birth of Venus. Assumption of the Virgin.</i> Many of the Italian Renaissance’s most iconic paintings depict women front and center, and these subjects come from many different backgrounds. During this time, the portrait of a merchant’s wife could be as well-regarded as scenes from mythology, classics, and religion. However, we know that the Italian Renaissance was still a very restricted period for female polymaths and painters. Despite the relevance of the female figure in Renaissance art, there is often little that is said concerning the overarching context behind the portrayal of women in artworks. Even less said about the struggles female artists faced at the time, and how it may have affected their portrayal of women in their artworks. Through case studies in several important paintings and female artists in the Renaissance, one finds that thesis.</p>

            <p>The portrayal of women in Renaissance paintings as a means to elevate the status of the one behind the canvas can be seen in several iconic Renaissance works. On this website, we analyze the portrayal of the ideal woman in three paintings, each depicting an idealized figure with different background context. The first painting, <i>Lady with an Ermine</i>, depicts a mistress of the Sforza family and uses the idealized figure to elevate the status of the house. The second painting, <i>Sacred and Profane Love</i>, portrays the ideal woman as a way to show Titian’s skill in painting, and in particular the nude figure. The final painting, the <i>Libyan Sibyl</i> on the ceiling of the Sistine Chapel, displays a unique type of idealized figure and presents a potential counterpoint to the notion that all idealized portraits came about from an ulterior motive to benefit the painter or the commissioner. In all, these three paintings cover the wide range of contexts behind some of the most influential works of the time.</p>

            <p>The second portion of the website will explore three awe-inspiring works from female artists during the Italian Renaissance. These works are impressive in their own right; however, when they are interpreted in the context of the significant barriers women had to face in order to become artists during the Renaissance, they are even more iconic. In her essay, “Why Have There Been No Great Women Artists?” Linda Nochlin  writes that the “white Western male viewpoint” has been “unconsciously accepted as the viewpoint of the art historian” because it was institutionally almost impossible for women to receive the resources, training, and respect to become an artist. Regardless, female artists including Artemisia Gentileschi, Sofonisba Anguissola and Laviana Fontana were able to become some of the most accomplished artists during their time. This section will detail important facts about their lives, their journey as female artists and analyze the depictions of women present in the artworks <i>Judith Slaying Holofernes</i> by Gentileschi, <i>Bernardino Campi Painting Sofonisba Anguissola</i>, and <i>Self Portrait Making Music</i> by Lahaina Fontana. In these three paintings, the artist strayed away from the traditional idealized portrayal of women during the Renaissance, instead using their medium to convey the strength of women and elevate their status. </p>

            <p>This website aims to explore these themes and motifs through an immersive medium. Each card links to a corresponding painting page, where a scaled version of the artwork is displayed along with a brief overview and analysis of the work as a whole. On each painting, several circles are placed at points on the work - clicking on this circle will prompt a pop-up containing a closer view of that section of the painting with a corresponding analysis of the section. Our goal is that this interactive display will lead to easier forms of exploration within the artwork and more intuitive reasoning. We hope you enjoy playing around with the website!
            </p>
        </div>
        <CardList />
        <CardList2 />
      </>
  )
}

export default Home