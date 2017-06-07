import React, { Component } from 'react';
export class Img extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount () {
    const io = new IntersectionObserver(
      entries => {
        const { show } = this.state;
        show || this.setState({
          show: true
        }, () => {
          let oImg = new Image();
          oImg.src = this.props.src;
          oImg.onload = () => {
            this.setState({
              imgLoaded: true
            });
            this.img.src = this.props.src;
            oImg = null;
          };
            // 停止观察
          io.unobserve(this.img);
          // 关闭观察器
          io.disconnect();
        });
      }
    );
    // 开始观察
    io.observe(this.img);
  }
  render () {
    const { src, ...other } = this.props;
    return (<img ref={e => this.img = e} {...other} />);
  }
};

export default Img;
