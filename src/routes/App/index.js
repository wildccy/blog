import { Component } from 'react';
import { Header, Style } from '../../components';
import styled from 'styled-components';

/// /////////////////////////////////////////////
// config
/// /////////////////////////////////////////////

const navbarTabs = {
  home: '/home',
  blog: '/blog',
  life: '/life',
  projects: '/projects',
  contact: '/contact',
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
        <Header tabs={navbarTabs} />
        <section>
          <Content>{this.props.children}</Content>
        </section>
      </div>
    );
  }
}

export default App;
