import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

// equivalent to providing css to the js
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "relative",
    width: 250,
    height: 250
  },
  size250px: {
    position: "relative",
    width: 250,
    height: 250
  },
  control: {
    padding: theme.spacing(2)
  },
  imagePreviewSize: {
    width: "100%",
    height: "100%",
    // used to reposition image at a particular location starting from the top left corner
    //objectPosition: "2% 0px"
  },
  overlay: {
    position: "absolute", // ensures content sits on top of html element see: https://stackoverflow.com/questions/51294471/materialui-card-overlay
    top: "0%",
    fontSize: "2rem",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
  captionContent: {
    // should probably use theming to set global primary/secondary text colors
    color: "white",
    position: "relative", 
    top: "62%", 
    backgroundColor: "#3f51b5",
    borderRadius: "15px"
  },
  captionLogo: {
    width: "35px", 
    height: "35px", 
    objectFit: "cover", 
    position: "relative", 
    left: "20%"
  },
  captionOffset: {
    position: "relative", left: "5%"
  }
}));


const styles = {
  media: {
     height: 0,
     paddingTop: '56.25%' // 16:9
  },
  card: {
     position: 'relative',
     width: 250,
     height: 250
  },
  overlay: {
     position: "absolute",
     //background: "rgba(35, 4, 255, 0.21)"
     //top: '20px',
     //left: '20px',
     //color: 'black',
     //backgroundColor: 'white'
  }
}


function ShadowOverlay(props) {
  const classes = useStyles();
  return (
    <CardContent className={classes.overlay}>
      <div className={classes.captionContent}>
        <Typography className={classes.captionOffset}>
          Sept. 2017
        </Typography>
        <Grid container>
          <Typography variant="p" className={classes.captionOffset}>
            MathNinja
          </Typography>
          <Avatar alt="Unity" 
                  src="content/MathNinja_Release/TemplateData/progressLogo.Dark.png" 
                  className={classes.captionLogo}/>
        </Grid>
      </div>
    </CardContent>
  );
}

function ContentLayout() {
  const classes = useStyles();

  return(
    <Grid container justify="center" className={classes.root} spacing={2}>
      <Grid item>
        <Card style={styles.card}>
          <CardMedia image="images/MathNinjaPreview.PNG" style={styles.media} className="meeee"/>
          <div style={styles.overlay}>
              this text should overlay the image
          </div>
        </Card>
      </Grid>
      <Grid item>
        <Link href="https://google.com">
          <Card className={classes.size250px}>
            <CardMedia component="a"
                      href="https://google.com"  
                      image="images/MathNinjaPreview.PNG"
                      className={classes.imagePreviewSize}/>
            <ShadowOverlay/>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://google.com">
          <Card className={classes.size250px}>
            <CardMedia component="a"
                      href="https://google.com"  
                      image="images/MathNinjaPreview.PNG"
                      className={classes.imagePreviewSize}/>
            <ShadowOverlay/>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://google.com">
          <Card className={classes.size250px}>
            <CardMedia component="a"
                      href="https://google.com"  
                      image="images/MathNinjaPreview.PNG"
                      className={classes.imagePreviewSize}/>
            <ShadowOverlay/>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://google.com">
          <Card className={classes.size250px}>
            <CardMedia component="a"
                      href="https://google.com"  
                      image="images/MathNinjaPreview.PNG"
                      className={classes.imagePreviewSize}/>
            <ShadowOverlay/>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://google.com">
          <Card className={classes.size250px}>
            <CardMedia component="a"
                      href="https://google.com"  
                      image="images/MathNinjaPreview.PNG"
                      className={classes.imagePreviewSize}/>
            <ShadowOverlay/>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ContentLayout;