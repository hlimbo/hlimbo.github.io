import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyle = makeStyles(theme => ({
  container: {
    marginBottom: "3rem"
  }
}));

export default function MainImage({imagePath}) {
  const style = useStyle();
  return (
    <Container maxWidth="md" 
               justify="center" 
               className={style.container}>
    <Card>
      <CardMedia component="img"
                image={imagePath}
                />
    </Card>
  </Container>);
}