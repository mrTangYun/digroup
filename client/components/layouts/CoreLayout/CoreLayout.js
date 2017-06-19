import React from 'react';
import Header from '../../Header';
import QueueAnim from 'rc-queue-anim';
import Home from '../../works/';

export const CoreLayout = ({ location, children }) => {
	const key = location.pathname;
  	const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];
	return(
	  <div className='container-fluid'>
	    <Header />
	    <QueueAnim
	    	duration={1500}
	    	delay={500}
	    	type='top'
	    >
		    <div key='childrenOuter'>
				{children || <Home />}
		    </div>
	    </QueueAnim>
	    {/*<QueueAnim
	    	duration={500}
	    	ease={['easeOutQuart', 'easeInOutQuart']}
	    	delay={[500, 0]}
	    	// animConfig={[
	     //        { opacity: [1, 0], translateY: [0, 50] },
	     //        { opacity: [1, 0], translateY: [0, -50] }
	     //      ]}
	    	>
	    	{React.cloneElement(children || <Home />, { key })}
		</QueueAnim>*/}
	  </div>
	)
};

CoreLayout.propTypes = {
  children: React.PropTypes.element
};

export default CoreLayout;
