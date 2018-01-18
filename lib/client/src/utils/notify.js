import iziToast from '@/../modules/izitoast'
import '@/../modules/izitoast/iziToast.css'

const config = {
  title: '',
  progressBar: false,
  timeout: 2000,
  position: 'topCenter',
  color: '#fff'
}

let lastMessage = ''

export default (message, overwriteConfig) => {
  if (!message || message === lastMessage) return

  lastMessage = message
  if (!overwriteConfig.static) setTimeout(_ => lastMessage = null, 2000)

  iziToast.show({
    ...config,
    message,
    ...overwriteConfig
  })
}
