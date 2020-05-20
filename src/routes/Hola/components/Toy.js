import styled from 'styled-components';
import { Style, Image, Motion, Button } from '../../../components';
import { Component } from 'react';

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0 3rem 3rem;
  @media ${Style.media('S')} {
    padding: 0 0 3rem;
  }
`;

const Card = styled.a`
  display: flex;
  min-width: 20rem;
  flex: 1;
  padding: 1rem;
  margin: 0.5rem;
  transition: all 0.5s ${Style.ease.normal};
  border-radius: 0.25rem;
  &:hover {
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }
`;

const Cover = styled(Image)`
  width: 3rem;
  height: 3rem;
`;

const Content = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

const Title = styled.div`
  font-weight: 500;
  ${Style.fontSize(1)};
  margin-bottom: 0.5rem;
`;

const Desc = styled.div`
  ${Style.fontSize(-1, true)};
  margin-bottom: 0.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Type = styled.div`
  ${Style.fontSize(-2)};
  color: ${Style.color.goldDark};
  > span {
    margin-left: 0.5rem;
    font-family: ${Style.fontFamily.times};
    color: #888;
    font-style: italic;
  }
`;

const MotionView = styled(Motion)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class Toy extends Component {

  MapMain = (item, i) => (
    <Card key={i} href={item.href} target="_blank" rel="noopener noreferrer">
      <Cover src={item.cover} />
      <Content>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Type>
          -<span>{item.type}</span>
        </Type>
      </Content>
    </Card>
  );


  render() {
    return (
      <div>
        <MotionView mode="lazyScroll">
          <Main>{this.props.data.map(this.MapMain)}</Main>
        </MotionView>
        <MotionView mode="lazyScroll">
          <Button>view more repos</Button>
        </MotionView>
      </div>
    );
  }
}

export default Toy
