const { expect } = require("chai");

describe("DonationTracker", function () {
  let DonationTracker, tracker, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners(); // Test accounts
    DonationTracker = await ethers.getContractFactory("DonationTracker");
    tracker = await DonationTracker.deploy(owner.address); // Deploy with owner
  });

  it("Should record a donation with mission and update total", async function () {
    await tracker.recordDonation(5000, "PAY-xxxxxxxxxxxx", 1); // Mission 1
    const donation = await tracker.getDonation(1);
    expect(donation.amount).to.equal(5000);
    expect(donation.paymentTxId).to.equal("PAY-xxxxxxxxxxxx");
    expect(donation.donor).to.equal(owner.address);
    expect(donation.missionId).to.equal(1);
    expect(await tracker.getMissionTotal(1)).to.equal(5000); // Mission 1 total
    expect(await tracker.getMissionTotal(2)).to.equal(0); // Mission 2 untouched
  });

  it("Should update mission total with multiple donations", async function () {
    await tracker.recordDonation(5000, "PAY-xxxxxxxxxxxx", 1); // Mission 1
    await tracker.recordDonation(2500, "PAY-yyyyyyyyyyyy", 1); // Mission 1
    await tracker.recordDonation(3000, "PAY-zzzzzzzzzzzz", 2); // Mission 2
    expect(await tracker.getMissionTotal(1)).to.equal(7500); // 5000 + 2500
    expect(await tracker.getMissionTotal(2)).to.equal(3000); // 3000
    expect(await tracker.donationCount()).to.equal(3);
  });

  it("Should restrict recording to owner", async function () {
    await expect(
      tracker.connect(addr1).recordDonation(1000, "PAY-aaaaaaaaaaaa", 1)
    ).to.be.revertedWithCustomError(tracker, "OwnableUnauthorizedAccount");
  });
});