  import {Component} from 'react';
import styled from 'styled-components';
import {
  Style,
  Motion,
  Header,
  Loading
} from '../../components';
import {Link} from 'dva/router';
import setTitle from '../../utils/setTitle';
import {connect} from 'dva'

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const Body = styled(Motion)`
  max-width: 1024px;
  min-height: 50vh;
  overflow: hidden;
  margin: 0 auto 4rem;
  @media ${Style.media('S')} {
    margin-top: -2rem;
  }
`;

const Item = styled(Link)`
  display: block;
  position: relative;
`;

const Cover = styled.div`
  display: block;
  width: 100%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;
  @media ${Style.media('M')} {
    height: 8rem;
  }
  @media ${Style.media('S')} {
    height: 6rem;
    background-position: left center;
  }
`;

const Mask = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transition: all 0.5s ease-in-out;

  ${Item}:hover & {
    transform: translate3d(100%, 0, 0);
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Split = styled.div`
  height: 1px;
  background: #222;
  width: 4rem;
  margin-right: 3rem;
  transition: all .5s ${Style.ease.normal};
        ${Item}:hover & {
    background: #fff;
    width: 9rem;
    margin-right: 1.5rem;
  }
        @media ${Style.media('M')} {
       width: 2rem;
            ${Item}:hover & {
    width: 5rem;
  }

      @media ${Style.media('S')} {
       width: 1rem;
            ${Item}:hover & {
    width: 3rem;
  }
  }
`;

const Number = styled.div`
  position: absolute;
  z-index: 0;
  left: 5rem;
  transition: all 0.5s ${Style.ease.normal};
  ${Item}:hover & {
    color: rgba(255, 255, 255, 0);
  }
  @media ${Style.media('M')} {
    font-size: 0.8rem;
    left: 3rem;
  }
  @media ${Style.media('S')} {
    left: 2rem;
  }
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  transition: all 0.5s ${Style.ease.normal};
  ${Style.fontSize(2, true)} ${Item}:hover & {
    color: #fff;
  }

  @media ${Style.media('M')} {
    ${Style.fontSize(1, true)};
  }
`;

const ProjectDesc = styled.div`
  ${Style.fontSize(-2, true)};
  transition: all 0.5s ${Style.ease.normal};
  letter-spacing: 0.06em;
  ${Item}:hover & {
    color: #fff;
  }
`;

const Button = styled.div`
  letter-spacing: 0.06em;
  ${Style.fontSize(-2, true)};
  font-weight: 500;
  height: 4rem;
  width: 12rem;
  padding: 1.5rem 0 0 1.4rem;
  transition: all 0.5s ${Style.ease.normal};
  background-image: url('${require('../../assets/projects-btn-normal.png')}');
  background-size: 100%;
  margin-top: 2rem;
  @media ${Style.media('MS')} {
    display: none;
  }
  ${Item}:hover & {
    color: #fff;
    background-color: #222;
    background-image: url('${require('../../assets/projects-btn-active.png')}');
  }
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class Toy extends Component {
  componentDidMount() {
    setTitle('Projects');
    this.props.getToy()
  }

  MapList = (item, i) => {
    const num = (i + 1).toString();
    return (
      <Item key={i} to={item.to}>
        <Cover style={{backgroundImage: `url(${item.cover})`}} grey/>
        <Mask/>
        <Content>
          <Left>
            <Split/>
            <Number>{num.length < 2 ? `0${num}` : num}</Number>
            <div style={{zIndex: 1}}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDesc>{item.type.toUpperCase()}</ProjectDesc>
            </div>
          </Left>
          <Button>VIEW PROJECT</Button>
        </Content>
      </Item>
    );
  };

  Main = ({toc}) => (
    this.props.loading ?  <Loading/> :<div>
      <Body delay={200} duration={1000} interval={200}>
        {toc.map(this.MapList)}
      </Body>
    </div>
  );

  render() {
    const {toc} = this.props.toy;
    console.log(toc);
    return [
      <Header.PlaceHolder key="header"/>,
      <this.Main key="main" toc={toc}/>,
    ];
  }
}

  export default connect(
    state =>{
      const {information:{toy}} = state;
      return {
        toy,
        loading: _.size(toy['toc']) === 0
      }
    },
    dispatch => ({
      getToy() {
        dispatch({type: 'information/toy'});
      }
    })
  )(Toy)
