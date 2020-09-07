const cars = [
  { name: 'BMW M3', price: 43000, img: 'image/bmw_m3.jpg' },
  { name: 'Audi Q8', price: 87000, img: 'image/audi_q8.jpg' },
  { name: 'Mercedes AMG GT', price: 145000, img: 'image/gt_coupe.jpg' }
]

function createCar(car) {
  return `
    <div class="card">
        <div class="card-img">
            <img
              src="${car.img}"
              alt="${car.name}">
        </div>
        <h3>${car.name}</h3>
        <p>${car.price} $</p>
    </div>
  `
}


const templates = cars.map(car => createCar(car))
const html = templates.join(' ')

document.querySelector('.list').innerHTML = html