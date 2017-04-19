export default (store) => ({
  path: 'works',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/works/').default;
      cb(null, Route);
    });
  }
});
