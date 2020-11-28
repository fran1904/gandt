import Card from './Card'
import s2data from '../s2data'

const Section2 = () => {
    return ( 
        <section id="homeS2">
            <p className="covid">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>

            <div className="cardloop">
            {s2data.map((s2dataItem, index) => {
            return <Card 
            img_title={s2dataItem.img_title}
            img={s2dataItem.img}
            day={s2dataItem.day}
            time={s2dataItem.time}
            desc={s2dataItem.desc}
            key={index}
           />
            })}
            </div>
        </section>
     );
}
 
export default Section2;