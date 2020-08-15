export const state = () => ({
  currentTab: null,
})

export const mutations = {
  setCurrentTab(state, tab) {
    state.currentTab = tab
  },
}
