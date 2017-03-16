import React, { Component } from 'react';
import DuckImage from './assets/Duck.jpg';
import './HomeView.scss';
import Card from '../Card/index';
export class HomeView extends Component {
	componentDidMount() {
		
	}
	render() {
		const array = [
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/narita_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/GUMPLAY_partyweb_161213_1280.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2013/10/yaeno-sakura_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2013/10/eco-dra_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2017/02/Pweb_E.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2017/01/640x640_1.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2017/01/thum.png',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/12/PPAP_thumbnail.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/12/GLW_main_640x640.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/mian_640x640.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/10/emoji_640X640.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/08/unlimited-stadium_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/07/androp-hana_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/04/uno-social-barber_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/04/miraikan-exhibition_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/04/79-percent-work-clock_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/04/super-presentation_thumb-1.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/04/ut-picks_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/03/true-fan-juke-box_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/01/prius-id_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/12/suguowa_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/12/kumakuro_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/10/fcv-plus_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/10/alma-music-box_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/08/shuchu-regain_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/08/the-extreme-menuet_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/08/rodriguez-votez_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/06/shizu-car_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/06/what-watch_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/05/thumbnail_yokokuhan.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/04/the-diary-of-ochibi_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/04/mixed-reality-live_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/03/kao-tv_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/03/the-other-mother_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/02/the-luxury-test_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2015/01/lohaco_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/12/prius-santa_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/12/gum-cube_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/10/life-color-window_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/10/finger-bootcamp_thumb-3.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/11/thumb-16.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/09/en-route_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/08/SHARE_BG_161214thumbB.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/08/virgin-music_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/07/androp-shout_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/06/haruhi-hunting_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/05/bannnnners_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/04/spoon_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/04/inner-music_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/03/news-japan_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2016/12/mind-wall_thumb.jpg',
			'https://d1yvfejcy02lz3.cloudfront.net/wp/wp-content/uploads/2014/03/drive-go-round_thumb.jpg',
		];
		return (
		  <div>
		    <h4>Welcome!</h4>
		    <div className='container'>
			    <div className='row'>
			    {
			    	array.map((item,index) => {
			    		return (<Card
				    		key={index}
					    	style={{
					    		width: '50%'
					    	}}
					    	show={true}
					    	meta="SUNSTAR"
					    	title="G•U•M PLAY"
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
