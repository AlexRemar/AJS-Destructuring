function destructuring(character) {
  const result = [];
  const { special } = character;

  if (!special) {
    return result;
  }

  for (const key of special) {
    if (!key.description) {
      key.description = 'Описание недоступно';
    }
    result.push({
      id: key.id,
      name: key.name,
      icon: key.icon,
      description: key.description,
    });
  }
  return result;
}

export default { destructuring };
