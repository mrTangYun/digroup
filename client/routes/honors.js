const HonorItem = (store) => ({
  path: '/honor/:projectId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/honor/item').default;
      cb(null, Route);
    });
  }
});

export { HonorItem };

export default (store) => ({
  path: '/honor',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/honor/').default;
      cb(null, Route);
    });
  }
});
