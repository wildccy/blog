import {Component} from 'react';
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
        "s": "http://qn.canisminor.cc/pattay-cover-s.jpg",
        "m": "http://qn.canisminor.cc/pattay-cover-m.jpg",
        "l": "http://qn.canisminor.cc/pattay-cover-l.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qn.canisminor.cc/pattay-cover-s.jpg",
        "m": "http://qn.canisminor.cc/pattay-cover-m.jpg",
        "l": "http://qn.canisminor.cc/pattay-cover-l.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qn.canisminor.cc/pattay-cover-s.jpg",
        "m": "http://qn.canisminor.cc/pattay-cover-m.jpg",
        "l": "http://qn.canisminor.cc/pattay-cover-l.jpg"
      },
      "date": "2019-10-10"
    }, {
      "filename": "测试文件",
      "title": "测试文件",
      "tag": "life",
      "desc": "2019.10.01-2019.10.09",
      "cover": {
        "s": "http://qn.canisminor.cc/pattay-cover-s.jpg",
        "m": "http://qn.canisminor.cc/pattay-cover-m.jpg",
        "l": "http://qn.canisminor.cc/pattay-cover-l.jpg"
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

  render() {
    const first = 1;
    return [
      <Header.PlaceHolder key="header"/>,
      <View key="view">
        <Page>
          <List duration={500} interval={200}>
            {
              database['toc'].map((post, i) => (
                  <Post key={i} wide={first && i === 0} content={post}/>
                ))
            }
          </List>
        </Page>
      </View>,
    ];
  }
}

export default Life
