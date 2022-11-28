const data = [
  {
    id: 1,
    img: "https://i.ibb.co/FVKkRVR/Smart-tv-Kanji-de-60-con-Android2.png",
    title: "titulo 1",
    price: 1000,
    category: "imagen",
    detail: "bla bla bla",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/300?random=2",
    title: "titulo 2",
    price: 2000,
    category: "imagen",
    detail: "ble ble ble",
  },

  {
    id: 3,
    img: "https://picsum.photos/200/300?random=3",
    title: "titulo 3",
    price: 3000,
    category: "audio",
    detail: "bli bli bli",
  },
  {
    id: 4,
    img: "https://picsum.photos/200/300?random=4",
    title: "titulo 4",
    price: 4000,
    category: "audio",
    detail: "blo blo blo",
  },
  {
    id: 5,
    img: "https://picsum.photos/200/300?random=5",
    title: "titulo 5",
    price: 5000,
    category: "informatica",
    detail: "blu blu blu",
  },
  {
    id: 6,
    img: "https://picsum.photos/200/300?random=6",
    title: "titulo 6",
    price: 6000,
    category: "informatica",
    detail: "bla bla bla",
  },
  {
    id: 7,
    img: "https://picsum.photos/200/300?random=7",
    title: "titulo 7",
    price: 7000,
    category: "audio",
    detail: "ble ble ble",
  },

  {
    id: 8,
    img: "https://picsum.photos/200/300?random=8",
    title: "titulo 8",
    price: 8000,
    category: "imagen",
    detail: "bli bli bli",
  },
  {
    id: 9,
    img: "https://picsum.photos/200/300?random=9",
    title: "titulo 9",
    price: 9000,
    category: "imagen",
    detail: "blo blo blo",
  },
  {
    id: 10,
    img: "https://picsum.photos/200/300?random=10",
    title: "titulo 10",
    price: 10000,
    category: "imagen",
    detail: "blu blu blu",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getItemsSingle(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem);
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 2000);
  });
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.category === cat;
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 2000);
  });
}
