import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todos from './Todos';
import Countries from './Countries';
import Productsview from './features/products/Productsview';
import AddProduct from './features/products/AddProduct';
// import Countries from './services/Countries';
// import Todos from './features/todoList/Todos';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todos /> */}
      {/* <Countries/> */}
      {/* <Countries />s */}
      <AddProduct />
      <Productsview />
    </div>
  );
}

export default App;
