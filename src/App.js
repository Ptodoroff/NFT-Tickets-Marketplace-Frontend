import "./App.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  // rendering the children components of App

  return (
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
