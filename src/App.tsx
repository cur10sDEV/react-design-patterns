import MouseTracker from "./design-pattern/render-prop/mouse-tracker";

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

    // 4. Container/Presentational
    // <Container />

    // 6. Render Props
    <MouseTracker
      render={(position) => (
        <>
          <h1>The mouse position is</h1>
          <h2>X: {position.x}</h2>
          <h2>Y: {position.y}</h2>
        </>
      )}
    />

    // 7. custom hooks
    // <ThemeSwitcher />
  );
}

export default App;
