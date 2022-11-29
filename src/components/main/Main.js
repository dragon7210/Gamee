import View from "components/claim";
import Liquidity from "components/liquidity";
import Switch from "components/switch";
import { claim } from "constant";
import Question from "assets/img/question.png";

const Main = () => {
  return (
    <div className="mt-[20px]">
      <p className="text-[white] text-[40px] font-bold">Staking</p>
      <div className="mt-[30px]">
        <div className="flex justify-between px-[50px]">
          <p className="text-[white] w-[23%]">Token</p>
          <p></p>
          <div className="flex w-[13%]">
            <p className="text-[white]">liquidity</p>
            <div className="my-auto ml-[10px]">
              <img
                alt="question"
                src={Question}
                className="rounded-[99px] w-[20px] h-[20px]"
              />
            </div>
          </div>
          <div className="flex w-[13%]">
            <p className="text-[white]">Apr</p>
            <div className="my-auto ml-[10px]">
              <img
                alt="question"
                src={Question}
                className="rounded-[99px] w-[20px] h-[20px]"
              />
            </div>
          </div>

          <p className="text-[white] w-[13%]">Reward</p>
          <p className="text-[white] w-[13%]">Earned</p>
          <p className="w-[25%]"></p>
        </div>

        <View
          name1={claim.name1}
          name2={claim.name2}
          liqudity={claim.liquidity}
          apr={claim.apr}
          reward={claim.reward}
          earned={claim.earned}
        />
        <Liquidity
          name1={claim.name1}
          name2={claim.name2}
          liqudity={claim.liquidity}
          apr={claim.apr}
          reward={claim.reward}
          earned={claim.earned}
        />
        <Switch
          name1={claim.name1}
          name2={claim.name2}
          liqudity={claim.liquidity}
          apr={claim.apr}
          reward={claim.reward}
          earned={claim.earned}
        />
      </div>
    </div>
  );
};

export default Main;
