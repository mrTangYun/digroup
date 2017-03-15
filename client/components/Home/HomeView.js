import React, { Component } from 'react';
import DuckImage from './assets/Duck.jpg';
import './HomeView.scss';
import Card from '../Card/index';
export class HomeView extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
		  <div>
		    <h4>Welcome!</h4>
		    {
		    	[1,2,3,4,5,6,7,8,9].map((item,index) => {
		    		return (<Card
			    		key={index}
				    	style={{
				    		width: '50%'
				    	}}
				    	show={true}
				    	meta="SUNSTAR"
				    	title="G•U•M PLAY"
						imgUrl="https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/GUMPLAY_partyweb_161213_1280.jpg"
						logoUrl="https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/sunstar.svg"
				    />);
		    	})
		    }
		  </div>
		);
	}
};

export default HomeView;
