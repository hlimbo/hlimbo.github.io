import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: "50px", 
    marginTop: "50px"
  },
  card: {
    width: "60px", 
    height: "60px"},
  cardMediaStyle: { 
    width: "50px", 
    height: "50px", 
    position: "relative", 
    left: "10%", 
    top: "10%"}
}));

export default function ProgrammingLanguagesPanel() {
  const styles = useStyles();
  return (
    <Container maxWidth="md">
    <Paper elevation={0} className={styles.paper}>
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/cSharplogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/JavaScript-logo.png" 
                      className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/javaLogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/pythonLogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/rubyLogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/kotlinLogo.jpg" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/cLogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
        <Grid item>
          <Card className={styles.card}>
            <CardMedia component="img" 
                       image="images/cPlusPlusLogo.png" 
                       className={styles.cardMediaStyle}/>
          </Card>
        </Grid>
      </Grid>  
    </Paper>
  </Container>
  );
}