import React from 'react';
import Header from '../../Header';
import QueueAnim from 'rc-queue-anim';
import Home from '../../works/';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import logo from '../../Header/logo.svg';
import CSS from '../../css.scss';

const WIDTH = window.innerWidth;
const isMobile = WIDTH <= 768;
export const CoreLayout = ({ location, children }) => {
  const key = location.pathname;
  const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];
  const isWorkListpage = keys[0] === 'home' || keys[0] === 'works';
  const containerStyle = isWorkListpage ? 'container-fluid' : 'container';
  return (
    <div className='container-fluid'>
      <div className={CSS['header-nav']}>
        <Navbar
          collapseOnSelect
        >
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to='/'>
                <img src={logo} className={CSS['logo']} />
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={'works'}>
                <Link to='/works' activeClassName={CSS['route--active']}>
                  WORKS
                </Link>
              </NavItem>
              <NavItem eventKey={'about'}>
                <Link to='/about' activeClassName={CSS['route--active']}>
                  ABOUT
                </Link>
              </NavItem>
              <NavItem eventKey={'recruit'}>
                <Link to='/recruit' activeClassName={CSS['route--active']}>
                  RECRUIT
                </Link>
              </NavItem>
              <NavItem eventKey={'contact'}>
                <Link to='/contact' activeClassName={CSS['route--active']}>
                  CONTACT
                </Link>
              </NavItem>
            </Nav>
            {
              /*
              <Nav pullRight>
                <NavItem eventKey={1} href="#">WECHAT</NavItem>
                <NavItem eventKey={2} href="#">WEIBO</NavItem>
                <NavItem eventKey={3} href="#">中文</NavItem>
              </Nav>
              */
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={containerStyle}>
        <Header isWorkListpage={isWorkListpage} />
        <QueueAnim
          duration={1500}
          delay={500}
          type='top'
        >
          <div key='childrenOuter'>
            {children || <Home />}
          </div>
        </QueueAnim>
      </div>
    </div>
  );
};

CoreLayout.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};

export default CoreLayout;
