import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../Card/index';
import PageTitle from '../PageTitle';
import Data from '../../static/works.json';

export class HomeView extends Component {
  render () {
    return (
      <div className={CSS['page-works']}>
		  	<PageTitle title='SELECTED WORKS' />
		    <div className='container'>
			    <div className='row'>
			    {
			    	Data.map((item, index) => {
			    		return (<Card
				    		key={index}
					    	style={{
					    		width: '50%'
					    	}}
					    	delay={index / 3}
					    	show={true}
                data={item}
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
