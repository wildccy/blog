import {Component, forwardRef} from 'react';
import {View, Post, Motion, Header,Loading} from '../../components';
import styled from 'styled-components';
import setTitle from '../../utils/setTitle';
import {connect} from 'dva'

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const List = styled(Motion)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`;

const Page = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class Life extends Component {
  state = {
    showButton: true,
    page: 1,
  };

  componentDidMount() {
    setTitle('Blog');
    this.props.getLife();
  }

  Main = (post, i) => (<Post key={i}  wide={1 && i === 0} content={post}/>);

  render() {
    const {toc} = this.props.life
    return [
      <Header.PlaceHolder key="header"/>,
      <View key="view">
        <Page>
          <List duration={500} interval={200}>
            { this.props.loading ?  <Loading/> : toc.map(this.Main)}
          </List>
        </Page>
      </View>
    ];
  }
}

export default connect(
  state =>{
    const {information:{life}} = state;
    return {
      life,
      loading: _.size(life['toc']) === 0
    }
  },
  dispatch => ({
    getLife() {
      dispatch({type: 'information/life'});
    }
  })
)(Life)
