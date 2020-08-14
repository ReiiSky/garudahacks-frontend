import { ROLE } from '~/store/user'

export default function ({ store, redirect }) {
  if (store.state.user.role !== ROLE.UMKM) {
    redirect('/dashboard')
  }
}
