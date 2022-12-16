export const data = [
  {
    id: 1001,
    title: "Smart Tv Noblex 55´ DK55X7100 UHD 4K Primera",
    detail: " Capacidad 245L Eficiencia energética: B Voltaje: 220v Exterior fabricado en lamina de acero prepintado con protección vinílica Interior fabricada en lamina de acero galvanizada Contrapuerta PsRf Aislación térmica por inyección de poliuretano de alta densidad Burlete magnético que evita la pérdida de frio y condensación con propiedades anti-hongos Canasta removible. Serpentina de aluminio. Producto totalmente nuevo. Medidas: 85 cm de Ancho x 65 cm de Profundidad x 85cm de Altura",
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
      
      return item.id === parseInt(idItem);
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 1500);
  });
}