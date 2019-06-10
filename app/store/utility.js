const updateObject = (oldObject, updadedProperties) => {
  return {
    ...oldObject,
    ...updadedProperties
  }
}

export default updateObject