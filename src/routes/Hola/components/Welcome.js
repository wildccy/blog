import styled, { css } from 'styled-components';
import { Style, Typist, View, TitleDecoration, Icon } from '../../../components';

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////
const WelcomeView = styled(View)`
  height: 100vh;
`;

const Inner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleIcon = styled.div`
  margin-top: 10vh;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  i {
    font-size: 8vw;
    line-height: 1.5;
    transition: all 0.5s ${Style.ease.normal};
    &:hover {
      color: transparent;
      -webkit-text-stroke: 1px #222;
    }
  }
  .Typist {
    font-size: 0.7vw;
    line-height: 1.5 !important;
    text-align: center;
    transition: font-size 0.3s ease;
    margin-top: 10vh;
  }
  @media ${Style.media('XL')} {
    i {
      font-size: 10vw;
    }
    .Typist {
      font-size: 1.8vw;
    }
  }
  @media ${Style.media('M')} {
    i {
      font-size: 13vw;
    }
    .Typist {
      ${Style.fontSize(0)};
      width: 70%;
    }
  }
  @media ${Style.media('S')} {
    .Typist {
      ${Style.fontSize(-1)};
    }
  }
`;

const Decoration = styled(TitleDecoration)`
  position: absolute;
  left: -4rem;
  top: -2rem;
  @media ${Style.media('XL')} {
    left: -1rem;
  }
  @media ${Style.media('L')} {
    left: 0;
  }
  @media ${Style.media('L')} {
    left: 1rem;
  }
  @media ${Style.media('S')} {
    left: 2rem;
  }
`;
/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

export default () => {
  return (
    <WelcomeView css={Inner} type="bottom" duration={5000}>
      <Title key="title">
        <Decoration key="decoration" />
        <TitleIcon>
          <Icon type="iconfont icon-title" />
        </TitleIcon>
        <Typist steady>
          What I hope to pursue is the technical freedom of programming.<br/>
          use free time to learn diverse and versatile skills.<br/>
          do not limit own knowledge system to a specific position
        </Typist>
      </Title>
    </WelcomeView>
  );
};
