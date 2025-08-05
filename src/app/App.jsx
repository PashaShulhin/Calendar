import { Provider } from "react-redux";
import DayGrid from "widgets/DayGrid/DayGrid";
import DayView from "pages/DayView/DayView";
import { store } from "../myRedux/store";
function App() {
  return (
    <Provider store={store}>
      <DayView />
    </Provider>
  );
}

export default App;
