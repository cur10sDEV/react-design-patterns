import Footer from "./design-pattern/layout/split-screen/footer";
import Header from "./design-pattern/layout/split-screen/header";
import Left from "./design-pattern/layout/split-screen/left";
import Right from "./design-pattern/layout/split-screen/right";
import SplitScreen from "./design-pattern/layout/split-screen/split-screen";

function App() {
  return (
    // 1. Split Screen
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <SplitScreen leftWidth={20} rightWidth={80}>
        <Left />
        <Right />
      </SplitScreen>
      <Footer />
    </div>
  );
}

export default App;
