import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import PageTitle from '../PageTitle';
import CSS from '../css.scss';
import { Grid, Row, Col } from 'react-bootstrap';

export class HomeView extends Component {
	render() {
		return (
		  <div className={CSS["recruit"]}>
		    <PageTitle title='JOIN US TO EXPERIMENT & MAKE.' />
		    <QueueAnim
	  			key={"bannerAnimate"}
	  			delay={200}
	  			duration={1500}
	  			animConfig={{
	  				opacity: [1, 0],
	  				translateY: [0, -30]
	  			}}
	  		>
			    <div className={CSS["banner"]} key={"banner"}>
					<img src="/images/recruit/banner.jpg" width="100%" />
			    </div>
		    </QueueAnim>
		    <QueueAnim
	  			key={"my-contains"}
	  			delay={400}
	  			duration={1500}
	  			type='top'
	  		>
			    <div className={CSS["my-contains"]}  key={"my-contains"}>
            <div className={CSS["about-page"]}>
              <div className={CSS["h4"]}>INTRODUCTION</div>
              <div className={CSS["about-desc"]} dangerouslySetInnerHTML={{__html: '北京博尚广告有限公司成立于2011年，是一家以创意为导向，立足于Social Media，专注于品牌策划、管理和推广，致力于提供互动行销整体解决方案的数字营销公司。公司核心团队中60%的创意人员来自4A，8年以上广告从业经历的资深成员达40%，且拥有专业而独立的互动技术团队，在Digital和CRM领域均有自己独到的运营理念。<br />博尚广告成立以来，紧扣社交媒体发展的脉搏，集合丰富且全面的媒体推广资源，整合创新，一直走在数字营销前沿，并于2013年被艾菲奖组委会推选，荣登大中华区4A 100强。'}}></div>
              <div className={CSS["h4"]}>SERVICES</div>
              <div className="services">
                <Grid fluid>
                  <Row>
                    <Col md={3}>品牌策略</Col>
                    <Col md={3}>APP制作推广</Col>
                    <Col md={3}>微博/微信运营</Col>
                    <Col md={3}>媒体投放</Col>
                    <Col md={3}>TVC制作</Col>
                    <Col md={3}>EPR营销</Col>
                    <Col md={3}>SEM营销</Col>
                    <Col md={3}>活动执行</Col>
                    <Col md={3}>网站制作</Col>
                  </Row>
                </Grid>
              </div>
              <div className={CSS["h4"]}>CLIENTS</div>
              <div>
                <img src="/images/about/logos.png" width="100%" />
              </div>
            </div>
          </div>
		    </QueueAnim>
		  </div>
		);
	}
};

export default HomeView;
