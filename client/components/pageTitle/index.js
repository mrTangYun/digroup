import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import CSS from '../css.scss';

export const PageTitle = (props) => (<QueueAnim
	  			key={"pageTitleAnimate"}
	  			duration={1500}
	  			animConfig={[
		            { opacity: [1, 0], translateY: [0, -20] },
		            { opacity: [1, 0], translateY: [0, 20] }
		        ]}
	  		>
		    	<div className={CSS["pageTitle"]} key={"pageTitle"}>
		    		<div>{props.title}</div>
		    		{
		    			props.rightComponent
		    		}
		    	</div>
		    </QueueAnim>);

PageTitle.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default PageTitle;