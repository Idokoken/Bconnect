import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostBox from "./components/PostBox";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<PostBox />} />
      </Routes>
    </Router>
  );
}

export default App;
