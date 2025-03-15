# 🖥️ Tugas #1 - Mata Kuliah Web Client Development

![App Screenshot](https://storage.googleapis.com/assets-edlink/p/medium-1ff861a7ee445cd81a865602c8a079a753e69252b06b793dfa73c78cf992de01-tugas1.png)

---

## 🚀 How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the application:
   ```sh
   npm run tugas-1
   ```

---

# 📘 Documentation

Welcome! Below are some useful JavaScript functions for mathematical and logical operations, along with their explanations and examples.

---

## 📏 Area of a Rectangle

Calculate the area of a rectangle given its length and width.

### 🔹 Function

```typescript
function areaOfRect(length: number, width: number): number {
  return length * width;
}
```

### 📝 Example

```plaintext
Input:
- Width: 10
- Height: 10

Output:
- Area: 100
```

---

## 🔵 Circle Measurement

Calculate the diameter, circumference, and area of a circle based on its radius.

### 🔹 Function

```typescript
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
```

### 📝 Example

```plaintext
Input:
- Radius: 10

Output:
- Diameter: 20.00
- Circumference: 62.80
- Area: 314.00
```

---

## 📅 Date Difference

Calculate the number of days between two dates.

### 🔹 Function

```typescript
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
```

### 📝 Example

```plaintext
Input:
- Date A: 2025-10-12
- Date B: 2025-09-20

Output:
- Date Difference: 23 days
```

---

## 🔠 Name Initials

Extract initials from a full name.

### 🔹 Function

```typescript
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
  return initial.toUpperCase();
}
```

### 📝 Example

```plaintext
Input:
- Name: Budi Santoso

Output:
- Initials: BS
```

---

## 📐 Triangle Angle Calculation

Find the third angle of a triangle given two known angles.

### 🔹 Function

```typescript
function triangleAngleMeasurement(angleA: number, angleB: number) {
  return 180 - angleA - angleB;
}
```

### 📝 Example

```plaintext
Input:
- Angle A: 60°
- Angle B: 30°

Output:
- Angle C: 90°
```

---
