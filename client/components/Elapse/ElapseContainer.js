import { connect } from 'react-redux';
import { plus } from './reducer';

import Elapse from './Elapse';

const mapDispatchtoProps = {
  plus
};

const mapStateToProps = (state) => ({
  elapse: state.elapse
});

export default connect(mapStateToProps, mapDispatchtoProps)(Elapse);
