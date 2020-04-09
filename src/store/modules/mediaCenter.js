import axios from "axios";
// State object
const state = {
  mediaCenter: [],
  mediaCenterName: []
};
const getters = {
  allMediaCenter: state => state.mediaCenter,
  allMediaCenterName: state => state.mediaCenterName
};
// Actions
const actions = {
  async loadMediaCenter({ commit }) {
    const response = await axios.get("http://localhost:3000/medical_centers");

    commit("setMediaCenter", response.data);
  },
  async loadMediaCenterName({ commit }) {
    const response = await axios.get("http://localhost:3000/media_name");

    commit("setMediaCenterName", response.data);
  }
};
// Mutations
const mutations = {
  setMediaCenter: (state, mediaCenter) => {
    state.mediaCenter = mediaCenter;
  },
  setMediaCenterName: (state, mediaCenterName) => {
    state.mediaCenterName = mediaCenterName;
  }
};
export default {
  namespaces: true,
  state,
  getters,
  mutations,
  actions
};
