import "../styles/Image2.css";

const HomeImage2 = () => {
  const container = [
    "https://i.postimg.cc/SskRwvxC/Screenshot-Capture-2024-12-03-20-19-25.png",
    "https://i.postimg.cc/CMv5QJTn/Screenshot-Capture-2024-12-03-20-21-03.png",
    "https://i.postimg.cc/RZt0qB3w/Screenshot-Capture-2024-12-03-20-21-24.png",
    "https://i.postimg.cc/SK7N7ffs/Screenshot-Capture-2024-12-03-20-22-43.png",
  ];
  return (
    <div>
      <h1>cozy-season essentials</h1>
      <div id="parent1">
        {container.map((ele, index) => (
          <div id="p2" key={index}>
            <img src={ele} alt="image" />
          </div>
        ))}
      </div>
      <div id="image2">
        <img src="https://i.postimg.cc/26kv46vs/Screenshot-Capture-2024-12-03-20-53-59.png" alt="logo"/>
    </div>
    </div>
  );
};
export default HomeImage2;
