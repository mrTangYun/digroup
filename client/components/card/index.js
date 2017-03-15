import React, { Component } from 'react';
import CSS from './css.scss';

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
  					console.log(entries);
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
		const { show } = this.state;
		return (<div
		  	className={CSS.CardOuter}
		  	style={props.style}
		  	ref='card'
		  	>
		    <div className={"column col-6 col-xs-12 " + (show ? 'flipInX3' : 'flipContainer')}>
		    	<div className="card">
		    		<div className="card-header">
		    			<p className="card-meta">{props.meta}</p>
		    			<p className="card-title">{props.title}</p>
		    		</div>
		    		<div className="card-image image-loading-container featured loading">
		    			<div className="img-overlay"></div>
		    			<img
		    			  className="img-responsive featured-image"
		    			  src={props.imgUrl}
		    			  style={{opacity: 1}} />
		    		</div>
		    		<img
		    		  className="client-logo"
		    		  src={props.logoUrl}
		    		  style={{opacity: 1}} />
		    	</div>
		    </div>
		  </div>);
	}
};

export default Card;