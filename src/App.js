import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

import { RoutesComponent } from "./routes";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <RoutesComponent />
      </main>
    </>
  );
}

export default App;
