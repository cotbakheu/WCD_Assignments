# 🖥️ Tugas #1 - Mata Kuliah Web Client Development

![App Screenshot](https://storage.googleapis.com/assets-edlink/p/medium-9010d7123737800b11fc1297173b4fb428606d4cbd46609f345850dad718f25f-exercise-2-2.png)

---

## 🚀 How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the application:
   ```sh
   npm run tugas-2
   ```

---

# 📘 Documentation

Welcome! Below are some useful JavaScript functions for various mathematical and logical operations, along with explanations and examples.

---

## 📏 Centimeter to Kilometer

Convert centimeters to kilometers.

### 🔹 Function

```typescript
function centimeterToKilometer(centimeter: number): number {
  return centimeter / 100000;
}
```

### 📝 Example

```plaintext
Input:
- Centimeter: 100000

Output:
- Kilometer: 1
```

---

## 🔥 Temperature Conversion

Convert Fahrenheit to Celsius.

### 🔹 Function

```typescript
function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * (5 / 9);
}
```

### 📝 Example

```plaintext
Input:
- Fahrenheit: 32

Output:
- Celsius: 0
```

---

## 🔄 Palindrome Checker

Check if a word is a palindrome (reads the same forward and backward).

### 🔹 Function

```typescript
function palindromeChecker(word: string): boolean {
  return word === word.split("").reverse().join("");
}
```

### 📝 Example

```plaintext
Input:
- Word: eye

Output:
- "eye" is a palindrome: true
```

---

## 🔢 Even Number Checker

Check if a number is even.

### 🔹 Function

```typescript
function isEvenChecker(number: number): boolean {
  return number % 2 === 0;
}
```

### 📝 Example

```plaintext
Input:
- Number: 2

Output:
- Is even: true
```

---

## 📐 Triangle Angle Calculation

Find the third angle of a triangle given two known angles.

### 🔹 Function

```typescript
function triangleAngleMeasurement(angleA: number, angleB: number): number {
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

## ✂️ String Remover

Remove a specified substring from a given string.

### 🔹 Function

```typescript
function removeString(str: string, removedString: string): string {
  return str.replace(removedString, "");
}
```

### 📝 Example

```plaintext
Input:
- String: Hello World
- Substring to remove: ell

Output:
- New string: Ho World
```

---
