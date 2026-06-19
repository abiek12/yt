import Body from "./components/Body";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      {/*
       * Sidebar
       * Header
       * Main content
       * Footer
       */}
      <Headers />
      <SideBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
