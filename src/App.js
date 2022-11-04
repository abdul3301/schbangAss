import MainPage from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <MainPage />
      </div>
      <div style={{ height: "100vh" }}>
        <SectionTwo />
      </div>
      <div style={{ height: "100vh" }}>
        <SectionThree />
      </div>
    </div>
  );
}

export default App;
