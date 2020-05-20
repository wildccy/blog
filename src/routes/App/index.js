import { Component } from 'react';
import { Header,Style, Motion, ScrollToHide} from '../../components';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

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
  opacity: 0.3;
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
    width: 100%;
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
  top: 88vh;
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
// config
/// /////////////////////////////////////////////

const NAVTABS = {
  hola: '/hola',
  life: '/life',
  toy: '/toy',
  contact: '/contact'
};

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class App extends Component {

  componentDidMount() {
    setTimeout(()=>{
      document.getElementById('music').play()
    })
  }

  Banner = () =>
    location.pathname === NAVTABS.hola ? (
      <ScrollToHide maxOffset={1000}>
        <ImageCase mode="one" type="alpha" duration={1000}>
          <Cover style={{ backgroundImage: 'url(http://qaiuit270.bkt.clouddn.com/faces.jpg)' }} />
        </ImageCase>
        <Explorer key="more">
          <div>Scroll to learn more</div>
          <Line />
        </Explorer>
      </ScrollToHide>
    ) : null;

  render() {
    if (location.pathname === '/') return this.props.children;

    return (
      <div>
        <Header tabs={NAVTABS} />
        <this.Banner />
        <audio id="music" src="
        http://qaiuit270.bkt.clouddn.com/Lindsey%20Stirling%20-%20Senbonzakura.mp3123
        " loop />
        <section>
          <Content>{this.props.children}</Content>
        </section>
      </div>
    );
  }
}

export default App;
