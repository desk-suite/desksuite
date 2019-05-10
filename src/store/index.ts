import { Store } from 'vuex';
import { Core } from '../types/Core';

export class State {
  state: Core = new Core();

  mutations = {
    Site(state: Core, payload: typeof Core.Site) {
      state.Site = payload;
    },
  }

  core = {
    namespaced: true,
    state: this.state,
    mutations: this.mutations,
  }
  
  constructor(store: Store<any>) {
    store.registerModule<Core>('Core', this.core)
  }
}

export default State;