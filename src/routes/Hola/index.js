import { Component } from 'react';
import {
  Style,
  View,
  Motion,
  TitleDecoration,
} from '../../components/index';
import styled, { css } from 'styled-components';

import setTitle from '../../utils/setTitle';

import Welcome from './components/Welcome';
import Design from "./components/Design";


/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const HolaView = styled(View)`
  background: #fff;
  border-top: solid 0.5px rgba(0, 0, 0, 0.08);
  padding: 7rem 1rem;
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
  margin-bottom: 4rem;

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
      title: "测试名称1",
      type : "vue",
      to   : "/projects/instant-zine"
    },
    {
      cover: "http://qn.canisminor.cc/project-instantzine.png",
      title: "测试名称2",
      type : "fabric",
      to   : "/projects/instant-zine"
    }
  ]
}

class Hola extends Component {

  componentDidMount() {
    setTitle('Hola');
  }

  Body = () => {

    const HolaTitle = ({ title, num }) => {
      return (
        <Motion mode="lazyScroll">
          <section key="title">
            <Decoration content={[num, null]} />
            <Title>{title}</Title>
          </section>
        </Motion>
      );
    };

    return [
      <View key="design" name="design">
        <HolaView css={Inner}>
          <HolaTitle title={'toy'.toUpperCase()} num={'01'} />
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
