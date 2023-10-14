import './Home.css';


const Home = () => {
    return (
        <div className='home-page'>
            <div className='home-container'>
                <h1 className='home-title'>Conocé  todas las empresas <br /> asociadas al <span style={{color:"#3164c2"}}>polo</span> IT.</h1>
                <button className='home-btn'>Ver las empresas</button>
            </div>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1309150586210865165/1K9ybwFH_400x400.jpg" alt="" />
            </div>
        </div>
    );
}

export default Home;
