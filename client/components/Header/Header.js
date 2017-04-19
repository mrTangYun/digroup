import React from 'react';
import { IndexLink, Link } from 'react-router';
import CSS from '../css.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';

export const Header = () => (
  <Grid fluid  className={CSS["header"]}>
    <Row className={CSS["header-grid"]}>
      <Col md={2} className={CSS["header-left"]}>
        <IndexLink to='/'>
          <img src={logo} alt=""/>
        </IndexLink>
      </Col>
      <Col md={10} className={CSS["header-right"]}>
        <div className={CSS["header-navs"]}>
          <Link to='/works' activeClassName={CSS['route--active']}>
            WORKS
          </Link>
          <Link to='/about' activeClassName={CSS['route--active']}>
            ABOUT
          </Link>
          <Link to='/recruit' activeClassName={CSS['route--active']}>
            RECRUIT
          </Link>
          <Link to='/contact' activeClassName={CSS['route--active']}>
            CONTACT
          </Link>
        </div>
        <div className={CSS["header-wchatAndWeibo"]}>
          <div>WECHAT</div>
          <div>/</div>
          <div>WEIBO</div>
        </div>
        <div className={CSS["header-laug"]}>中文</div>
      </Col>
    </Row>
  </Grid>
);

export default Header;
