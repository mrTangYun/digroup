import React, { Component } from 'react';
import CSS from '../css.scss';

export class Card extends Component{
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
	componentDidMount() {
		const io = new IntersectionObserver(
  			entries => {
  				const { show } = this.state;
  				show || this.setState({
  					show: true
  				}, () => {
					let oImg = new Image();
					oImg.src = this.props.imgUrl;
					this.refs.img.src = this.props.imgUrl;
					oImg.onload = () => {
						this.setState({
							imgLoaded: true
						});
						oImg = null;
					};
  					// 停止观察
					io.unobserve(this.refs.card);
					// 关闭观察器
					io.disconnect();
  				});
  			}
		);
		// 开始观察
		io.observe(this.refs.card);
	}	
	render () {
		const props = this.props;
		const { show, imgLoaded } = this.state;
		return (<div
		    className={CSS.column + " col-md-4 col-xs-12 " + (show ? 'flipInX3' : 'flipContainer')}
		    style={{
		    	animationDelay: (props.delay || 0)  + 's'
		    }}
		  	ref='card'
		    >
		    	<div className="card">
		    		<div className="card-header">
		    			<p className={CSS["card-meta"]}>{props.meta}</p>
		    			<p className={CSS["card-title"]}>{props.title}</p>
		    		</div>
		    		<div className={"card-image image-loading-container featured " + (imgLoaded ? '' : 'loading')} >
		    			<div className="img-overlay"></div>
		    			<img
		    			  ref='img'
		    			  className="img-responsive featured-image" />
		    		</div>
		    		<img
		    		  className="client-logo"
		    		  src={props.logoUrl}
		    		  style={{opacity: 1}} />
		    	</div>
		    </div>);
	}
};

export default Card;