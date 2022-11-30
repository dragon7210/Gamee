import Header from "./components/header";
import Main from "components/main";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="bg-[black] h-[100vh]">
        <div className="max-w-[1600px] mx-[auto] bg-[black] px-[10%] pb-[10vh] rounded-[50px] min-w-[850px]">
          <Header />
          <Main />
        </div>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
