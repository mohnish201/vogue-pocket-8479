import Main_Routes from './All_Routes/Main_Routes';
import './App.css';
import { LoanCard } from './Components/LoanCard';

import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">

      <Navbar/>
      <Main_Routes/>
     <LoanCard/>
    </div>
  );
}

export default App;
