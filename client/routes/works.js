const WorkItem = (store) => ({
  path: '/works/:projectId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/works/item').default;
      cb(null, Route);
    });
  }
});

export { WorkItem };

export default (store) => ({
  path: '/works',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('../components/works/').default;
      cb(null, Route);
    });
  }
});
