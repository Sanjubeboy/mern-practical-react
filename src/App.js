import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Contact from './Components/Contact';
import Trips from './Components/Trips';
import Login from './Components/Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import Trip from './Components/Trip';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='trips' element={<Trips/>}>
          <Route path=':id' element={<Trip/>}></Route>
        </Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
