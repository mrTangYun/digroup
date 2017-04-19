import React from 'react';
import Header from '../../Header';
import QueueAnim from 'rc-queue-anim';
import Home from '../../works/';

export const CoreLayout = ({ location, children }) => {
	const key = location.pathname;
  	const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];
	return(
	  <div className='container'>
	    <Header />
	    <QueueAnim
	    	duration={500}
	    	type={['right', 'left']}
	    	ease={['easeOutQuart', 'easeInOutQuart']}
	    	>
	    	{React.cloneElement(children || <Home />, { key })}
		</QueueAnim>
	  </div>
	)
};

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
