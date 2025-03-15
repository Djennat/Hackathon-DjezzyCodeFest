// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DonationTracker is Ownable {
    struct Donation {
        address donor; // Backend wallet address
        uint256 amount; // Fiat amount in smallest units (e.g., centimes)
        string paymentTxId; // Payment gateway transaction ID
        uint256 timestamp; // When recorded
        uint256 missionId; // Mission or campaign ID
    }

    mapping(uint256 => Donation) public donations; // Donation ID to details
    uint256 public donationCount; // Total number of donations
    mapping(uint256 => uint256) public missionTotals; // Mission ID to total amount donated

    event DonationRecorded(
        uint256 donationId,
        address donor,
        uint256 amount,
        string paymentTxId,
        uint256 timestamp,
        uint256 missionId
    );

    constructor(address initialOwner) Ownable(initialOwner) {
        donationCount = 0;
    }

    function recordDonation(uint256 amount, string memory paymentTxId, uint256 missionId) 
        external 
        onlyOwner 
    {
        donationCount++;
        donations[donationCount] = Donation(
            msg.sender,
            amount,
            paymentTxId,
            block.timestamp,
            missionId
        );
        missionTotals[missionId] += amount; // Update mission-specific total
        emit DonationRecorded(donationCount, msg.sender, amount, paymentTxId, block.timestamp, missionId);
    }

    function getDonation(uint256 donationId) 
        external 
        view 
        returns (Donation memory) 
    {
        require(donationId > 0 && donationId <= donationCount, "Invalid donation ID");
        return donations[donationId];
    }

    function getMissionTotal(uint256 missionId) 
        external 
        view 
        returns (uint256) 
    {
        return missionTotals[missionId];
    }
}