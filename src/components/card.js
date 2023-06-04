//  export {initialCards};

// const initialCards = [
//  {
//    name: 'Ландыши',
//    link: './images/element__img-cat-7.jpg',
//  },
//  {
//    name: 'Полевые цветы',
//    link: './images/element__img-cat-3.jpg',
//  },
//  {
//    name: 'Незабудки',
//    link: './images/element__img-cat-8.jpg',
//  },
//  {
//    name: 'Розы',
//    link: './images/element__img-cat-4.jpg',
//  },
//  {
//    name: 'Пионы',
//    link: './images/element__img-cat-5.jpg',
//  },
//  {
//    name: 'Ромашки',
//    link: './images/element__img-cat-6.jpg',
//  }
// ]


const catOne = new URL('../images/element__img-cat-7.jpg', import.meta.url);
const catTwo = new URL('../images/element__img-cat-3.jpg', import.meta.url);
const catThree = new URL('../images/element__img-cat-1.jpg', import.meta.url);
const catFour = new URL('../images/element__img-cat-4.jpg', import.meta.url);
const catFive = new URL('../images/element__img-cat-5.jpg', import.meta.url);
const catSix = new URL('../images/element__img-cat-6.jpg', import.meta.url);

const initialCards = [
  { name: 'Ландыши', link: catOne },
  { name: 'Полевые цветы', link: catTwo },
  { name: 'Незабудки', link: catThree },
  { name: 'Розы', link: catFour },
  { name: 'Пионы', link: catFive },
  { name: 'Ромашки', link: catSix }
];

export { initialCards, catOne, catTwo, catThree, catFour, catFive, catSix  };
