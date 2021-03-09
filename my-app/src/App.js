import { Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

//라우팅을 여기서
function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
