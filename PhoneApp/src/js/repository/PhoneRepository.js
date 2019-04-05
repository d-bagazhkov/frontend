export default class PhoneRepository {

  getAllPhone(callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'src/api/phones.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4 && xhr.status !== 200) return;
      callback(JSON.parse(xhr.responseText || "[]"));
    };

    xhr.send();
  }

  findDetailsById(id) {
    //todo
  }


}