import React from 'react';
import Header from '../../Header';
import QueueAnim from 'rc-queue-anim';
import Home from '../../works/';

export const CoreLayout = ({ location, children }) => {
  const key = location.pathname;
  const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];
  const isWorkListpage = keys[0] === 'home' || keys[0] === 'works';
  const containerStyle = isWorkListpage ? 'container-fluid' : 'container';
  return (
    <div className={containerStyle}>
      <Header isWorkListpage={isWorkListpage} />
      <QueueAnim
        duration={1500}
        delay={500}
        type='top'
      >
        <div key='childrenOuter'>
          {children || <Home />}
        </div>
      </QueueAnim>
    </div>
  );
};

CoreLayout.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};

export default CoreLayout;
