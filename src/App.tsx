import './App.css';
import HomePage from './pages/Home';
import AppHeader from './AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter basename="/exercise-app/home">
      <AppHeader/>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
