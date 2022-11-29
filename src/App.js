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
      <div className="max-w-[1600px] mx-[auto] bg-[black] px-[10%] pb-[10vh] rounded-[50px]">
        <Header />
        <Main />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
