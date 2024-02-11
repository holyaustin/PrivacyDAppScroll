const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('%c \n Deploying contracts with the account:', 'color:', deployer.address );

    const lock = await hre.ethers.deployContract("CommentVerifier", ["0xD8542343ceC6FbDdb62CaEBC613C320fB0A62303", "0x2a550743aa7151b3324482a03b2961ec4b038672a701f8ad0051b2c9d2e6c4c0"] );
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
