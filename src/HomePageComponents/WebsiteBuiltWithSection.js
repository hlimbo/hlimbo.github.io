import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  containerStyle: {
    marginTop: "10px", 
    marginBottom: "100px"
  },
  card125px: {
    width: "125px"
  },
  cardMediaStyle: {
    position:"relative", 
    right: "2%", 
    top: "5%"
  },
  margins: {
    marginBottom: "2rem"
  }
}));

export default function WebsiteBuiltWithSection() {
  const style = useStyles();
  return (
    <Container maxWidth="md" className={style.containerStyle}>
      <Typography variant="h6" className={style.margins}>
        Website built using...
      </Typography>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Card className={style.card125px}>
              <CardMedia component="img" 
                         image="images/homepage/React-logo-1.png" 
                         className={style.cardMediaStyle}/>
            </Card>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://material-ui.com/" target="_blank" rel="noopener noreferrer"> 
            <Card className={style.card125px}>
              <CardMedia component="img" 
                         image="images/homepage/materialUILogo.png"/>
            </Card>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
            <Card className={style.card125px}>
              <CardMedia component="img" 
                         image="images/homepage/github_pages_logo.jpg"/>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}