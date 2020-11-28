import s1data from '../s1data'

const Section3 = () => {
    return ( 
        <section className="s3">
            <div className="s3-content">
                <p>{s1data[1].name}</p>
                <h2>{s1data[1].heading}</h2>
                <p>{s1data[1].desc}</p>
                <button>{s1data[1].btn_txt}</button>
            </div>
        </section>
     );
}
 
export default Section3;