import UserStore from './store-user';
import CountStore from './store-count';

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.countStore = new CountStore();
  }
}

export default RootStore;
