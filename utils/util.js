const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const debounce=(func, wait)=>{//防抖
 
  let timeout;
  let delay = wait || 500;
  return function () {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  }
}

const debounce2=()=>{//防抖
 
console.log("test util")
}
module.exports = {
  formatTime,
  debounce,
  debounce2
}
