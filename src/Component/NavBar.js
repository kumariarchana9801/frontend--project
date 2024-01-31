import { useNavigate } from 'react-router-dom'
import logo from '../images/crm-logo.png'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate('/')}>
        <img src={logo} alt="logo"/>
        </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>➕</div><br></br>
        <div className="icon" onClick={() => navigate('/')}>❮❮</div> 
        <div >
      <button className='login'onClick={()=>navigate('/login')}>Login</button>
        <button className='register'onClick={()=>navigate('/Register')}>Register</button>
      </div>
      </div>
      
      
      </nav>
  )
}

export default NavBar