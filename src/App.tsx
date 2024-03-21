// import { Container, Button } from 'react-bootstrap';
import ResponsiveNavbar from './components/ResponsiveNavBar';
import Footer from './components/Footer';

import './App.scss';

export default function App() {

  return (
<div className="d-flex flex-column min-vh-100 bg-secondary">
  <ResponsiveNavbar />
  <Footer />
</div>
  )
};