import { Link } from 'dva/router';
import { Typist, Logo, Icon, View, Style } from '../../components';
import styled from 'styled-components';
import setTitle from '../../utils/setTitle';

const Content = styled(Link)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Desc = styled(Typist)`
  text-align: center;
  ${Style.fontSize(-1, true)};
`;

export default () => {
  setTitle('Welcome');

  return (
    <View mode="one" type="bottom">
      <Content to="/hola">
        <Desc>
          <span />
          😁 欢迎来到
          <br />
          my designs, articles
        </Desc>
      </Content>
    </View>
  );
};
