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
import Toy from "./components/Toy";
import Life from './components/Life'
import Contact from "./components/Contact";
import { connect } from 'dva';

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const HolaView = styled(View)`
 width: 100%;
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


const State = state => {
  return {
    hola: state.hola
  };
};

const Dispatch = dispatch => ({
  getHola() {
    dispatch({ type: 'information/hola' });
  },
});


class Hola extends Component {

  componentDidMount() {
    setTitle('Hola');
    this.props.getHola();
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
      <HolaView key="toy" name="toy" css={Inner}>
        <HolaTitle title={'toy'.toUpperCase()} num={'01'} />
        <Toy data={this.props.hola.toy} />
      </HolaView>,
      <HolaView key="life" name="life" css={Inner}>
        <HolaTitle title={'life'.toUpperCase()} num={'02'} />
        <Life data={this.props.hola .life} />
      </HolaView>,
      <Contact key="contact" />
    ]
  };


  render() {
    return [
      <Welcome key="welcome" />,
      <this.Body key="body" />
    ];
  }
}

export default connect(
  State,
  Dispatch
)(Hola);
