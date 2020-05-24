import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import * as ariaAppHider from '../../utils/ariaAppHider';
import SafeHTMLElement, { canUseDOM } from '../../utils/safeHTMLElement';
import { polyfill } from 'react-lifecycles-compat';

export const portalClassName = 'ReactModalPortal';
export const bodyOpenClassName = 'ReactModal__Body--open';

const isReact16 = ReactDOM.createPortal !== undefined;
const createPortal = isReact16
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

class Modal extends Component {
  static setAppElement(element) {
    ariaAppHider.setElement(element);
  }

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.shape({
      content: PropTypes.object,
      overlay: PropTypes.object,
    }),
    portalClassName: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        base: PropTypes.string.isRequired,
        afterOpen: PropTypes.string.isRequired,
        beforeClose: PropTypes.string.isRequired,
      }),
    ]),
    overlayClassName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        base: PropTypes.string.isRequired,
        afterOpen: PropTypes.string.isRequired,
        beforeClose: PropTypes.string.isRequired,
      }),
    ]),
    appElement: PropTypes.instanceOf(SafeHTMLElement),
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    ariaHideApp: PropTypes.bool,
    shouldFocusAfterRender: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldReturnFocusAfterClose: PropTypes.bool,
    parentSelector: PropTypes.func,
    aria: PropTypes.object,
    data: PropTypes.object,
    role: PropTypes.string,
    contentLabel: PropTypes.string,
    shouldCloseOnEsc: PropTypes.bool,
    overlayRef: PropTypes.func,
    contentRef: PropTypes.func,
  };
  /* eslint-enable react/no-unused-prop-types */

  static defaultProps = {
    isOpen: false,
    portalClassName,
    bodyOpenClassName,
    ariaHideApp: true,
    closeTimeoutMS: 0,
    shouldFocusAfterRender: true,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldReturnFocusAfterClose: true,
    parentSelector: () => document.body,
  };

  componentDidMount() {
    if (!canUseDOM) return;

    if (!isReact16) {
      this.node = document.createElement('div');
    }
    this.node.className = this.props.portalClassName;

    const parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);

    !isReact16 && this.renderPortal(this.props);
  }

  getSnapshotBeforeUpdate(prevProps) {
    const prevParent = getParentElement(prevProps.parentSelector);
    const nextParent = getParentElement(this.props.parentSelector);
    return { prevParent, nextParent };
  }

  componentDidUpdate(prevProps, _, snapshot) {
    if (!canUseDOM) return;
    const { isOpen, portalClassName } = this.props;

    if (prevProps.portalClassName !== portalClassName) {
      this.node.className = portalClassName;
    }

    const { prevParent, nextParent } = snapshot;
    if (nextParent !== prevParent) {
      prevParent.removeChild(this.node);
      nextParent.appendChild(this.node);
    }

    // Stop unnecessary renders if modal is remaining closed
    if (!prevProps.isOpen && !isOpen) return;

    !isReact16 && this.renderPortal(this.props);
  }

  componentWillUnmount() {
    if (!canUseDOM || !this.node || !this.portal) return;

    const state = this.portal.state;
    const now = Date.now();
    const closesAt =
      state.isOpen &&
      this.props.closeTimeoutMS &&
      (state.closesAt || now + this.props.closeTimeoutMS);

    if (closesAt) {
      if (!state.beforeClose) {
        this.portal.closeWithTimeout();
      }

      setTimeout(this.removePortal, closesAt - now);
    } else {
      this.removePortal();
    }
  }

  removePortal = () => {
    !isReact16 && ReactDOM.unmountComponentAtNode(this.node);
    const parent = getParentElement(this.props.parentSelector);
    parent.removeChild(this.node);
  };

  portalRef = ref => {
    this.portal = ref;
  };

  renderPortal = props => {
    const portal = createPortal(this, <ModalPortal {...props} />, this.node);
    this.portalRef(portal);
  };

  render() {
    if (!canUseDOM || !isReact16) {
      return null;
    }

    if (!this.node && isReact16) {
      this.node = document.createElement('div');
    }

    return createPortal(<ModalPortal ref={this.portalRef} {...this.props} />, this.node);
  }
}

polyfill(Modal);

export default Modal;
