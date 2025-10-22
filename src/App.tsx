import './App.css';
import { Analytics } from "@vercel/analytics/react";

import Navigation from "./Components/Navigation";
import Main from "./Components/Main-content";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";


function App() {

  return (
    <>

      <Navigation />

      <Main />
      <Sidebar />

      <Footer />
      <Analytics />
    </>
  )
}

export default App;
