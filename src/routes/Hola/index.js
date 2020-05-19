import { Component } from 'react';
import {
  Style,
  View,
  Motion,
  TitleDecoration,
} from '../../components/index';
import styled, { css } from 'styled-components';
import Welcome from './components/Welcome';
import Design from "./components/Design";

import setTitle from '../../utils/setTitle';


/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const HolaView = styled(View)`
  background: #fff;
  border-top: solid 0.5px rgba(0, 0, 0, 0.08);
  padding: 10rem 1rem;
  overflow: hidden;
  min-height: 50vh;
  @media ${Style.media('M')} {
    padding: 8rem 1rem;
  }
  @media ${Style.media('S')} {
    padding: 6rem 1rem;
  }
`;

const Inner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Decoration = styled(TitleDecoration)`
  margin-left: -2rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-weight: 600;
  color: transparent;
  -webkit-text-stroke: 1px #222;
  margin-bottom: 8rem;
  ${Style.fontSize(6)}
  @media ${Style.media('S')} {
    ${Style.fontSize(5)}
  }
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////


const database = {
  design : [
    {
      cover: "http://qn.canisminor.cc/project-instantzine.png",
      title: "须臾映社 Instant-Zine",
      type : "typography / photography",
      to   : "/projects/instant-zine"
    }, {
      cover: "http://qn.canisminor.cc/2018-08-18-project-panda.png",
      title: "熊猫金库 3.0",
      type : "ui design / mobile app",
      to   : "/blog/posts/20180101_panda"
    }, {
      cover: "http://qn.canisminor.cc/2018-08-22-project-3dpanda.png",
      title: "3D二发熊角色设定",
      type : "3d character design",
      to   : "/blog/posts/20171201_3dpanda"
    }, {
      cover: "http://qn.canisminor.cc/2018-08-18-project-quanda.png",
      title: "Quanda ICO",
      type : "brand design / ui design",
      to   : "/blog/posts/20180212_quanda"
    }, {
      cover: "http://qn.canisminor.cc/2018-08-18-project-hujiang.png",
      title: "沪江学习 Hujiang",
      type : "ui design / mobile app",
      to   : "/blog/posts/20151101_hujiang"
    }, {
      cover: "http://qn.canisminor.cc/2018-08-21-project-cc.png",
      title: "开心词场 Hujiang",
      type : "ui design / mobile app",
      to   : "/blog/posts/20150122_cichang"
    }
  ]
}

class Hola extends Component {
  componentDidMount() {
    setTitle('Hola');
  }

  Title = ({ title, num }) => {
    return (
      <Motion mode="lazyScroll">
        <section key="title">
          <Decoration content={[num, null]} />
          <Title>{title}</Title>
        </section>
      </Motion>
    );
  };

  Body = () => {
    return [
      <View key="design" name="design">
        <HolaView css={Inner}>
          {/*<this.Title title={'design'.toUpperCase()} num={'01'} />*/}
          <Design data={database.design} />
        </HolaView>
      </View>
    ]
  };


  render() {
    return [
      <Welcome key="welcome" />,
      <this.Body key="body" />
    ];
  }
}

export default Hola
