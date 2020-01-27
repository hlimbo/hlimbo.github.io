import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  infoAppBar: {
    marginBottom: "2rem"
  }
}));

export default function GameInfoAppBar({projectTitle, githubLink}) {
  const style = useStyles();
  return (
    <AppBar position="sticky" 
            color="primary" 
            className={style.infoAppBar}>
      <Typography variant="h2" align="center">
        {projectTitle}
      </Typography>
      <Tabs centered value={false}>
        <Tab label="Github Source" 
            icon={<GitHubIcon/>}
            component="a"
            rel="noopener noreferrer" 
            target="_blank"
            href={githubLink}/>
      </Tabs>
    </AppBar>);
}