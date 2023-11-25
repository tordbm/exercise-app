import './App.css';
import HomePage from './pages/Home';
import AppHeader from './AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import AppFooter from './AppFooter';

function App() {
  return (
    <BrowserRouter basename="/exercise-app">
      <AppHeader/>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <AppFooter/>
    </BrowserRouter>
  );
}

export default App;
