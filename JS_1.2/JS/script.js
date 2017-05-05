(function() {

    'use strict';

    var nameList = [];

    for (var i = 0; i < 5; i++) {
        nameList[i] = prompt('Enter a name', '');
    }

    console.log(nameList);

    var yourName = prompt('Please enter YOUR name', '');

    function searchName(yourName) {
        for (var i = 0; i < nameList.length; i++) {
            if (nameList[i] === yourName) {
                return nameList[i];
            }
        }
        return null;
    }

    var result = searchName(yourName);

    if (result) {
        alert(yourName + ' you have successfully logged in')
    } else {
        alert('Error')
    }
})();
