import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="main">
      <MainLayout>
        <Register />
      </MainLayout>
    </div>
  );
}

export default App;
