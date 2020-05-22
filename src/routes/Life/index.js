import {Component, forwardRef} from 'react';
import {View, Post, Motion, Header} from '../../components';
import styled from 'styled-components';
import setTitle from '../../utils/setTitle';

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


const database = {
  "toc": [
    {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "m": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "l": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "m": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "l": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "m": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "l": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "m": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg",
        "l": "http://qaiuit270.bkt.clouddn.com/u%3D3823497673%2C755702841%26fm%3D26%26gp%3D0.jpg"
      },
      "date": "2019-10-10"
    }], "page": 1, "pages": 5
};
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
  }

  Main = (post, i) => (<Post key={i}  wide={1 && i === 0} content={post}/>);

  render() {
    return [
      <Header.PlaceHolder key="header"/>,
      <View key="view">
        <Page>
          <List duration={500} interval={200}>
            {database['toc'].map(this.Main)}
          </List>
        </Page>
      </View>,
    ];
  }
}

export default Life
