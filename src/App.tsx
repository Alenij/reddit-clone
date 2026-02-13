import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { MainContainer } from "./components/MainContainer";

export const App = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNav />
        <MainContainer />
      </div>
    </>
  );
};

export default App;
