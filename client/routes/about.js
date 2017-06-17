export default (store) => ({
  path: 'about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/about/').default;
      cb(null, Route);
    });
  }
});
