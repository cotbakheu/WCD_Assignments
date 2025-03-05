function dateDifference(dateA: string, dateB: string): string | number {
  const dateAConverted = new Date(dateA).getTime();
  const dateBConverted = new Date(dateB).getTime();
  if (isNaN(dateAConverted) || isNaN(dateBConverted)) {
    return "Invalid Date";
  }
  const dateDiffCount = dateAConverted - dateBConverted;
  const dateDiffDays = Math.ceil(dateDiffCount / (1000 * 60 * 60 * 24));
  return dateDiffDays;
}

export default dateDifference;
