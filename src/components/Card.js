const Card = (props) => {
    console.log(Card);
    return (
      <div>
        <figure style={{ background: `url(${props.img}) center / cover no-repeat`}}>
    <h3 className="img-title">{props.img_title}</h3>
        </figure>
        <h4 className="day">{props.day}</h4>
        <h4 className="time">{props.time}</h4>
        <p className="desc">{props.desc}</p>
      </div>
    );
}
 
export default Card;

