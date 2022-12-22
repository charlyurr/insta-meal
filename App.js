import Main from "./Navigators/Main";
// import ProductContainer from "./Screens/Products/ProductContainer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Shared/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        {/* <ProductContainer /> */}
      </NavigationContainer>
    </Provider>
  );
}
