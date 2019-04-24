'use strict';

// export default class PhoneRepository {

//     request(path, callback) {
//         let xhr = new XMLHttpRequest();

//         xhr.open('GET', path, true);
//         xhr.setRequestHeader('Content-Type', 'application/json');

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4 && xhr.status !== 200) return;
//             callback(JSON.parse(xhr.responseText || "[]"));
//         };

//         xhr.send();
//     }

//     getAllPhone(callback) {
//         this.request("./src/api/phones.json", callback)
//     }

//     getDetailsByIdPhone(id, callback) {
//         this.request(`./src/api/phones/${id}.json`, callback)
//     }

// }

function request(path, callback) {
    fetch(path)
        .then(result => result.json())
        .then(obj => callback(obj));
}

export function getAllPhone(callback) {
    request("./src/api/phones.json", callback)
}

export  function getDetailsByIdPhone(id, callback) {
    request(`./src/api/phones/${id}.json`, callback)
}