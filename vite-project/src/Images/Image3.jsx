import "../styles/Image3.css";
const HomeImage3 = () => {
  const container = [
    {
      image:
        "https://i.postimg.cc/gJhTCgry/Screenshot-Capture-2024-12-03-21-01-17.png",
      title: "outdoor decor from $25",
      des: "Make your home Merry",
    },
    {
      image:
        "https://i.postimg.cc/15sjdcS6/Screenshot-Capture-2024-12-03-21-03-50.png",
      title: "holiday pillows fron $15",
      des: "Seasonal Cheer",
    },
    {
      image:
        "https://i.postimg.cc/fLY82kgB/Screenshot-Capture-2024-12-03-21-04-11.png",
      title: "stockings under $50",
      des: "Picks for family",
    },
    {
      image:
        "https://i.postimg.cc/fWjHYtdb/Screenshot-Capture-2024-12-03-21-04-25.png",
      title: "tree skirts from $20",
      des: "Spruce things up",
    },
  ];
  return (
    <div>
    <div>
      <h1>make it extra merry</h1>
      <div id="p3">
        {container.map((ele, index) => (
          <div id="parent3" key={index}>
            <img src={ele.image} alt="image" />

            <h2 className="text-lg font-bold truncate pl-3">{ele.title}</h2>

            <p className="text-lg pl-3">{ele.des}</p>
          </div>
        ))}
      </div>
      <div id="image2">
        <img
          src="https://i.postimg.cc/cCcyjdJG/Screenshot-Capture-2024-12-03-22-10-31.png"
          alt="logo"
        />
      </div>
    </div>
    
    </div>
  );
};
export default HomeImage3;
