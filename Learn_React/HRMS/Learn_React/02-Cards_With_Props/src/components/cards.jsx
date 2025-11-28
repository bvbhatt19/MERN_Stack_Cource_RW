import moduleCss from "./style.module.css";

const Cards = (props) => {
  const age = true;

  function handleClick() {
    if (age) {
      alert("You Can Purchase!");
    } else {
      alert("Out Of Stock!");
    }
  }
  return (
    <div className="main">
      {props.items.map((item, index) => (
        <div className="main-item" key={index}>
          <div className="Image">
            <img src={item.image} alt={item.name} />
          </div>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p
            className={
              item.rating >= 7
                ? moduleCss["rating-green"]
                : item.rating >= 5
                ? moduleCss.rating_yellow
                : moduleCss.rating_orange
            }
          >
            Rating: {item.rating}
          </p>
          <button className="btn" onClick={handleClick}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cards;
