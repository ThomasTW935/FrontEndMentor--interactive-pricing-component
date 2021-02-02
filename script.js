let priceRange = [
  { views: '10K', cost: 8 },
  { views: '50K', cost: 12 },
  { views: '100K', cost: 16 },
  { views: '500k', cost: 24 },
  { views: '1M', cost: 36 }
]

let views = document.querySelector('.priceComponent__views')
let cost = document.querySelector('.priceComponent__cost')
let inputRange = document.querySelector('.priceComponent__inputRange')
let initialValue = sessionStorage.index ?? 2
let discountToggle = document.querySelector('.priceComponent__toggle')


init()

function init() {
  setInputRangeValue(initialValue)
  inputRangeEvent()
}

function inputRangeEvent() {
  inputRange.addEventListener('change', () => {
    setInputRangeValue(inputRange.value)
  })
}
function setInputRangeValue(index) {
  cost.innerHTML = '$' + priceRange[index].cost
  views.innerHTML = priceRange[index].views
  inputRange.value = index
  setSessionStorage(index)
}
function setSessionStorage(value) {
  sessionStorage.setItem('index', value)
}


