// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VoiceRecord {
    struct Record {
        string text;       // e.g. "good morning"

    }

    mapping(address => Record) private records;

    event RecordStored(address indexed user, string text);

    // Store or update the record for the caller
    function storeRecord(string calldata text) external {
        records[msg.sender] = Record(text);
        emit RecordStored(msg.sender, text);
    }

    // Retrieve a user's record
    function getRecord(address user) external view returns (string memory text) {
        Record memory record = records[user];
        return (record.text, record.location, record.timestamp);
    }
}
