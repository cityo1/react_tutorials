import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Section number="1" style={{ backgroundColor: 'lightgreen' }} />
      <Section number="2" style={{ backgroundColor: 'lightgray' }} />
      <Section number="3" style={{ backgroundColor: 'lightblue' }} />
      <Footer />
    </>
  );
};

export default App;
