function nameInitial(name: string) {
  let initial = "";

  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      initial += name[i];
    }
    if (name[i] === " ") {
      initial += name[i + 1];
      break;
    }
  }
  return initial;
}

export default nameInitial;
