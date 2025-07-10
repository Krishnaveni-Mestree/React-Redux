import './App.css';
import PizzaBox from './components/PizzaBox';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksContainer from './components/HooksContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PizzaBox/> */}
        <HooksContainer/>
      </Provider>
    </div>
  );
}

export default App;
