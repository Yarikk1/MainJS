// №1
let name = 'Maxima'
console.log(`Привет, ${name}`)

// №2
let h = 30
let d = 50
let result = (d / 2) * h
console.log(result)

// №3
let n = Math.floor(Math.random() * (68 - 11)) + 11
console.log(n)

//№4
let n1 = Math.floor(Math.random() * 256)
let n2 = Math.floor(Math.random() * 256)
let n3 = Math.floor(Math.random() * 256)
let n4 = Math.random().toFixed(2)

let rgba = `rgba(${n1}, ${n2}, ${n3}, ${n4})`
console.log(rgba)

//№5
let time = Math.floor(Math.random() * (2592000000 - 86400000)) + 86400000
let day = time / 1000 / 60 / 60 / 24
let hour = time / 1000 / 60 / 60 - Math.floor(day) * 24
let min = (hour - Math.floor(hour)) * 60
let sec = (min - Math.floor(min)) * 60
let ms = (sec - Math.floor(sec)) * 1000
console.log(
  `${time} мс - ${Math.floor(day)} д ${Math.floor(hour)} ч ${Math.floor(
    min
  )} мин ${Math.floor(sec)} сек ${Math.floor(ms)} мс`
)
