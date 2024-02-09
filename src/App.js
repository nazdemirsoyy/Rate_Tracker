import './App.css';
import Tracker from './components/Tracker'; 
import CurrencyCard from './components/CurrencyCard';
import RateTable from './components/RateTable';
import Footer from './components/Footer';

function App() {

  const currencies = [
    { currency: 'Euro', rate: '0.928792 EUR', change: '+0.0099', changePercentage: '1.08' },
    { currency: 'British Pound', rate: '0.793299 GBP', change: '+0.0095', changePercentage: '1.22' },
    { currency: 'Euro', rate: '0.928792 EUR', change: '+0.0099', changePercentage: '1.08' },
    { currency: 'British Pound', rate: '0.793299 GBP', change: '+0.0095', changePercentage: '1.22' },
    { currency: 'Euro', rate: '0.928792 EUR', change: '+0.0099', changePercentage: '1.08' },
    { currency: 'British Pound', rate: '0.793299 GBP', change: '+0.0095', changePercentage: '1.22' },
    { currency: 'Euro', rate: '0.928792 EUR', change: '+0.0099', changePercentage: '1.08' },
    { currency: 'British Pound', rate: '0.793299 GBP', change: '+0.0095', changePercentage: '1.22' },
    ];


    const rates = [
      { pair: 'EUR / USD', value: '1.07724', change: -0.00076 },
      { pair: 'GBP / EUR', value: '1.17044', change: +0.00088 },
      { pair: 'EUR / USD', value: '1.07724', change: -0.00076 },
      { pair: 'GBP / EUR', value: '1.17044', change: +0.00088 },
      { pair: 'EUR / USD', value: '1.07724', change: -0.00076 },
      { pair: 'GBP / EUR', value: '1.17044', change: -0.00088 },
      { pair: 'EUR / USD', value: '1.07724', change: +0.00076 },
      { pair: 'GBP / EUR', value: '1.17044', change: -0.00088 },
    ];

  return (
    <div className="App">
      <header className="App-header">
      {/* <p>Welcome</p> */}
      </header>
      <main>
        <Tracker />
        <div className="currency-cards-container">
          {currencies.map((currencyData, index) => (
            <CurrencyCard
              key={index}
              currency={currencyData.currency}
              rate={currencyData.rate}
              change={currencyData.change}
              changePercentage={currencyData.changePercentage}
            />
          ))}
        </div>
        <RateTable rates={rates} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
