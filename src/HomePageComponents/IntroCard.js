import React from 'react';
import 'animate.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  containerMargins: {
    marginTop: "2rem",
    marginBottom: "2rem"
  }
}));

const names = [ 'a Software Engineer', 'a UCI Graduate', 'Harvey Limbo'];

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

export default function IntroCard() {
  const styles = useStyles();
  const [nameTagIndex, setNameTagIndex] = React.useState(0);

  // only gets called after all dom mutations happen
  React.useLayoutEffect(() => {
    animateCSS('.nameTag', 'slideInDown', () => {
      if(nameTagIndex < names.length - 1) {
        setTimeout(() => setNameTagIndex(nameTagIndex + 1), 1000);
      }
    });
  });

  return (
    <Container maxWidth="md" 
               align='center' 
               id="about_me" 
               className={styles.containerMargins}>
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant="h2">Hi I'm...</Typography>
        </Grid>
        <Grid item>
          <Typography align="center" 
                      variant="h2"
                      color="primary" 
                      className="nameTag">
                        {names[nameTagIndex]}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}