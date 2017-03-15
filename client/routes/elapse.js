import { injectReducer } from '../store/reducers';

export default (store) => ({
  path: 'elapse',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Elapse = require('../components/Elapse/ElapseContainer').default;
      const reducer = require('../components/Elapse/reducer').default;
      injectReducer(store, { key: 'elapse', reducer });
      cb(null, Elapse);
    });
  }
});
