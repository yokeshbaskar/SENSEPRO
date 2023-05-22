import _ from 'lodash'
import { store } from 'react-notifications-component';

export function showError(ref = '', error = '') {
  let msg = error || 'Oops, something went wrong' ||error.msg

  if (error && error.message && _.isObject(error) 
  // &&    (error.message || _.isObject(error.message))
  ) {
    msg =
      error.message  || msg
  }

  console.log(msg)

  if (!_.isEmpty(store) && !_.isEmpty(msg)) {
    store.addNotification({
      message: msg,
      type: 'danger',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: { duration: 2000 },
      dismissable: { click: true },
    })
  }
}
