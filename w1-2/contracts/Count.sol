// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    address owner;
    uint256 public counter;

    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    function count() public onlyOwner {
        counter = counter + 1;
    }

    function add(uint256 x) public onlyOwner {
        counter = counter + x;
    }
}
