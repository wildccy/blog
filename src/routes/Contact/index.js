import {Component} from 'react';
import styled, {css} from 'styled-components';
import {
  View,
  Button,
  Style,
  Input,
  Image,
  Modal,
  Header,
  Loading,
} from '../../components';
import Title from './components/Title';
import setTitle from '../../utils/setTitle';
import {connect} from 'dva'


/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const Inner = css`
  max-width: 1024px !important;
`;

const Row = styled.div`
  display: flex;
  padding: 0 6rem;
  @media ${Style.media('M')} {
    padding: 0 2rem;
  }
  @media ${Style.media('MS')} {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const Main = styled.div`
  flex: 1;
  width: 100%;
`;

const MainItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
`;

const MainTitle = styled.span`
  position: relative;
  &:before {
    position: absolute;
    content: '';
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    z-index: -1;
    transition: all 0.8s ${Style.ease.normal};
    bottom: -0.25rem;
    left: 0;
  }
  &:hover {
    &:before {
      background: ${Style.color.goldDark};
      width: 2rem;
    }
  }
`;

const ContactIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const Mail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 2;
  width: 100%;
  @media ${Style.media('S')} {
    align-items: center;
    button {
      width: 100%;
    }
  }
`;

/// /////////////////////////////////////////////
// connect
/// /////////////////////////////////////////////


const data = {
  "main": [{
    "icon": "http://qaiuit270.bkt.clouddn.com/contact-phone.png",
    "title": "156-2152-1305",
    "href": "tel://15621521305"
  }, {
    "icon": "http://qaiuit270.bkt.clouddn.com/contact-mail.png",
    "title": "chengye_a@163.com",
    "href": "chengye_a@163.com"
  }, {
    "icon": "http://qaiuit270.bkt.clouddn.com/contact-wechat.png",
    "title": "wscccccy",
    "href": "/contact/qrcode"
  }, {
    "icon": "http://qaiuit270.bkt.clouddn.com/contact-qq.png",
    "title": "1411795091",
    "href": "http://wpa.qq.com/msgrd?v=3&uin=1411795091&site=qq&menu=yes"
  }, {
    "icon": "http://qaiuit270.bkt.clouddn.com/contact-github.png",
    "title": "canisminor1990",
    "href": "https://github.com/canisminor1990"
  }]
}
/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

class Contact extends Component {
  componentDidMount() {
    setTitle('Contact');
  }

  state = {
    name: '',
    email: '',
    message: '',
    modal: {
      title: '',
      content: '',
      button: '',
    },
  };

  Main = () => {
    const mapMain = (item, i) => (
      <MainItem key={i} href={item.href}>
        <ContactIcon src={item.icon}/>
        <MainTitle>{item.title}</MainTitle>
      </MainItem>
    );
    return <Main>{data.main.map(mapMain)}</Main>;
  };

  Mail = () => (
    <Mail>
      <Input placeholder="NAME" onChange={e => this.setState({name: e.target.value})}/>
      <Input placeholder="E-MAIL" onChange={e => this.setState({email: e.target.value})}/>
      <Input
        placeholder="MESSAGE"
        onChange={e => this.setState({message: e.target.value})}
        textarea
      />
      <Button type="black" onClick={this.handleClick}>
        send message
      </Button>
    </Mail>
  );

  render() {
    return [
      <Header.PlaceHolder key="header"/>,
      <View key="view" css={Inner} type="bottom" duration={1000} interval={500}>
        <Title key="title"/>
        <Row key="row" align="flex-start">
          <this.Main/>
        </Row>
      </View>
    ];
  }

  handleClick = () => {
    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      this.setState({
        modal: {
          title: 'Oops...',
          button: 'got it',
          content: 'The info or the message cannot be empty 😥',
        },
      });
      this.openModal();
      return;
    }
    this.props.sendMessage({
      subject: `${this.state.name} <${this.state.email}>`,
      text: this.state.message,
    });

    this.setState({
      modal: {
        title: 'Thank you',
        button: 'close',
        content: (
          <this.SendResult
            key={JSON.stringify(this.props.loading)}
            loading={this.props.loadingMail}
          />
        ),
      },
    });
    this.openModal();
  };

  SendResult = ({loading}) => {
    const {mail} = data;
    if (loading || mail.id === '') return <Loading/>;
    return (
      <div key={mail.id}>
        {mail.message === 'Queued. Thank you.'
          ? 'Message has be sent, thanks for your contact 😘'
          : mail.message}
      </div>
    );
  };
  openModal = () => {
    this.setState({modalIsOpen: true});
  };
  closeModal = () => {
    this.setState({modalIsOpen: false});
  };
}

export default Contact
