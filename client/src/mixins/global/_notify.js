import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const config = {
  title: '',
  progressBar: false,
  timeout: 5000
}

export default {
  methods: {
    notify (type, message) {
      if (!message) return

      switch (type) {
        case 'success':
          iziToast.success({
            ...config,
            message
          })
          break
        case 'warning':
          iziToast.warning({
            ...config,
            message
          })
          break
        case 'info':
          iziToast.info({
            ...config,
            message
          })
          break
        case 'error':
          iziToast.error({
            ...config,
            message
          })
          break
        default:
          iziToast.show({
            ...config,
            message
          })
      }
    }
  }
}
