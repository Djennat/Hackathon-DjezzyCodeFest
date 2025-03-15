async function main() {
  const DonationTracker = await ethers.getContractFactory("DonationTracker");
  const tracker = await DonationTracker.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  await tracker.waitForDeployment();
  console.log("DonationTracker deployed to:", await tracker.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});