import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../Card/index';
import PageTitle from '../PageTitle';
import Data from '../../static/works.json';

export class HomeView extends Component {

	constructor(props) {
		super(props);
		this.delayArray = [];
		this.canRun = true;
		this.tmpArray = [];
		this.state = {
			delayObject: Data.map((item, index) => {
				return (index + 1) / 6
			})
		};
	}

	isIntersection (index) {
		this.delayArray = [...this.delayArray, index];
	    this.tmpArray = [...this.tmpArray, index];
		if(!this.canRun){
	        // 判断是否已空闲，如果在执行中，则直接return
	        return;
	    }
	    this.canRun = false;
	    setTimeout(() => {
	        // console.log("函数节流");
	        const tmpArray_ = this.tmpArray.sort((a, b) => a - b);
	        const delayObject = this.state.delayObject.slice(0);
	        // console.log(tmpArray_);
	        tmpArray_.map((item, index) => {
	        	delayObject[item] = (index + 1) / 6
	        });

	        // console.log(delayObject);
	        this.setState({
	         	delayObject: delayObject
	        });
	        this.canRun = true;
	    	this.tmpArray = [];
	    }, 1000 / 2);
	}
	render () {
		const { delayObject } = this.state;
		// console.log(delayObject);
	    return (
	      	<div className={CSS['page-works']}>
			  	<PageTitle title='SELECTED WORKS' />
			    <div className='container-fluid'>
				    <div className='row-fluid'>
				    {
				    	Data.map((item, index) => {
				    		return (<Card
					    		key={index}
						    	style={{
						    		width: '50%'
						    	}}
						    	isIntersection={ () =>{this.isIntersection(index)}}
						    	delay={delayObject[index]}
						    	show={false}
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
