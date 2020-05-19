import { Component } from 'react';
import { Header,Style, Motion, ScrollToHide} from '../../components';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

/// /////////////////////////////////////////////
// config
/// /////////////////////////////////////////////

const NAVTABS = {
  hola: '/hola',
  blog: '/blog',
  life: '/life',
  projects: '/projects',
  contact: '/contact'
};

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////


const Cover = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImageCase = styled(Motion)`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Style.color.bg};
  z-index: -1;
  > img {
    height: 100%;
  }
  @media ${Style.media('M')} {
    height: ${document.body.clientHeight}px;
  }
`;

const Explorer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-family: ${Style.fontFamily.times};
  font-style: italic;
  ${Style.fontSize(-2)};
`;
const Line = styled.div`
  width: 1px;
  height: 5rem;
  background: #666;
  margin-top: 1rem;
  @media ${Style.media('M')} {
    height: 3rem;
  }
`;

const Content = styled.div`
  min-height: 100vh;
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class App extends Component {

  Video = () =>
    location.pathname === NAVTABS.hola ? (
      <ScrollToHide maxOffset={500}>
        <ImageCase mode="one" type="alpha" duration={1000}>
          <img style={{'opacity':0.3}} src="http://qaiuit270.bkt.clouddn.com/faces.jpg" alt=""/>
        </ImageCase>
      </ScrollToHide>
    ) : null;


  render() {
    if (location.pathname === '/') return this.props.children;
    return (
      <div>
        <Header tabs={NAVTABS} />
        <MediaQuery key="desktop" minWidth={Style.screen.M}>
          <this.Video />
        </MediaQuery>
        <section>
          <Content>{this.props.children}</Content>
        </section>
      </div>
    );
  }
}

export default App;
