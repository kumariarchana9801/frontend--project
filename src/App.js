
import NavBar from './Component/NavBar';
import DashBoard from './Pages/DashBoard';
import TicketPage from './Pages/TicketPage';
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
