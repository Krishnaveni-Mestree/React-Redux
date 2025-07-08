import './App.css';
import PizzaBox from './components/PizzaBox';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PizzaBox/>
      </Provider>
    </div>
  );
}

export default App;
