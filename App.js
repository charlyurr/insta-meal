// FIXME: error: Error: Unable to resolve module ./Navigators/Main from /Users/charlesrunhare/personal/insta-meal-remote/App.js:
// import ProductContainer from "./Screens/Products/ProductContainer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./android/app/src/Shared/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import PushNotifications from "./android/app/src/Notifications/PushNotifications";
import Main from "./android/app/src/Navigators/Main";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        {/* <ProductContainer /> */}
        {/* <PushNotifications /> */}
      </NavigationContainer>
    </Provider>
  );
}
