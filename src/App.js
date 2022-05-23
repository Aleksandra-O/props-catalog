import './App.css';
import jsonData from "./mock/etsy";
import Listing from './Listing';

function App() {

  const items=jsonData;

  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
}

export default App;
