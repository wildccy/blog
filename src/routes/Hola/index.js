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
import Life from "./components/Life";
import Toy from './components/Toy'


/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const HolaView = styled(View)`
  background: #fff;
  border-top: solid 0.5px rgba(0, 0, 0, 0.08);
  padding: 7rem 1rem 3rem 1rem;
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
  ],
  coding : [
    {
      cover: "/img/coding-anto.png",
      title: "anto",
      desc : "🔵 Sketch Tools for AFUX",
      type : "sketch plugin",
      href : "https://github.com/canisminor1990/anto"
    },
    {
      cover: "/img/coding-name.png",
      title: "sketch-name-organizer",
      desc :
        "🖌 Rename and sort artboards based on their x and y position; Rename layers based on their Style and Symbol.",
      type : "sketch plugin",
      href : "https://github.com/canisminor1990/sketch-name-organizer"
    },
    {
      cover: "/img/coding-pand.png",
      title: "panda-design",
      desc : "🐼 Panda Design React UI Components",
      type : "react ui-kit",
      href : "https://github.com/PandaUED/panda-design"
    },
    {
      cover: "/img/coding-anto.png",
      title: "anto-diff",
      desc : "🔵 Sketch diff tool",
      type : "electron",
      href : "https://github.com/canisminor1990/anto-diff"
    },
    {
      cover: "/img/coding-bilibili.png",
      title: "bilibili-client",
      desc : "📺 Bilibili Mini-Client # Mac/Win",
      type : "electron",
      href : "https://github.com/canisminor1990/bilibili-client"
    },
    {
      cover: "/img/coding-ffxiv.png",
      title: "ffxiv-cmskin",
      desc : "🌱 CanisMinor ActSkin - FFXIV",
      type : "final fantasy xiv",
      href : "https://github.com/canisminor1990/ffxiv-cmskin"
    }
  ]
};

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
      <View key="toy" name="toy">
        <HolaView css={Inner}>
          <HolaTitle title={'life'.toUpperCase()} num={'01'} />
          <Life data={database.design} />
        </HolaView>
      </View>,
      <View key="life" name="life">
        <HolaView css={Inner}>
          <HolaTitle title={'life'.toUpperCase()} num={'02'} />
          <Toy data={database.coding} />
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
