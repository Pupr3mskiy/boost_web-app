import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { HomePage } from '@/pages/home/HomePage';
import { PlaceholderPage } from '@/pages/PlaceholderPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<PlaceholderPage title="Catalog" />} />
        <Route path="/service/:id" element={<PlaceholderPage title="Service" />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms" />} />
        <Route path="*" element={<PlaceholderPage title="404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}