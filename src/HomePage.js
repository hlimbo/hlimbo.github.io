import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import HomeAppBar from './HomePageComponents/HomeAppBar';
import IntroCard from './HomePageComponents/IntroCard';
import ProgrammingLanguagesPanel from './HomePageComponents/ProgrammingLanguagesPanel';
import WebsiteBuiltWithSection from './HomePageComponents/WebsiteBuiltWithSection';
import ContentLayout from './HomePageComponents/ContentLayout';
import LabelBottomNavigation from './LabelBottomNav';

const useStyles = makeStyles(theme => ({
  typography: {
    borderBottom: "0.1rem solid", 
    marginBottom: "1rem"
  },
  bullets: {
    listStyleType: "square"
  }
}));

export default function HomePage(props) {
  const styles = useStyles();
  return (
    <div>
      <HomeAppBar/>
      <IntroCard/>
      <Container maxWidth="md">
          <Typography>
            I got my first exposure to programming at my high school's AP Comp Sci Course and since then I have gained a deep interest in building software to entertain and help people. I graduated from University of California, Irvine with a Bachelor's Degree in Computer Science in 2017. I'm known to be a jack of all trades due to my breadth of knowledge of various programming languages such as:
          </Typography>
          <ProgrammingLanguagesPanel/>
          <Typography>
            I'm open to learning different technologies to solve various problems with a focus on:
          </Typography>
          <ul className={styles.bullets}>
            <li>
              <Typography>
                Backend Development
              </Typography>
            </li>
            <li>
              <Typography>
                Game Development
              </Typography>
            </li>
          </ul>
      </Container>
      <Container maxWidth="md">
        <Typography variant="h2" id="projects" className={styles.typography}>Projects</Typography>
        <ContentLayout/>
      </Container>
      <WebsiteBuiltWithSection/>
      <LabelBottomNavigation/>
    </div>
  );
}