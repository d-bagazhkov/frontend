export default class PhoneRepository {

  getAllPhone(calback) {
    fetch("src/api/phones.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.json();
        })
        .then(json => calback(json))
  }

  findDetailsById(id) {
    //todo
  }


}