import '../App.css';
import React, {useEffect} from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width="100%" mr={1}>
        <LinearProgress color='primary' variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography style= {{ color: 'black', fontSize: 22, }}variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function UnityGameScreen({buildReleaseJsonPath, unityLoaderPath}) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [canRemoveLoadingBar, setCanRemoveLoadingBar] = React.useState(false);
  
  const unityContent = new UnityContent(
    buildReleaseJsonPath,
    unityLoaderPath
  );

  unityContent.on('progress', progression => {
    setLoadingProgress(progression);
  });

  unityContent.on('loaded', () => {
    setLoadingComplete(true);
  });

  useEffect(() => {
     if(isLoadingComplete) {
       window.setTimeout(() => setCanRemoveLoadingBar(true), 3000);
     }
  }, [isLoadingComplete]);


  return (
    <Container maxWidth="md">
      {!canRemoveLoadingBar &&
        <div>
          <Typography style={{fontSize: 22 }}>Game Loading...</Typography>
          <LinearProgressWithLabel value={loadingProgress * 100.0}/>
        </div>}
      <Unity unityContent={unityContent} className="game-container"/>
    </Container>
  );
}