import '../App.css';
import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import Container from '@material-ui/core/Container';

// function GameScreen() {    
//   return (
//     <Paper>
//       <Container>
//         <h2>MathNinja</h2>
//         <Unity unityContent={this.unityContent} className="game-container"/>
//       </Container>
//       <section>
//         <h1>How to Play</h1>
//         <p>Use arrow keys to move. Spacebar to Jump.</p>
//       </section>
//       <section class="asset_credits">
//         <h1>Asset Credits:</h1>
//         <p><strong>Note: </strong> All art assets used in the game are placeholders. </p>
//         <p>
//           <ul>
//             <li>Ninja (Spelunky) <a href="https://www.spriters-resource.com/fullview/56425/">https://www.spriters-resource.com/fullview/56425/</a></li>
//             <li>Tiles and background images by Franco Giachetti (<a href="http://www.ludicarts.com/free-game-platform-tileset/">http://www.ludicarts.com/free-game-platform-tileset/</a>) which is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></li>
//           </ul>
//         </p>
//       </section>
//     </Paper>
//   );
// }

// function UnityGameScreen({buildReleaseJsonPath, unityLoaderPath}) {
//   const [unityContent, _] = React.useState(new UnityContent(
//     'content/MathNinja_Release/Build/MathNinja_Release.json',
//     'content/MathNinja_Release/Build/UnityLoader.js'
//   ));
  
//   return (
//     <Container maxWidth="md">
//       <Unity unityContent={unityContent} className="game-container"/>
//     </Container>
//   );
// }

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