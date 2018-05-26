import React from 'react';
import { IndexLink, Link } from 'react-router';
import CSS from '../css.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import QueueAnim from 'rc-queue-anim';

export const Header = (props) => {
  let style = props.isWorkListpage ? CSS['workListpage'] : '';
  return (
    <Grid fluid className={CSS['header']}>
      <Row className={CSS['header-grid']}>
        <QueueAnim duration={1500} type={'alpha'}>
          <Col key='logo' md={2} className={CSS['header-left'] + ' ' + style}>
            <IndexLink to='/'>
              <img src={logo} />
            </IndexLink>
          </Col>
          <Col key='header-right' md={10} className={CSS['header-right'] + ' ' + style}>
            <div className={CSS['header-navs']}>
              <Link to='/works' activeClassName={CSS['route--active']}>
                WORKS
              </Link>
              <Link to='/honor' activeClassName={CSS['route--active']}>
                  HONOR
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
            <div className={CSS['header-wchatAndWeibo']}>
              <div className={CSS['wchat']}>
                WECHAT
                <div className={CSS['qrcode']}>
                  <img src="/images/qrcode_for_gh_98facb3e6b89_258.jpg" alt=""/>
                </div>
              </div>
              <div>/</div>
              <a href='https://weibo.com/u/2645342737' target='_blank'>WEIBO</a>
            </div>
            <div className={CSS['header-laug']}>中文</div>
          </Col>
        </QueueAnim>
      </Row>
    </Grid>
  );
};

export default Header;
