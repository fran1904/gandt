import s1data from '../s1data'

const Section1 = () => {
    return ( 
        <section className="s1">
            <div className="s1-content">
                <p>{s1data[0].name}</p>
                <h2>{s1data[0].heading}</h2>
                <p>{s1data[0].desc}</p>
                <button>{s1data[0].btn_txt}</button>
            </div>
        </section>
     );
}
 
export default Section1;