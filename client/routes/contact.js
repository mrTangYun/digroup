export default (store) => ({
  path: 'contact',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/contact/').default;
      cb(null, Route);
    });
  }
});
