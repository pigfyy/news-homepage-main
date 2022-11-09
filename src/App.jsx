import Header from "./assets/components/Header.jsx";
import MainSection from "./assets/components/MainSection.jsx";
import News from "./assets/components/News.jsx";
import Recommendations from "./assets/components/Recommendations.jsx";
import "./App.css";

function App() {
  return (
    <main className="w-11/12 mx-auto mb-20 mt-5 space-y-6">
      <Header />
      <div className="space-y-16">
        <MainSection />
        <News />
        <Recommendations />
      </div>
    </main>
  );
}

export default App;
