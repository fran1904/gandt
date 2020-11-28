const Card2 = (props) => {
    return ( 
        <div className="card2-content">
            <img src={props.data.img} style={{ width: "200px", height: "300px" }} alt="drink"/>
            <p className="drink-desc">{props.data.drink_desc}</p>
            <small className="newspaper">{props.data.newspaper}</small>
        </div>
     );
}
 
export default Card2;