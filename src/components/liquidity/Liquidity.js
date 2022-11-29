import { useState } from "react";

import MATIC from "assets/img/matic.png";
import ETH from "assets/svg/eth.svg";
import GMEE from "assets/img/gmee.png";
import Show from "assets/img/show.png";
import Transaction from "assets/img/transaction.png";

const Liquidity = ({ name1, name2, liqudity, apr, reward, earned }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#232526] rounded-[20px] px-[50px] py-[30px] mt-[40px] lg:flex">
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
        <p className="my-auto ml-[50px] text-[white] text-[20px]">
          {name1}-{name2}
        </p>
      </div>
      <div className="flex w-[50%] max-lg:w-[100%] max-lg:py-[20px] justify-between">
        <p className="my-auto text-[white] ">$ {liqudity}M</p>
        <p className="my-auto text-[white] ">{apr} %</p>
        <p className="my-auto text-[white] ">{reward} K</p>
        <p className="my-auto text-[20px]  text-transparent text-1xl bg-clip-text bg-gradient-to-r from-[#45e59d] to-[#b8ed35] ">
          {earned}
        </p>
      </div>

      <div className="flex justify-end relative ml-[64px]">
        <button className="px-[20px] py-[15px] bg-gradient-to-r from-[#5d40f4] to-[#22d5ad] rounded-[15px]">
          <p className="text-[white] ">+ Add liquidity</p>
        </button>
        {show && (
          <div className="bg-[#1d1e20] p-[8px] rounded-[8px] absolute w-[170px] top-[60px]">
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
          className="px-[20px] py-[15px] bg-[#454545] ml-[20px] rounded-[15px]"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          <p className="text-[white] ">More</p>
        </button>
      </div>
    </div>
  );
};

export default Liquidity;
