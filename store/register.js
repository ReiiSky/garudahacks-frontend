export const state = () => ({
  selectedRole: null,
})

export const mutations = {
  setSelectedRole(state, role) {
    state.selectedRole = role
  },
}
