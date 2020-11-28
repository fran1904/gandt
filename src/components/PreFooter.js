import data from '../prefooterData'

const PreFooter = () => {
    return ( 
        <section id="s4">
            <div className="left"></div>
            <div className="right">
                <div className="one">
                <h5>{data.address.heading}</h5>
                    <address>{data.address.details}</address>
                    <div>{data.address.tel}</div>
                    <div>{data.address.email}</div>
                </div>
                <div className="two">
                    <h5>{data.hours.heading}</h5>
                    <table>
                        <tbody>
                            <tr>
                            <td>{data.hours.mon.day}</td>
                            <td>{data.hours.mon.time}</td>
                            </tr>
                            <tr>
                            <td>{data.hours.tue.day}</td>
                            <td>{data.hours.tue.time}</td>
                            </tr>
                            <tr>
                            <td>{data.hours.sat.day}</td>
                            <td>{data.hours.sat.time}</td>
                            </tr>
                            <tr>
                            <td>{data.hours.sun.day}</td>
                            <td>{data.hours.sun.time}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
     );
}
 
export default PreFooter;