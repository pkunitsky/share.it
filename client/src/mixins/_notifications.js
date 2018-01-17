import VueNotifications from 'vue-notifications'

export default {
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      message: ""
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      message: ""
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      message: ""
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      message: ""
    }
  }
}
