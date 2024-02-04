const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('%c \n Deploying contracts with the account:', 'color:', deployer.address );

    const lock = await hre.ethers.deployContract("CommentVerifier", ['0xd853c72d627845B59a3Fc9880eEcF50D699bcBEB'] );
  await lock.waitForDeployment();

  console.log(
    `CommentVerifier Contract deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
