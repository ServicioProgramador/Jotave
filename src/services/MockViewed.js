export const data = [
    {
      id: 1001,
      title: "Heladera 1",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=1",
      price: 2500,
      marca: "Samsung"
    },
    {
      id: 1002,
      title: "Heladera 2",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=2",
      price: 2500,
      marca: "Samsung"
    },
    {
      id: 1003,
      title: "tHeladera 3",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=3",
      price: 2500,
      marca: "Whirlpool"
    },
    {
      id: 1004,
      title: "Heladera 4",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=4",
      price: 2500,
      marca: "Samsung"
    },
    {
      id: 1005,
      title: "Heladera 5",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=5",
      price: 2500,
      marca: "LG"
    },
    {
      id: 1006,
      title: "Heladera 6",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=6",
      price: 2500,
      marca: "Whirlpool"
    },
    {
      id: 1007,
      title: "Heladera 7",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=7",
      price: 2500,
      marca: "LG"
    },
    {
      id: 1008,
      title: "Heladera 8",
      detail: "el mas grande del mercado",
      img: "https://picsum.photos/200/300?random=8",
      price: 2500,
      marca: "Whirlpool"
    },
  ];
  
  
  export default function getItemsSliderDos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  }
  
  
  export function getItemsSingleSliderDos(idItem) {
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