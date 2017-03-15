import { injectReducer } from '../store/reducers';

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('../components/Counter/CounterContainer').default;
      const reducer = require('../components/Counter/reducer').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer });

      /*  Return getComponent   */
      cb(null, Counter);

    /* Webpack named bundle   */
    }, 'counter');
  }
});
