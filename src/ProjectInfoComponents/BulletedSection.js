import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  typography: {
    borderBottom: "0.1rem solid", 
    marginBottom: "1rem"
  },
  bullets: {
    listStyleType: "square"
  }
}));

/*
* Used for How to Play and Credits Sections
* sectionTitle: String
* bulletList: array of strings
*/
export default function BulletedSection({sectionTitle, bulletList}) {
  const styles = useStyles();
  return (
    <Container>
      <Typography variant="h2" className={styles.typography}>{sectionTitle}</Typography>
      <ul className={styles.bullets}>
        {
          bulletList !== undefined ? 
          bulletList.map((listItem, index) => <li key={index}><Typography>{listItem}</Typography></li>) : 
            <li><Typography>BulletList is undefined</Typography></li>}
      </ul>
    </Container>
  );
}