import { DateUtil } from "./DateUtil"

export const HelperUtils = {
    countdown
}

function countdown(dateTime: string) {
  const diff = DateUtil.diff(DateUtil.now(), DateUtil.parse(dateTime), 'second')
  const days = Math.floor(diff / (60 * 60 * 24))
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((diff % (60 * 60)) / 60)
  const seconds = diff % 60
  if (days > 0) {
    return days + ' days ' + (hours > 0 ? hours + ' hrs ago' : 'ago')
  } else if (hours > 0) {
    return hours + ' hrs ' + (minutes > 0 ? minutes + ' mins ago' : 'ago')
  } else if (minutes > 0) {
    return minutes + ' mins ' + (seconds > 0 ? seconds + ' secs ago' : 'ago')
  } else {
    return seconds + ' secs ago'
  }
}