
function inputRangeEvent() {
  let inputRange = document.querySelector('.priceComponent__inputRange')

  inputRange.addEventListener('change', () => {
    console.log(inputRange.value)
    setInputRangeValue(inputRange.value)
  })
}

function setInputRangeValue(index = 2) {
  let priceRange = [
    { views: '10K', cost: 8 },
    { views: '50K', cost: 12 },
    { views: '100K', cost: 16 },
    { views: '500k', cost: 24 },
    { views: '1M', cost: 36 }
  ]
  let views = document.querySelector('.priceComponent__views')
  let cost = document.querySelector('.priceComponent__cost')
  cost.innerHTML = '$' + priceRange[index].cost
  views.innerHTML = priceRange[index].views
}

setInputRangeValue()
inputRangeEvent()