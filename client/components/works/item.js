import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../Card/index';
import PageTitle from '../PageTitle';
import Data from '../../static/works.json';
import { Grid, Row, Col } from 'react-bootstrap';
import Img from '../imageTag/';
import { Modal } from 'antd';
import VideoPlayer from '../video';

const WIDTH = window.innerWidth;
const isMobile = WIDTH <= 768;
export class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideoModal: false
    };
  }
  handlePlay () {

  }
  render () {
    const projectId = this.props.params.projectId;
    const data = Data.filter(item => item.url === projectId)[0];
    const info = data ? data.info : null;
    const movieComponent = (info.movies && info.movies.length > 0) ? <div
      className={CSS['movieBtn']}
      onClick={() => {
        this.setState({
          showVideoModal: true
        });
      }}
    >
    MOVIE</div> : null;
    const videoJsOptions = {
      width: isMobile ? WIDTH : 800,
      height: 450,
      autoplay: true,
      controls: true,
      sources: [{
        src: info.movies && (info.movies.length > 0) && info.movies[0].mp4,
        type: 'video/mp4'
      }]
    };
    const mobileImagesLength = info.mobileImages ? info.mobileImages.length : 0;
    const numOfRow = mobileImagesLength % 3 === 0 ? 4 : (mobileImagesLength % 2 === 0 ? 6 : 4);
    return (
      <div className={CSS['page-works']}>
        <PageTitle
          title={data.title}
          rightComponent={movieComponent}
        />
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
                info.mobileImages && info.mobileImages.length > 0 && info.mobileImages.map(item => <Col xs={6} sm={numOfRow}
                                                                                                        key={item}
                                                                                                        className={CSS['bigImages-item']}>
                  <Img src={item} width='100%' />
                </Col>)
              }
            </Row>
          </Grid>
        </div>
        {
          movieComponent && this.state.showVideoModal && <Modal
            wrapClassName='videoModal'
            width={isMobile ? WIDTH : 830}
            visible
            footer={null}
            title={null}
            onCancel={() => {
              this.setState({
                showVideoModal: false
              });
            }}
          >
            <VideoPlayer {...videoJsOptions} />
          </Modal>
        }
      </div>
    );
  }
};

export default HomeView;
