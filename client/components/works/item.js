import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../Card/index';
import PageTitle from '../PageTitle';
import Data from '../../static/works.json';
import { Grid, Row, Col } from 'react-bootstrap';
import Img from '../imageTag/';

export class HomeView extends Component {
  render () {
    const projectId = this.props.params.projectId;
    const data = Data.filter(item => item.url === projectId)[0];
    const info = data ? data.info : null;
    return (
      <div className={CSS['page-works']}>
        <PageTitle title={data.title} />
        <div className={CSS['work-info-container']}>
          {
            info.headImg && <img src={info.headImg} width='100%' />
          }
          {
            info.title && <div className={CSS['title']}>{info.title}</div>
          }
          {
            info.content && <div
              className={CSS['content']}
              dangerouslySetInnerHTML={{ __html: info.content }} />
          }
          {
            info.bigImages && info.bigImages.length > 0 && info.bigImages.map(item => <div
              key={item}
              className={CSS['bigImages-item']}>
              <img src={item} width='100%' />
            </div>)
          }
          <Grid fluid>
	          <Row className={CSS["services-row"]}>
	          {
	            info.mobileImages && info.mobileImages.length > 0 && info.mobileImages.map(item => <Col xs={6} sm={4}
	              key={item}
	              className={CSS['bigImages-item']}>
	              <Img src={item} width='100%' />
	            </Col>)
	          }
	          </Row>
	      </Grid>

        </div>
      </div>
    );
  }
};

export default HomeView;
