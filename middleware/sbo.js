import { ROLES } from '~/types/roles'

export default function ({ store, redirect }) {
  if (store.state.user.role !== ROLES.SBO) {
    redirect('/dashboard')
  }
}
