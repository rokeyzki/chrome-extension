import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Child from './child';

@inject('countStore')
@observer
class MobxPageDemo extends Component {
  static propTypes = {
    countStore: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  render() {
    const { countStore } = this.props;
    return (
      <div>
        <div>Counter: {countStore.count}</div>
        <div>
          <button onClick={countStore.increment}>增加</button>
          <button onClick={countStore.decrement}>减少</button>
        </div>
        <div>Status: {`${countStore.status}`}</div>
        <div>
          <button onClick={countStore.updateStatus}>状态</button>
        </div>
        {
          countStore && countStore.child && countStore.child.display ?
            <Child />
            : <button onClick={countStore.editChild} style={{ marginTop: 20 }}>编辑 Child</button>
        }
      </div>
    );
  }
}

export default MobxPageDemo;
