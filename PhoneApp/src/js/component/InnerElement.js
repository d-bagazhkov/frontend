export class InnerElement {

  _render() {
    throw new Error("Needs overwrite this function");
    // return `
    //
    // `;
  }

  toString() {
    return this._render();
  }

}