import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GameInfoAppBar from './ProjectInfoComponents/GameInfoAppBar';
import MainImage from './ProjectInfoComponents/MainImage';
import { CardImage, GameInfoScreenshots } from './ProjectInfoComponents/GameInfoComponents';
import LabelBottomNav from './LabelBottomNav';

const useStyles = makeStyles(theme => ({
  typography: {
    borderBottom: "0.1rem solid", 
    marginBottom: "1rem"
  }
}));


// TODO: find out a way to dynamically load string data depending on what link was clicked on...
export default function GameInfoPage({aboutGameSummary}) {
  const styles = useStyles();
  return (
    <div>
      <GameInfoAppBar projectTitle="MathNinja"
                      githubLink="https://github.com/hlimbo/MathNinja"/>
      <MainImage imagePath="images/MathNinjaPreview.PNG"/>
      <Container>
        <Typography variant="h2" className={styles.typography}>
          About Game
        </Typography>
        <Typography>
          MathNinja is an educational game catered towards elementary schoolers who have trouble memorizing their multiplication tables. I was inspired to create this game from my little brother who had trouble memorizing his multiplication tables. If you are tired of flipping through boring old flash cards in hopes of memorizing your multiplication tables, then this game is for you! 
        </Typography>
      </Container>
      <Container>
        <Typography variant="h2" className={styles.typography}>Screenshots</Typography>
        <GameInfoScreenshots>
          <CardImage imagePath="images/MathNinjaPreview.PNG"/>
          <CardImage imagePath="images/MathNinjaPreview.PNG"/>
        </GameInfoScreenshots>
      </Container>
      <LabelBottomNav/>
    </div>
  );
}