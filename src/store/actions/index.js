export const createMonster = (monster) => ({
      type: "CREATE_MONSTER",
      payload: monster
});

export const deleteMonster = (monsterId) => ({
      type: "DELETE_MONSTER",
      payload: monsterId
});

export const selectElement = (elemId) => ({
      type: "SELECT_ELEMENT",
      payload: elemId
})
