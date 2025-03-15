from fastapi import FastAPI
from web3 import Web3
import json

app = FastAPI()

# Connect to Hardhat node
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

# Contract details
contract_address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
with open("../blockchain/artifacts/contracts/DonationTracker.sol/DonationTracker.json") as f:
    contract_data = json.load(f)
abi = contract_data["abi"]
contract = w3.eth.contract(address=contract_address, abi=abi)

# Get mission total
@app.get("/mission-total/{mission_id}")
async def get_mission_total(mission_id: int):
    total = contract.functions.getMissionTotal(mission_id).call()
    return {"mission_id": mission_id, "total": str(total)}

# Get donation details
@app.get("/donation/{donation_id}")
async def get_donation(donation_id: int):
    donation = contract.functions.getDonation(donation_id).call()
    return {
        "donation_id": donation_id,
        "donor": donation[0],
        "amount": str(donation[1]),
        "payment_tx_id": donation[2],
        "timestamp": donation[3],
        "mission_id": donation[4]
    }

# Get latest donation ID
@app.get("/latest-donation-id")
async def get_latest_donation_id():
    count = contract.functions.donationCount().call()
    return {"latest_donation_id": count}