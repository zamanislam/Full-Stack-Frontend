import "../styles/Image1.css";

const HomeImage1 = () => {
  const container = [
    {
      image:
        "https://i.postimg.cc/ZRKbRLck/Screenshot-Capture-2024-12-03-10-56-14.png",
      productName: "Teele 18 Wide ",
      price: "$72.00",
      originalPrice: "$192.00",
    },
    {
      image:
        "https://i.postimg.cc/G3fLLGTN/Screenshot-Capture-2024-12-03-10-59-04.png",
      productName: "Kneeland Open ",
      price: "$184.00",
      originalPrice: "$835.00",
    },
    {
      image:
        "https://i.postimg.cc/vmGMqvC1/Screenshot-Capture-2024-12-03-10-59-23.png",
      productName: "Simmerman Table",
      price: "$134.99",
      originalPrice: "$107.00",
    },
    {
      image:
        "https://i.postimg.cc/fLrNbQyX/Screenshot-Capture-2024-12-03-10-59-49.png",
      productName: "Kaden Handmade",
      price: "$46.00",
      originalPrice: "$96.00",
    },
    {
      image:
        "https://i.postimg.cc/7P5CnxgF/Screenshot-Capture-2024-12-03-11-00-21.png",
      productName: "Kaden Handmade ",
      price: "$46.00",
      originalPrice: "$96.00",
    },
    {
      image:
        "https://i.postimg.cc/25H6nJ3j/Screenshot-Capture-2024-12-03-11-01-15.png",
      productName: "Laureal Uphostered ",
      price: "$229.00",
      originalPrice: "$114.00",
    },
    {
            image:
              "https://i.postimg.cc/sxWgdgm1/Screenshot-Capture-2024-12-03-11-03-04.png",
            productName: "Rhainnon Stands",
            price: "$246.00",
            originalPrice: "$669.00",
          },
   
    
  ];
  return (
    <div>
    <h1>living room level-up – for less</h1>
    <div id="p1">
      {container.map((ele, index) => (
        <div id="parent" key={index}>
          <img src={ele.image} alt="image" />

          <h2 className="text-lg font-bold truncate">{ele.productName}</h2>

          <p className="text-lg font-semibold">{ele.price}</p>
        </div>
      ))}
    </div>
    <div id="image2">
        <img src="https://i.postimg.cc/RF2nHFZL/Screenshot-Capture-2024-12-03-19-11-14.png" alt="logo"/>
    </div>
    </div>
  );
  
};
export default HomeImage1;


// {
//     image:
//       "https://i.postimg.cc/sxWgdgm1/Screenshot-Capture-2024-12-03-11-03-04.png",
//     productName: "Rhainnon Stands",
//     price: "$246.00",
//     originalPrice: "$669.00",
//   },