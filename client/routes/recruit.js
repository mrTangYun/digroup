export default (store) => ({
  path: 'recruit',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/recruit/').default;
      cb(null, Route);
    });
  }
});
