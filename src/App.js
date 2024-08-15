import "./App.css";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
