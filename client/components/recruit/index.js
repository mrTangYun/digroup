import React, { Component } from 'react';
import Item from './item';
import QueueAnim from 'rc-queue-anim';
import PageTitle from '../PageTitle';
import CSS from '../css.scss';

const jobs = [
	{
		title: 'SENIOR ACCOUNT DIRECTOR',
		jobDescription: `部门业务规划、业务管理，领导团队达成目标。 带领团队为客户提供专业性的公关策略，建设并维护健康、互信的客户关系。<br />
			负责团队建设及日常工作管理，确保高标准的客户服务质量。 为团队成员提供业务培训与指导以保证团队专业能力的不断提高。<br />
			适应出差，有一定的抗压能力。`,
		competencyRequirements: `本科以上学历，五年以上4A广告公司从业背景，三年以上广告公司同等相关职位工作经历优先。 具有广泛的社会关系和客户资源，<br />
			有汽车、互联网知名品牌线上线下活动类全案经验。 出色的创意想法，优秀的写作能力和提案能力，有效组织项目提案与管理。<br /> 
			有效的领导才能，组织及协调能力，市场传播策划能力及现场控制能力。 <br />
			优秀的人际沟通能力、客户沟通技巧以及丰富的团队管理经验。 具有强烈的工作责任心和团队合作精神，能够承担较大的工作压力及出差。 `
	},
	{
		title: 'ART DIRECTOR',
		jobDescription: `能够独立带领创意团队完成项目的创意发想到成品交付的全流程。 <br />
			有强力的idea产出效率。 有扎实的美术基础。 互联网网感强，懂social media的传播。`,
		competencyRequirements: `3－5年以上传统广告或互动广告公司美术经验，有大型品牌服务经验。 <br />
			熟练掌握PS、AI或视频剪辑、摄影、3D、插画，风格多变，具有自己的想法。 <br />
			有优异的创意能力和创意管理能力。 有带领设计团队的经验，能独立带领成员完成项目创意发想、执行、以及后期的跟进。 <br />
			有网感，对新媒体有认知和理解，熟悉互动领域，有策略能力。 有情趣和审美、有丰富生活阅历、有大胆的想法。 `
	},
	{
		title: 'SENIOR DESIGN',
		jobDescription: `能独立作业，根据客户需求完成视觉设计。（包括平面海报、长图文、GIF、APP、H5页面设计等） 有强力的idea产出效率。 <br />
			有扎实的美术基础。 互联网网感强，懂social media的传播。`,
		competencyRequirements: `2年以上广告公司经验，有知名品牌服务经验者优先。 美术基本功扎实，擅长PS，AI，GIF动画等。 执行力强，头脑灵活，有创意能力。 <br />
			良好的沟通能力和敏锐的洞察能力。 有审美，乐于接受新鲜事物，有团队协作精神，工作责任心强，积极且认真。 `
	},
	{
		title: 'CD',
		jobDescription: `熟练操作各种办公软件，独立完成各类文案撰写。 有强力的idea产出效率。<br /> 
			与美术指导一起共同确定创意的文字及设计编排。 互联网网感强，懂social media的传播。`,
		competencyRequirements: `3－5年以上广告创意经验，有知名品牌服务经验者优先。 具有一定策略思考性，文字基础扎实，擅长创意，并乐于研究接受新鲜事物。 <br />
			文字基本功好，有各种类型文案撰写能力，能适应多种类型的创意方式。 具有一定的带领新人能力，工作责任心强，积极、踏实、认真。  <br />
			精通PPT/KEYNOTE者优先。 `
	},
	{
		title: 'NEW MEDIA',
		jobDescription: `负责产出有趣、有效的社交创意。负责策划及方案的撰写与修改。社会化媒体日常运营的文案撰写。`,
		competencyRequirements: `有网感，兴趣广泛，对热门话题和新闻热点较敏感。 有2年以上新媒体（社会化媒体）创意文案经验，有自媒体经验者优先。 <br />
			有一定的策略思考能力，能独立撰写social 方案。 较强的执行能力，可独立撰写新媒体日常文案。  `
	}
];
export class HomeView extends Component {
	render() {
		return (
		  <div className={CSS["recruit"]}>
		    <PageTitle title='JOIN US TO EXPERIMENT & MAKE.' />
		    <QueueAnim
	  			key={"bannerAnimate"}
	  			animConfig={[
		            { opacity: [1, 0], translateY: [0, 20] },
		            { opacity: [1, 0], translateY: [0, -20] }
		        ]}
	  		>
			    <div className={CSS["banner"]} key={"banner"}>
					<img src="/images/recruit/banner.jpg" width="100%" />
			    </div>
		    </QueueAnim>
		    <div className={CSS["my-contains"]}  key={"my-contains"}>
		    	<div className={CSS["h4"]}>在DEEPLY IMPRESSIVE，我们正在招聘以下人员。</div>
			    <div className={CSS["h4desc"]}>简历请投放至：<a href="mailto:hr@digroup.com.cn" >hr@digroup.com.cn</a></div>
				{
					jobs.map((item, index) => {
						return (<Item key={index} {...item} />)
					})
				}
		    </div>
		  </div>
		);
	}
};

export default HomeView;
