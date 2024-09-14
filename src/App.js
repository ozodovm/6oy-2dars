import SiteLogo from './assets/images/site-logo.svg'
import './App.css';
function App() {
  return (
   <>
   <header className='site-header'>
    <div className='container'>
      <div className='header'>
        <a href='/' className='header-logo-link'>
        <img src={SiteLogo} alt='Site Logo' width={196} height={46}></img>
        </a>
        <ul className='header-list'>
          <li className='header-item'>
            <a href='#' className='header-link'>Home</a>
          </li>
          <li className='header-item'>
            <a href='#' className='header-link'>Service</a>
          </li>
          <li className='header-item'>
            <a href='#' className='header-link'>Portfolio</a>
          </li>
          <li className='header-item'>
            <a href='#' className='header-link'>Blog</a>
          </li>
        </ul>
        <button className='header-contact-btn'>Contact us</button>
      </div>
    </div>
   </header>
   <main></main>
   </>
  );
}

export default App;
