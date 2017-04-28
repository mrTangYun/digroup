import React, { Component } from 'react';
import CSS from '../css.scss';
import logo from './logo.png';
import { Grid, Row, Col } from 'react-bootstrap';
import PageTitle from '../PageTitle';

export class HomeView extends Component {
	
	constructor(props) {
		super(props);
		this.addressData = {
			beijing: {
				lng: 116.526076,
				lat: 39.911186,
				zoom: 16,
				title: 'BEIJING OFFICE',
				address: '北京市朝阳区高西店创意园53楼4号',
				tel: '010-65955658',
				fax: '010-65955651',
				email: 'boshang@digroup.com.cn'
			},
			shanghai: {
				lng: 116.526076,
				lat: 39.911186,
				zoom: 16,
				title: 'BEIJING OFFICE',
				address: '北京市朝阳区高西店创意园53楼4号',
				tel: '010-65955658',
				fax: '010-65955651',
				email: 'boshang@digroup.com.cn'
			}
		};
	}

	addMarker(point, index, map){  // 创建图标对象   
		var myIcon = new BMap.Icon(logo, new BMap.Size(40, 36), {    
		// 指定定位位置。   
		// 当标注显示在地图上时，其所指向的地理位置距离图标左上    
		// 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
		   // 图标中央下端的尖角位置。    
		   offset: new BMap.Size(20, 36),
		   // 设置图片偏移。   
		   // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
		   // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
		   imageOffset: new BMap.Size(0, 0)   // 设置图片偏移    
		 });
		// 创建标注对象并添加到地图
		 var marker = new BMap.Marker(point, {icon: myIcon});
		 map.addOverlay(marker);
	}  
	
	createMap = (data, element) => {
		const map = new window.BMap.Map(element);    // 创建Map实例
		map.setMapStyle({style:'grayscale'});
		map.centerAndZoom(new window.BMap.Point(data.lng, data.lat), data.zoom);  // 初始化地图,设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		const top_left_navigation = new window.BMap.NavigationControl(); 
  		map.addControl(top_left_navigation);   
  		var point = new BMap.Point(data.lng, data.lat);    
 		this.addMarker(point, 0, map);  
	}

	componentDidMount() {
		const addressData = this.addressData;
		this.createMap(addressData.beijing, this.addressBeijing);
		this.createMap(addressData.shanghai, this.addressShanghai);
	}

	renderInfo = (data) => {
		return (<Grid fluid className={CSS["content"]}>
				<Col md={2} className={CSS["left"]}>{data.title}</Col>
				<Col md={10} className={CSS["right"]}>
					<div>{data.address}</div>
					<div>TEL: {data.tel}</div>
					<div>FAX: {data.fax}</div>
					<div><a href='mailto:{data.email}'>{data.email}</a></div>
				</Col>
			</Grid>);
	}

	render() {
		return (
		  <div className={CSS["page-contact"]}>
		  	<PageTitle title='FOR NEW BUSINESS, CAREER AND MEDIA INQUIRIES, CONTACT US.' />
		    <div className={CSS["map-container"]}>
				<div className={CSS["map-outer"]}>
					<div className={CSS["map"]} ref={e => {this.addressBeijing = e}} />
				</div>
		    </div>
		    { this.renderInfo(this.addressData.beijing) }
		    <div className={CSS["map-container"]}>
				<div className={CSS["map-outer"]}>
					<div className={CSS["map"]} ref={e => {this.addressShanghai = e}} />
				</div>
		    </div>
		    { this.renderInfo(this.addressData.shanghai) }
		  </div>
		);
	}
};

export default HomeView;
