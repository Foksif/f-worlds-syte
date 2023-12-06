import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { InfoPage } from './pages/Info'
import { NotFoundPage } from './pages/NotFound'
import { RulesPage } from './pages/Rules'
import { DonatePage } from './pages/Donate'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Header /> <HomePage /> <Footer /></>} />
        <Route path="/info" element={<><Header /><InfoPage /> <Footer /></>} />
        <Route path="/rules" element={<><Header /><RulesPage /> <Footer /></>} />
        <Route path="/donate" element={<><Header /><DonatePage /> <Footer /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
