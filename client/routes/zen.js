import { injectReducer } from '../store/reducers';

export default (store) => ({
  path: 'zen',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Zen = require('../components/Zen/ZenContainer').default;
      const reducer = require('../components/Zen/reducer').default;
      injectReducer(store, { key: 'zen', reducer });
      cb(null, Zen);
    });
  }
});
