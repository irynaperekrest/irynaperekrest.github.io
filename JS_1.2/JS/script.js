(function () {var nameList = [];

for (i = 0; i < 5; i++) {
    nameList[i] = prompt('Enter a name', '');
}

console.log(nameList);

var yourName = prompt('Please enter YOUR name', '');
var hit = [];

for (i = 0; i < nameList.length; i++) {
    if (nameList[i] === yourName) {
        hit.push(nameList[i]);
    }
}

if (hit.length === 0) {
    alert('The name is not found')
} else {
    alert(hit[0] + ' you have successfully logged in')
}
})();