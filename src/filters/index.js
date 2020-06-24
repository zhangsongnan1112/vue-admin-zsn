const seat = msg => {
  if (msg) {
    let str = msg.toString()
    let newArr = str.split(' ').map(ele => {
      console.log(ele.slice(1))
      return ele.charAt(0).toUpperCase() + ele.slice(1)
    })
    return newArr.join(' ')
  }
}

export {seat}
