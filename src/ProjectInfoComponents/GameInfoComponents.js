import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  containerMargins: {
    marginTop: "4rem",
    marginBottom: "4rem"
  }
}));

function CardImage({imagePath}) {
  return (
    <Card>
      <CardMedia component="img"
              image={imagePath}/>
    </Card>
  );
}

function GameInfoScreenshots(props) {
  const cardImages = props.children;
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.containerMargins}>
      <Grid container spacing={2}>
        { 
          Array.isArray(cardImages) ? 
            cardImages.map( (cardImage, index) => <Grid item key={index}>{cardImage}</Grid>) :
            <Grid item>{cardImages}</Grid>
        }
      </Grid>
    </Container>
  );
}

export {
  CardImage,
  GameInfoScreenshots
};