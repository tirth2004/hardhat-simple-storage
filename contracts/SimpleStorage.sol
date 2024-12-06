// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract SimpleStorage {
    uint256 public favouriteNumber;
    //Gets initialised to 0

    People[] public people;
    mapping(string => uint256) public nameToFavnumber;

    struct People {
        string name;
        uint256 favNumber;
    }

    function store(uint256 _favNumber) public {
        favouriteNumber = _favNumber;
    }

    function addPerson(uint256 _favNumber, string memory _name) public {
        people.push(People(_name, _favNumber));
        nameToFavnumber[_name] = _favNumber;
    }

    function getFavouriteNumber() public view returns (uint256) {
        return favouriteNumber;
    }

    function getFavNumberForPerson(
        string memory _name
    ) public view returns (uint256) {
        return nameToFavnumber[_name];
    }
}
