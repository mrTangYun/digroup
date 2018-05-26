import React, { Component } from 'react';
import CSS from '../css.scss';
import { browserHistory } from 'react-router';

export class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: props.show
    };
    this.clickImgHandler = this.clickImgHandler.bind(this);
  }

  clickImgHandler () {
    const url = this.props.data.url;
    browserHistory.push('honor/' + url);
  }
  componentDidMount () {
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio <= 0) return;
        this.props.isIntersection();
        const { show } = this.state;
        show || this.setState({
          show: true
        }, () => {
          let oImg = new Image();
          oImg.src = this.props.data.thumbUrl;
          this.img.src = this.props.data.thumbUrl;
          oImg.onload = () => {
            this.setState({
              imgLoaded: true
            });
            oImg = null;
          };
            // 停止观察
          io.unobserve(this.card);
          // 关闭观察器
          io.disconnect();
        });
      }
    );
    // 开始观察
    io.observe(this.card);
  }
  render () {
    const props = this.props.data;
    const { show, imgLoaded } = this.state;
    return (<div
      className={CSS.column + ' col-lg-4 col-md-4  col-sm-6 col-xs-12 ' + (show ? 'flipInX3' : 'flipContainer')}
      style={{
        animationDelay: (this.props.delay || 0) + 's'
      }}
      ref={e => {this.card = e;}}
    >
      <div className='card' onClick={this.clickImgHandler}>
        <div className='card-header'>
          <p className={CSS['card-meta']}>{props.meta}</p>
          <p className={CSS['card-title']}>{props.title}</p>
        </div>
        <div className={'card-image image-loading-container featured ' + (imgLoaded ? '' : 'loading')}>
          <div className='img-overlay'></div>
          <img
            ref={e => {this.img = e;}}
            className='img-responsive featured-image' />
        </div>
        {
          props.brand && <div
            className='client-logo'
            style={{ opacity: 1 }}
          >{props.brand}</div>
        }
      </div>
    </div>);
  }
};

export default Card;
