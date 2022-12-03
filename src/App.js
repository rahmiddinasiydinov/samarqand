import './App.scss';
import { Home } from './pages/Home.jsx'
import { LanguageProvider } from './Services/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </div>
  );
}

export default App;
