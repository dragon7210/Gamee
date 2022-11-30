import View from "components/claim";
import Approve from "components/approve";
import Switch from "components/switch";
import { approve, claim, networkSwitch } from "constant";
import Question from "assets/img/question.png";

const Main = () => {
  return (
    <div className="mt-[20px]">
      <p className="text-[white] text-[40px] font-bold">Staking</p>
      <div className="mt-[30px]">
        <div className="flex px-[50px]">
          <p className="text-[white] w-[250px]">Token</p>
          <div className="flex w-[50%] justify-between max-lg:hidden">
            <div className="flex">
              <p className="text-[white]">liquidity</p>
              <div className="my-auto ml-[10px]">
                <img
                  alt="question"
                  src={Question}
                  className="rounded-[99px] w-[20px] h-[20px]"
                />
              </div>
            </div>
            <div className="flex">
              <p className="text-[white]">Apr</p>
              <div className="my-auto ml-[10px]">
                <img
                  alt="question"
                  src={Question}
                  className="rounded-[99px] w-[20px] h-[20px]"
                />
              </div>
            </div>
            <p className="text-[white]">Reward</p>
            <p className="text-[white]">Earned</p>
          </div>
        </div>

        <View
          name1={claim.name1}
          name2={claim.name2}
          liqudity={claim.liquidity}
          apr={claim.apr}
          reward={claim.reward}
          earned={claim.earned}
        />
        <Approve
          name1={approve.name1}
          name2={approve.name2}
          liqudity={approve.liquidity}
          apr={approve.apr}
          reward={approve.reward}
          earned={approve.earned}
        />
        <Switch
          name1={networkSwitch.name1}
          name2={networkSwitch.name2}
          liqudity={networkSwitch.liquidity}
          apr={networkSwitch.apr}
          reward={networkSwitch.reward}
          earned={networkSwitch.earned}
        />
      </div>
    </div>
  );
};

export default Main;
