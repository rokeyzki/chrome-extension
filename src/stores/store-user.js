import { computed } from 'mobx';
import PropTypes from 'prop-types';

class Store {
  constructor(props) {
    this.rootStore = props;
  }

  @computed get name() {
    return `Trump No.${this.rootStore.countStore.count}`;
  }
}

Store.propTypes = {
  rootStore: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Store;
