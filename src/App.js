import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Importing pages 
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Alert from './components/layout/Alert';

// importing from global context

import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'



function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router >
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Alert/>
        <main className='container mx-auto px-3 pb-12'>
      <Routes>
    
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>

        <Route path='/' element={<NotFound />}/>
        <Route path='/*' element={<NotFound />}/>
        
      </Routes>

        </main>
        <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
