let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}
const Reset = () =>{
    count = 0
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}