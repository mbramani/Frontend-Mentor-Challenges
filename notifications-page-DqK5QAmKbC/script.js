function markAllMsgAsRead() {
  let unReadMsgDiv = document.getElementsByClassName('unread')
  let unReadMsgDivArr = [...unReadMsgDiv]
  unReadMsgDivArr.forEach(div => {
    div.className = div.className.split(' ')[0]
    div.style.removeProperty('background-color')

  });

  let redDot = document.getElementsByClassName('red-dot')
  let redDotArr = [...redDot]
  redDotArr.forEach(span => span.remove())

  let notificationNoEle = document.getElementById("notification-no")
  notificationNoEle.innerText = '0'
}

let notificationNoEle = document.getElementById("notification-no")

document.getElementById("mark-all-as-read").addEventListener("click", markAllMsgAsRead)