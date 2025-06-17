import { games } from "./data";
import ListItem from "./design-pattern/layout/render-list/list-item";
import RenderList from "./design-pattern/layout/render-list/render-list";

function App() {
  return (
    // 1. Split Screen
    // <div className="flex flex-col w-screen h-screen">
    //   <Header />
    //   <SplitScreen leftWidth={20} rightWidth={80}>
    //     <Left />
    //     <Right />
    //   </SplitScreen>
    //   <Footer />
    // </div>

    // 2. Render list
    <div>
      <RenderList data={games} resourceName="games" dataToRender={ListItem} />
    </div>
  );
}

export default App;
