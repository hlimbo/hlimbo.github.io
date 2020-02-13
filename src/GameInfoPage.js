import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GameInfoAppBar from './ProjectInfoComponents/GameInfoAppBar';
import MainImage from './ProjectInfoComponents/MainImage';
import { CardImage, GameInfoScreenshots } from './ProjectInfoComponents/GameInfoComponents';
import UnityGameScreen from './ProjectInfoComponents/UnityGameScreen';
import LabelBottomNav from './LabelBottomNav';
import BulletedSection from './ProjectInfoComponents/BulletedSection';

const useStyles = makeStyles(theme => ({
  typography: {
    borderBottom: "0.1rem solid", 
    marginBottom: "1rem"
  },
  margins: {
    marginTop: "2rem",
    marginBottom: "2rem"
  }
}));

/*
 * projectInfoData: json file containing information about current project
 */
export default function GameInfoPage({projectInfoData}) {
  const styles = useStyles();

  let data;
  if(projectInfoData === undefined || projectInfoData === null || projectInfoData === {}) {
    data = {
      projectName: "Undefined Project",
      githubLink: "https://google.com",
      aboutGame: "Lorem Ipsum Text",
      gameScreenshots: {
        mainImagePath: null,
        images: []
      }
    }
  } else {
    data = projectInfoData;
  }

  // OPTIONAL SECTIONS ***************************************************************
  const howToPlaySection =
    data.optional !== undefined && 
    data.optional.howToPlay !== undefined &&
    <div className={styles.margins}>
      <BulletedSection sectionTitle="How To Play"
                       bulletList={data.optional.howToPlay}/>
    </div>;

  const gameScreen = 
    data.optional !== undefined &&
    data.optional.webGLPaths !== undefined &&
    <div className={styles.margins}>
      <UnityGameScreen 
        buildReleaseJsonPath={data.optional.webGLPaths.buildReleaseJsonPath}
        unityLoaderPath={data.optional.webGLPaths.unityLoaderPath}/>
    </div>;

  const creditsSection =
    data.optional !== undefined &&
    data.optional.credits !== undefined &&
    data.optional.credits.length > 0 &&
    <div style={{marginBottom: "8rem"}}>
      <BulletedSection 
        sectionTitle="Credits"
        bulletList={data.optional.credits}/>
    </div>;    
  // *******************************************************************************

  return (
    <div>
      <GameInfoAppBar projectTitle={data.projectName}
                      githubLink={data.githubLink}/>
      <MainImage imagePath={data.gameScreenshots.mainImagePath}/>
      {gameScreen}
      {howToPlaySection}
      <Container className={styles.margins}>
        <Typography variant="h2" className={styles.typography}>
          About Game
        </Typography>
        {
          data.aboutGame.map((p, index) => <div key={index}><Typography>{p}</Typography><br/></div>)
        }
      </Container>
      <Container className={styles.margins}>
        <Typography variant="h2" className={styles.typography}>Screenshots</Typography>
        <GameInfoScreenshots>
          {
            data.gameScreenshots.images.map((path, index) =>
              <CardImage key={index} imagePath={path} />
            )
          }
        </GameInfoScreenshots>
      </Container>
      {creditsSection}
      <LabelBottomNav/>
    </div>
  );
}