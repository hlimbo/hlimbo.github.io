import React from 'react';
import BottomNavigaton from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltIcon from '@material-ui/icons/ListAlt';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyle = makeStyles(theme => ({
  labelBottomNav: {
    width: '100%', 
    position: 'fixed', 
    bottom: 0, 
    minHeight: "40px", 
    maxHeight:"50px", 
    boxShadow: "0px 0 10px rgba(0, 0, 0, 0.5)"
  }
}));

export default function LabelBottomNavigation() {
  const style = useStyle();
  const [value, setValue] = React.useState('resume');

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  // Todo: make sure these links open a new tab
  return (
    <BottomNavigaton value={value} onChange={handleChange} className={style.labelBottomNav}>
      <BottomNavigationAction target="_blank" rel="noopener noreferrer" component="a" href="content/HarveyLimboResume.pdf" showLabel label="Resume" value="resume" icon={<ListAltIcon />} />
      <BottomNavigationAction target="_blank" rel="noopener noreferrer" component="a" href="https://www.linkedin.com/in/harvey-limbo-a10809151/" showLabel label="LinkedIn" value="linkedin" icon={<LinkedInIcon />} />
      <BottomNavigationAction showLabel label="Limboh27@gmail.com" value="email" icon={<EmailIcon />} />
      <BottomNavigationAction target="_blank" rel="noopener noreferrer" component="a" href="https://github.com/hlimbo" showLabel label="Github" value="github" icon={<GitHubIcon />} />
    </BottomNavigaton>
  );
}