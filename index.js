function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } 
    else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } 
    else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
      }
    }
    return result;
  }
  
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const keys = Object.keys(collection);
  
    if (acc === undefined) {
      acc = collection[keys[0]];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } 
    else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } 
    else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } 
    else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } 
    else {
      return array.slice(-n);
    }
  }
  
  // Optional: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort(function(a, b) {
      const aValue = callback(a);
      const bValue = callback(b);
      if (aValue < bValue) {
        return -1;
      } 
      else if (aValue > bValue) {
        return 1;
      } 
      else {
        return 0;
      }
    });
  }

  function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
  
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  
    return keys;
  }

  function myValues(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
  
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
  
    return values;
  }
  