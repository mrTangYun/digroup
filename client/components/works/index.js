import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../Card/index';
import PageTitle from '../PageTitle';
export class HomeView extends Component {
	render() {
		const array = [
			'/images/works/1/thumb.jpg',
			'/images/works/2/thumb.jpg',
			'/images/works/3/thumb.jpg',
			'/images/works/4/thumb.jpg',
			'/images/works/5/thumb.jpg',
			'/images/works/6/thumb.jpg'
		];
		return (
		  <div className={CSS['page-works']}>
		  	<PageTitle title='SELECTED WORKS' />
		    <div className='container'>
			    <div className='row'>
			    {
			    	array.map((item,index) => {
			    		return (<Card
				    		key={index}
					    	style={{
					    		width: '50%'
					    	}}
					    	delay={index / 10}
					    	show={true}
					    	meta="WEB DESIGN"
					    	title="AI"
							imgUrl={item}
							logoUrl="https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/sunstar.svg"
					    />);
			    	})
			    }
			    </div>
		    </div>
		  </div>
		);
	}
};

export default HomeView;
