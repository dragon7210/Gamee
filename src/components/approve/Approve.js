import { useState } from "react";

import MATIC from "assets/img/matic.png";
import ETH from "assets/svg/eth.svg";
import GMEE from "assets/img/gmee.png";
import Show from "assets/img/show.png";
import Transaction from "assets/img/transaction.png";
import Right from "assets/img/right.png";
import Bottom from "assets/img/bottom.png";
import Top from "assets/img/top.png";
import { approve } from "lib/contract";
import { maticStakingContractAddress } from "constant";
import { useWeb3React } from "@web3-react/core";

const Approve = ({ name1, name2, liqudity, apr, reward, earned }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const { library } = useWeb3React();
  const [isApproving, setApproving] = useState(false);

  const approveToken = async () => {
    setApproving(true);
    try {
      await approve(10000, library);
    } catch (err) {
      console.log(err);
    }
    setApproving(false);
  };

  return (
    <div
      className={`${
        active ? "bg-[#105657]" : "bg-[#232526]"
      } rounded-[20px] px-[50px] py-[30px] mt-[20px] `}
    >
      <div
        className={`lg:flex  ${
          active && "border-b-2 border-[rgb(34,102,136)] pb-[20px]"
        } relative`}
      >
        <div className="flex w-[250px]">
          <div className="relative flex">
            {name1 === "ETH" && (
              <img
                className="w-[50px] h-[50px] bg-[#34424b] p-[10px] rounded-[99px]"
                src={ETH}
                alt={name1}
              />
            )}
            {name1 === "MATIC" && (
              <img
                className="w-[50px] h-[50px] bg-[#6300FF] p-[10px] rounded-[99px]"
                src={MATIC}
                alt={name1}
              />
            )}
            {name1 === "GMEE" && (
              <img
                className="w-[50px] h-[50px] bg-[#29E7E8] p-[10px] rounded-[99px]"
                src={GMEE}
                alt={name1}
              />
            )}

            {name2 === "ETH" && (
              <img
                className="absolute left-[40px] w-[50px] h-[50px] bg-[#34424b] p-[10px] rounded-[99px]"
                src={ETH}
                alt={name2}
              />
            )}
            {name2 === "MATIC" && (
              <img
                className="absolute left-[40px] w-[50px] h-[50px] bg-[#6300FF] p-[10px] rounded-[99px]"
                src={MATIC}
                alt={name2}
              />
            )}
            {name2 === "GMEE" && (
              <img
                className="absolute left-[40px] w-[50px] h-[50px] bg-[#29E7E8] p-[10px] rounded-[99px]"
                src={GMEE}
                alt={name2}
              />
            )}
          </div>
          <p className="my-auto text-[white] text-[20px] ml-[50px]">
            {name1}-{name2}
          </p>
        </div>
        <div className="flex justify-between w-[50%] max-lg:w-[100%] max-lg:py-[20px]">
          <p className="my-auto text-[white]">$ {liqudity}M</p>
          <p className="my-auto text-[white]">{apr} %</p>
          <p className="my-auto text-[white]">{reward} K</p>
          <p className="my-auto text-[20px]  text-transparent text-1xl bg-clip-text bg-gradient-to-r from-[#45e59d] to-[#b8ed35] ">
            {earned}
          </p>
        </div>
        <div className="lg:absolute lg:right-[0px] flex">
          <button
            className="px-[20px] py-[15px] bg-gradient-to-r from-[#b8ed35] to-[#5c3dfb] rounded-[15px] flex justify-center max-lg:w-[100%] max-lg:ml-[0px]"
            onClick={() => approveToken()}
          >
            <img className="w-[25px] h-[25px]" src={Right} alt="download" />
            <p className="font-[600]">
              {isApproving ? "Approving" : "Approve"}
            </p>
          </button>

          <button
            onClick={() => {
              active ? setActive(false) : setActive(true);
            }}
          >
            <img
              className="w-[20px] ml-[15px]"
              alt="bottom"
              src={active ? Top : Bottom}
            />
          </button>
        </div>
      </div>
      {active && (
        <div className="mt-[50px]">
          <div className="flex justify-between">
            <div>
              <p className="text-[white]">Your deposit</p>
              <div className="flex">
                <p className="text-[white] text-[40px] mr-[20px] font-[700]">
                  24,567.7
                </p>
                <p className="text-[white] right-[-80px] bottom-2 mt-[28px]">
                  $204.67
                </p>
              </div>
            </div>
            <div>
              <p className="text-[white]">Share</p>
              <div className="flex">
                <p className="text-[white] text-[40px] mr-[20px] font-[700]">
                  0.0007
                </p>
                <p className="text-[white] right-[-80px] bottom-2 mt-[28px]">
                  %
                </p>
              </div>
            </div>
            <div>
              <p className="text-[white]">Earnings</p>
              <div className="flex">
                <p className="text-[white] text-[40px] mr-[20px] font-[700] text-transparent text-1xl bg-clip-text bg-gradient-to-r from-[#45e59d] to-[#b8ed35]">
                  2.6789
                </p>
                <p className="text-[white] right-[-80px] bottom-2 mt-[28px]">
                  $20.56
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-[50px] justify-between">
            <div className="flex">
              <button className="px-[40px] py-[15px] bg-[#32706f] rounded-[15px]">
                <p className="text-[white]">+ Add liquidity</p>
              </button>
              <button className="px-[20px] py-[15px] bg-[#32706f] ml-[20px] rounded-[15px]">
                <p className="text-[white]">-</p>
              </button>
            </div>
            <div className="relative">
              {show && (
                <div className="bg-[#232526] p-[8px] rounded-[8px] absolute right-[100px] w-[170px] bottom-0">
                  <button className="p-[5px] hover:bg-[#333536] flex rounded-[7px] w-[154px]">
                    <img className="mt-[5px] mr-[10px]" alt="show" src={Show} />
                    <p className="text-[white]">Show contract</p>
                  </button>
                  <button className="p-[5px] hover:bg-[#333536] flex rounded-[7px] w-[154px]">
                    <img
                      className="mt-[2px] mr-[10px]"
                      alt="transaction"
                      src={Transaction}
                    />
                    <p className="text-[white]">Transactions</p>
                  </button>
                </div>
              )}
              <button
                className="px-[20px] py-[15px] bg-[#32706f] ml-[20px] rounded-[15px]"
                onClick={() => {
                  show ? setShow(false) : setShow(true);
                }}
              >
                <p className="text-[white] ">More</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approve;
