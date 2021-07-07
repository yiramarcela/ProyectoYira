import MyComponent from "./components/MyComponent";
//redux
import { Provider } from 'react-redux'
import generateStore from "./reduxDucks/store";
import DuckComponent from "./components/DuckComponent";
//llamado del store del redux principal
// import store from "./redux/store";

//llamado del store de ducks


function App() {
  const store = generateStore();
  return (
    <Provider
      store={store}
    >
      {/* <MyComponent /> */}
      <DuckComponent />
    </Provider>
  );
}

export default App;
