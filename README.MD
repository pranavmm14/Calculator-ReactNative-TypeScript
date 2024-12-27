# Calculator App

A minimalist **calculator app** built with **React Native** and **Expo**, featuring an elegant color scheme and smooth user experience.
  
![License](https://img.shields.io/github/license/pranavmm14/Calculator-ReactNative-TypeScript?color=blue)  
![Node Version](https://img.shields.io/badge/Node%20Version-v22+-green)

## Features

- **Basic arithmetic operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- **Modern and clean UI design**
- **Custom color palette**: #122620, #D6AD60, #FFEBD0, #B68D40
- **Responsive layout**: Works seamlessly across devices
- **TypeScript support**: Ensures strong typing and better development experience

## Prerequisites

Before getting started, ensure you have the following tools installed:

- **Node.js** (v22 or higher)
- **npm**
- **Expo CLI**
- **Expo Go app**: For testing on mobile devices

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pranavmm14/Calculator-ReactNative-TypeScript.git
   cd CalculatorApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the app**:
   ```bash
   npx expo start
   ```

4. **Run on your device**:
   - Install **Expo Go** on your phone.
   - Scan the QR code shown in the terminal with:
     - **iOS**: Use the Camera app.
     - **Android**: Use the Expo Go app.

## Project Structure

Here's the breakdown of the project structure:

```
src/
  ├── components/
  │   └── Calculator.tsx    # Main calculator component
  ├── constants/
  │   └── colors.ts        # Color palette definitions
  ├── types/
  │   └── calculator.ts    # TypeScript type definitions
  └── App.tsx              # Root component
```

## Color Palette

The app uses a custom color palette to create a modern and visually appealing design:

- **Background**: `#122620`
- **Numbers**: `#B68D40`
- **Operators**: `#D6AD60`
- **Display**: `#FFEBD0`

## Testing

Open **Expo Go** on your device and scan the QR code that appears when you run:

```bash
npx expo start
```

This will launch the app on your mobile device.

## License

This project is licensed under the **MIT License** – see the LICENSE file for more details.

## Contributing

We welcome contributions! Here's how you can contribute:

1. **Fork the repository**
2. **Create your feature branch**:  
   `git checkout -b feature/amazing-feature`
3. **Commit your changes**:  
   `git commit -m 'Add some amazing feature'`
4. **Push to the branch**:  
   `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## Acknowledgments

- **Design inspiration**: Modern calculator apps
- **Color palette**: Chosen for optimal contrast and usability
- Built with **Expo** for **cross-platform compatibility**
