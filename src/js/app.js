function destructuring(character) {
  const result = [];
  if (!character.special) {
    return result;
  }
  const {
    special: [
      {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      },
    ],
  } = character;
  result.push({
    id,
    name,
    icon,
    description,
  });

  return result;
}

export default { destructuring };
