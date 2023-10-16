import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login';
import Register from '../src/pages/register';
import Halamanutama from '../src/pages/halaman utama';
import Header from './component/headbar';
import MyAccount from './pages/myAccount';
import CookingDictionary from './pages/cookingDictionary';
import RecipeList from './pages/myRecipe';
import "./utils/firebase"


export default function App() {


  return (

    <Router>
      <Header>
      </Header>
      <Routes>
        <Route path="/" element={<Halamanutama />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/cookingDictionary" element={<CookingDictionary />} />
        <Route path="/myRecipe" element={<RecipeList />} />
      </Routes>
    </Router>
  );
}

