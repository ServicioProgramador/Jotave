export const data = [
  {
    id: 1001,
    title: "televisor 43'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=1",
    price: 2500,
    marca: "samsung"
  },
  {
    id: 1002,
    title: "televisor 42'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=2",
    price: 2500,
    marca: "samsung"
  },
  {
    id: 1003,
    title: "televisor 41'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=3",
    price: 2500,
    marca: "samsung"
  },
  {
    id: 1004,
    title: "televisor 40'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=4",
    price: 2500,
    marca: "samsung"
  },
  {
    id: 1005,
    title: "televisor 39'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=5",
    price: 2500,
    marca: "LG"
  },
  {
    id: 1006,
    title: "televisor 38'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=6",
    price: 2500,
    marca: "LG"
  },
  {
    id: 1007,
    title: "televisor 37'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=7",
    price: 2500,
    marca: "LG"
  },
  {
    id: 1008,
    title: "televisor 36'",
    detail: "el mas grande del mercado",
    img: "https://picsum.photos/200/300?random=8",
    price: 2500,
    marca: "Noblex"
  },
];


export default function getItemsSlider() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}


export function getItemsSingleSlider(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {      
      console.log("hola find", item.id, idItem);
      return item.id === parseInt(idItem);
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 1500);
  });
}