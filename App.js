import Main from "./Navigators/Main";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Shared/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";
import GetLocation from "./Mapping/GetLocation";
import RenderMap from "./Mapping/RenderMap";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        {/* <Main /> */}
        {/* <GetLocation /> */}
        <RenderMap />
      </NavigationContainer>
    </Provider>
  );
}
