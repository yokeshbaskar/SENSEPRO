import _ from 'lodash'
import { store } from 'react-notifications-component';

export function showSuccess(message = '') {
  if (!_.isEmpty(store) && !_.isEmpty(message)) {
    store.addNotification({
      message,
      type: 'success',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: { duration: 2000 },
      dismissable: { click: true },
    })
  }
}
