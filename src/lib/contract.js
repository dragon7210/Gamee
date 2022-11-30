import { Contract } from "ethers";
import { maticStakingContractAddress } from "constant";
import stackeAbi from "./abi/Stake.json";
import tokenAbi from "./abi/Token.json";

export const approve = async (amount, provider) => {
  const stackeContract = new Contract(
    maticStakingContractAddress,
    stackeAbi,
    provider.getSigner()
  );
  const tokenAddress = await stackeContract.rewardToken();
  const tokenContract = new Contract(
    tokenAddress,
    tokenAbi,
    provider.getSigner()
  );
  const tx = await tokenContract.approve(maticStakingContractAddress, amount);
  await tx.wait();
};

export const claim = async (provider) => {
  const stackeContract = new Contract(
    maticStakingContractAddress,
    stackeAbi,
    provider.getSigner()
  );
  const tx = await stackeContract.getReward();
  await tx.wait();
};
