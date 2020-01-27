import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import scrollIntoView from 'scroll-into-view';

const linearEase = t => t;
const defaultAlign = { top: 0.5, left: 0.5 };
function scrollToDocumentId(id, alignObj = defaultAlign, easeFn = linearEase) {
  const d = document.getElementById(id);
  if(d === undefined) {
    console.error("Could not find document element with id: ", id);
    return;
  }

  scrollIntoView(d, {
    ease: easeFn,
    align: alignObj
  });
}

function isInViewportView(boundingBox) {
  const viewportWidth = (window.innerWidth || document.documentElement.clientWidth);
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (boundingBox.top >= 0 && 
    boundingBox.left >= 0 && 
    boundingBox.right <= viewportWidth && 
    boundingBox.bottom <= viewportHeight);
}

class HomeAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
  }

  componentDidMount() {
    // After output has been rendered to the dom
    window.addEventListener("scroll", () => {
      // concerned that these ids in the dom won't load  in the order I expect it to load
      const aboutMe = document.querySelector("#about_me");
      const projects = document.querySelector("#projects");
      if(aboutMe !== undefined && projects !== undefined) {
        const aboutMeBoundBox = aboutMe.getBoundingClientRect();
        let projectsBoundBox = projects.getBoundingClientRect();
        if(isInViewportView(aboutMeBoundBox)) {
          this.setState({tabIndex: 0});
        } else if(isInViewportView(projectsBoundBox)) {
          this.setState({tabIndex: 1});
        }
      }
    });
  }

  render() {
    const { tabIndex } = this.state;

    return (
      <AppBar position="sticky" color="primary">
        <Tabs 
          centered={true}
          value={tabIndex} 
          onChange={(event, newValue) => { this.setState({tabIndex: newValue}); }}>
          <Tab label="About Me" 
              disableRipple 
              onClick={() => { 
                scrollToDocumentId("about_me"); 
                this.setState({tabIndex: 0});
              }}/>
          <Tab label="Projects" 
              disableRipple 
              onClick={ () => { 
                scrollToDocumentId("projects",
                  {
                    top: 0.1,
                    left: 0.5
                  }
                ); 
                this.setState({tabIndex: 1});
              } }/>
        </Tabs>
      </AppBar>
    );
  }
}

export default HomeAppBar;