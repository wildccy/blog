import { Component } from 'react';
import { Header } from '../../components';
import styled from 'styled-components';

/// /////////////////////////////////////////////
// config
/// /////////////////////////////////////////////

const NAVTABS = {
  home: '/home',
  blog: '/blog',
  life: '/life',
  projects: '/projects',
  contact: '/contact'
};

const Content = styled.div`
  min-height: 100vh;
`;

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////


/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class App extends Component {
  render() {
    if (location.pathname === '/') return this.props.children;
    return (
      <div>
        <Header tabs={NAVTABS} />
        <section>
          <Content>{this.props.children}</Content>
        </section>
      </div>
    );
  }
}

export default App;
