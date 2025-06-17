import ThemeSwitcher from "./components/theme-switcher";

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
    // <div>
    //   <RenderList data={games} resourceName="games" dataToRender={ListItem} />
    // </div>

    // 3. Modal
    // <Modal>
    //   <RenderList data={games} resourceName="games" dataToRender={ListItem} />
    // </Modal>

    // 4. useLocalStorage
    <ThemeSwitcher />
  );
}

export default App;
