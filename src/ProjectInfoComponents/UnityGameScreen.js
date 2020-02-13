import '../App.css';
import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import Container from '@material-ui/core/Container';

export default function UnityGameScreen({buildReleaseJsonPath, unityLoaderPath}) {
  const [unityContent] = React.useState(new UnityContent(
    buildReleaseJsonPath,
    unityLoaderPath
  ));
  
  return (
    <Container maxWidth="md">
      <Unity unityContent={unityContent} className="game-container"/>
    </Container>
  );
}