import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
// include this to keep hovering behavior present
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

// equivalent to providing css to the js
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem", 
    marginBottom: "2rem"
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
    left: "45%"
  },
  captionOffset: {
    position: "relative", left: "5%"
  },
}));

function ShadowOverlay({date, projectName, imagePath}) {
  const classes = useStyles();
  return (
    <CardContent className={classes.overlay}>
      <div className={classes.captionContent}>
        <Grid container>
          <Typography className={classes.captionOffset}>
            {date}
          </Typography>
          <Avatar alt="Unity" 
                  src="content/MathNinja_Release/TemplateData/progressLogo.Dark.png" 
                  className={classes.captionLogo}/>
        </Grid>
        <Typography variant="h5" className={classes.captionOffset}>
          {projectName}
        </Typography>
      </div>
    </CardContent>
  );
}

function ClickableCard({
  imagePath,
  projectDate,
  projectName,
}) {
  const classes = useStyles();
  return (
    <Link to={`/${projectName}`}>
      <Card className={classes.size250px}>
        <CardMedia component="img"
                  image={imagePath}
                  className={classes.imagePreviewSize}/>
        <ShadowOverlay date={projectDate}
                      projectName={projectName}/>
      </Card>
    </Link>
  );
}

function ContentLayout() {
  const classes = useStyles();
  const [projectsList] = React.useState(require('../JsonData/projectsList.json'));

  return(
      <Grid container 
      justify="center" 
      className={classes.root} 
      spacing={2}>
        {
          projectsList.map((p, index) =>
            <Grid item key={index}>
              <ClickableCard projectName={p.name}
                             projectDate={p.projectDate}
                             imagePath={p.imagePath}/>
            </Grid>
          )
        }
      </Grid>
  );
}

export default ContentLayout;