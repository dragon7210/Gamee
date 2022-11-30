import Logo from "assets/svg/logo.svg";
import Connect from "assets/img/connect.png";
import Tab from "components/tab";

import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const Injected = new InjectedConnector({
    supportedChainIds: [1, 137],
  });

  const { activate, deactivate, account } = useWeb3React();
  return (
    <div className="h-[100px] flex justify-between">
      <div className="my-auto ">
        <img className="h-[24px]" src={Logo} alt="logo" />
      </div>
      <div className="my-auto max-lg:hidden ">
        <Tab />
      </div>
      <div className="my-auto flex">
        <div className="my-auto ml-[10px] mr-[20px] h-[40px]">
          {!account ? (
            <button
              className="w-[100px]"
              onClick={() => {
                activate(Injected);
              }}
            >
              <img alt="connect" src={Connect} />
            </button>
          ) : (
            <button
              className="w-[100px]"
              onClick={() => {
                deactivate();
              }}
            >
              <p className="text-[white] text-[11px]">10123 GMEE</p>
              <p className="text-[#5e636e] text-[11px]">
                {account.slice(0, 5)}...
                {account.slice(account.length - 4, account.length)}
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
