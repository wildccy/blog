import { Component } from 'react';
import {
  Style,
  View,
  TitleDecoration,
} from '../../components/index';
import styled, { css } from 'styled-components';
import Welcome from './components/Welcome';
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


class Home extends Component {
  componentDidMount() {
    setTitle('Home');
  }


  render() {
    return [
      <Welcome />
    ];
  }
}

export default Home
