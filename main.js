class Media {
  constructor(title, ratings, isCheckedOut) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title () {
    return this._title;
  }

  get ratings () {
    return this._ratings;
  }

  get isCheckedOut () {
   return this._isCheckedOut;
  }
  
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

}
