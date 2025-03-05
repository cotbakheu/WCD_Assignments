function circleMeasurement(radius: number) {
  const pi = 3.14;

  const diameter = radius * 2;
  const circumference = pi * diameter;
  const area = pi * radius * radius;

  return {
    diameter: diameter.toFixed(2),
    circumference: circumference.toFixed(2),
    area: area.toFixed(2),
  };
}

export default circleMeasurement;
