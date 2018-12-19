import { observable, autorun, reaction, computed, action, when } from 'mobx';
// import PropTypes from 'prop-types';

class Store {
  @observable count = 0;
  @observable status = false;
  @observable child = {
    display: false,
    data: {
      enable: 1,
      name: '这是一个名字',
      status: 2,
      time: [],
    },
  };

  constructor() {
    // when 触发后响应器就会被清理
    when(
      () => (this.count !== 0 && this.count % 3 === 0),
      () => console.warn(`when | ${this.count} 能够被 3 整除`),
    );

    // autorun 所提供的函数总是立即被触发
    this.handler = autorun(() => {
      console.warn('autorun | count', this.count);
      if (this.count >= 5) this.handler();
    });

    // reaction
    reaction(
      () => this.count + this.double,
      result => console.warn('reaction | count + double', result),
      {
        delay: 500,
      },
    );
  }

  @computed get double() {
    const val = this.count * 2;
    console.log('computed | double', val);
    return val;
  }

  @action
  increment = () => {
    console.clear();
    console.log('action increment | old count', this.count);
    this.count += 1;
    console.log('action increment | new count', this.count);
  }

  @action.bound
  decrement() {
    console.clear();
    console.log('action decrement | old count', this.count);
    this.count -= 1;
    console.log('action decrement | new count', this.count);
  }

  @action
  updateStatus = async () => {
    console.clear();
    console.log('async action updateStatus | old status', this.status);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    this.status = !this.status;
    console.log('async action updateStatus | new status', this.status);
  }

  // child
  @action
  editChild = () => {
    this.child.display = true;
  }

  @action
  saveChild = (values) => {
    console.log('values', values);
    this.child.display = false;
    this.child.data = values;
  }

  @action
  cancelChild = () => {
    this.child.display = false;
  }
}

// Store.propTypes = {
//   rootStore: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default Store;
