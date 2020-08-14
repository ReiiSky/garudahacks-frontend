import Vue from 'vue'

Vue.prototype.$currency = new Intl.NumberFormat('en-ID', {
  style: 'currency',
  currency: 'IDR',
})

Vue.prototype.$currency.deformat = (data) => {
  if (typeof data !== 'number') {
    return parseInt(data.split(/ /)[0].replace(/[^.\d]/g, ''))
  }
  return null
}
