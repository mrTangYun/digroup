import { connect } from 'react-redux';
import { fetchZen, clearZen } from './reducer';

import Zen from './Zen';

const mapDispatchtoProps = {
  fetchZen,
  clearZen
};

const mapStateToProps = (state) => ({
  zen: state.zen
});

export default connect(mapStateToProps, mapDispatchtoProps)(Zen);
