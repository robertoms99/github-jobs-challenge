const objectFilter = (object,propertiesArray) => {
    const keys = Object.getOwnPropertyNames(object)
    return keys.filter((key)=> propertiesArray.includes(key)).reduce((newObject,key)=> {
        newObject[key] = object[key]
        return newObject
    },{})
}

export {objectFilter}