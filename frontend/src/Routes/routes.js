import  Quiz from '../Components/Quiz';
import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from '../Components/CreateAccount';
import Dashboard from '../Components/Dashboard';
import Login from '../Components/LogIn';
import BookNow from '../Components/BookNow';
import Main from '../Components/Main';
import BeforeBook from '../Components/BeforeBook';
import BeforeQuiz from '../Components/BeforeQuiz';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard {...props} />} />
      <Route path='/home' element={<Dashboard {...props} />} />
      <Route path='/login' element={<Login {...props} />} />
      <Route path='/createaccount' element={<CreateAccount {...props} />} />
      <Route path='/quiz' element={<Quiz {...props} />} />
      <Route path='/bookNow' element={<BookNow {...props} />} />
      <Route path='/main' element={<Main {...props} />} />
      <Route path='/beforeBook' element={<BeforeBook {...props} />} />
      <Route path='/beforeQuiz' element={<BeforeQuiz {...props} />} />
      </Routes>
   
    


  )
}