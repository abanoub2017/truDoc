import axios from "axios";
// State object
const state = {
  NewAppoint: [],
  AllAppointment: []
};
const getters = {
  NewAppoint: state => state.NewAppoint,
  AllAppointment: state => state.AllAppointment
};
// Actions
const actions = {
  async loadNewAppoint({ commit }, payload) {
    const response = await axios.post(
      "http://localhost:3000/appointment",
      payload
    );
    console.log(response.data);
    commit("setNewAppoint", response.data);
  },

  async loadAllAppointment({ commit }) {
    const response = await axios.get("http://localhost:3000/appointment");

    commit("setAllAppointment", response.data);
  }
};
// Mutations
const mutations = {
  setNewAppoint: (state, NewAppoint) => {
    state.NewAppoint = NewAppoint;
  },
  setAllAppointment: (state, AllAppointment) => {
    state.AllAppointment = AllAppointment;
  }
};
export default {
  namespaces: true,
  state,
  getters,
  mutations,
  actions
};
