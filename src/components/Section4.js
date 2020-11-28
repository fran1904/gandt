import s4data from '../s4data'
import Card2 from './Card2'

const Section4 = () => {
    return ( 
        <section className="s4">
        {s4data.map((s4dataItem, index) =>
            <Card2 data={s4dataItem} key={index} />
        )}
        </section>
     );
}
 
export default Section4;