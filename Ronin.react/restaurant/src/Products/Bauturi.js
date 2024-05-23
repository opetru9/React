import colaImg from '../img/bauturi/coca-cola.png'
import fantaImg from '../img/bauturi/Fanta-1L-min-300x300.png'
import dornaImg from '../img/bauturi/dorna-150x150.png'
import coronaImg from '../img/bauturi/korona.png'
import fuxTeaImg from '../img/bauturi/fuze-tea-fuzetea-mango-chamomile.png'
import spriteImg from '../img/bauturi/1-liter-sprite.png'

const bauturiProducts = [
  {
    name: "Coca Cola 0.5l",
    price: 20,
    currency: "MDL",
    img:colaImg,
    id: 0,
    category: "bauturi",
    weight: '0.5l',
  },
  {
    name: "Fanta",
    price: 20,
    currency: "MDL",
    img:fantaImg,
    id: 1,
    category: "bauturi",
    weight: '1l',
  },
  {
    name: "Dorna",
    price: 15,
    currency: "MDL",
    img:dornaImg,
    id: 2,
    category: "bauturi",
    weight: '0.5l',
  },
  {
    name: "Sprite",
    price: 20,
    currency: "MDL",
    img:spriteImg,
    id: 3,
    category: "bauturi",
    weight: '1l',
  },
  {
    name: "FuzTea",
    price: 20,
    currency: "MDL",
    img:fuxTeaImg,
    id: 4,
    category: "bauturi",
    weight: '0.5l',
  },
  {
    name: "Corona",
    price: 50,
    currency: "MDL",
    img:coronaImg,
    id: 5,
    category: "bauturi",
    weight: '0.33l',
  },
];

export default bauturiProducts