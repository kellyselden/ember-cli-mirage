import DbCollection from './db-collection';

/**
 * The db, an identity map.
 * @class Db
 * @constructor
 * @public
 */
class Db {

  constructor(initialData) {
    this._collections = [];

    if (initialData) {
      this.loadData(initialData);
    }
  }

  /**
   * @method loadData
   * @param data
   * @public
   */
  loadData(data) {
    for (let key in data) {
      this.createCollection(key, data[key]);
    }
  }

  /**
   * @method dump
   * @public
   */
  dump() {
    return this._collections.reduce((data, collection) => {
      data[collection.name] = collection.all();

      return data;
    }, {});
  }

  /**
   * @method createCollection
   * @param name
   * @param initialData
   * @public
   */
  createCollection(name, initialData) {
    if (!this[name]) {
      let newCollection = new DbCollection(name, initialData);

      this[name] = newCollection;

      this._collections.push(newCollection);

    } else if (initialData) {
      this[name].insert(initialData);
    }

    return this;
  }

  /**
   * @method createCollections
   * @param ...collections
   * @public
   */
  createCollections(...collections) {
    collections.forEach((c) => this.createCollection(c));
  }

  /**
   * @method emptyData
   * @public
   */
  emptyData() {
    this._collections.forEach((c) => c.remove());
  }
}

export default Db;
