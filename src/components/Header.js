import headData from '../headData.json'

const Header = () => {
    return ( 
        <header>
            <h1>{headData[0].site_title_one}<br />
            <span>{headData[0].site_title_two}</span><br />
            {headData[0].site_title_three}</h1>
        </header>
     );
}
 
export default Header;