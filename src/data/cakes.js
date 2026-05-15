export const cakes = [
  {
    id: 'cake-1',
    name: 'Տորթ 1',
    description: 'Նուրբ, գեղեցիկ և համեղ տորթ՝ հատուկ առիթների համար։',
    image: '/images/cake-1.svg',
    pricePerPortion: 1000,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 'cake-2',
    name: 'Վանիլային երազ',
    description: 'Թեթև վանիլային տորթ՝ փափուկ կրեմով և նուրբ ձևավորմամբ։',
    image: '/images/cake-2.svg',
    pricePerPortion: 1100,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 'cake-3',
    name: 'Շոկոլադե ուրախություն',
    description: 'Հագեցած շոկոլադե տորթ՝ ընտանեկան և տոնական պահերի համար։',
    image: '/images/cake-3.svg',
    pricePerPortion: 1200,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 'cake-4',
    name: 'Մրգային մեղեդի',
    description: 'Թարմ մրգային համադրությամբ տորթ՝ պայծառ և գունեղ տեսքով։',
    image: '/images/cake-4.svg',
    pricePerPortion: 1150,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 'cake-5',
    name: 'Կարամելային քնքշանք',
    description: 'Քաղցր կարամելային շերտերով տորթ՝ ջերմ և հաճելի համով։',
    image: '/images/cake-5.svg',
    pricePerPortion: 1250,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 'cake-6',
    name: 'Հատապտղային հմայք',
    description: 'Նուրբ հատապտղային տորթ՝ էլեգանտ ձևավորմամբ և թեթև համով։',
    image: '/images/cake-6.svg',
    pricePerPortion: 1300,
    minQuantity: 10,
    maxQuantity: 30,
  },
]

export function calculateCakePrice(cake, quantity) {
  return quantity * cake.pricePerPortion
}
