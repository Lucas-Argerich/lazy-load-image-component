# Lazy Load Image Component - React Implementation

This repository contains the React implementation of the Lazy Load Image component. The component is designed to improve web page performance by progressively loading images, providing a smoother user experience. It requires both a low-resolution and high-resolution version of the image.

## Features

- Progressive loading of images for a smoother user experience.
- Requires both low-resolution and high-resolution versions of images.
- Easily customizable and integratable into React-based web projects.

## Getting Started

To use the Lazy Load Image Component in your React project, follow these steps:

1. **Clone this repository to your local machine:**
   ```
   git clone https://github.com/lucas-argerich/lazy-load-image-component.git
   ```
   
2. **Navigate to the project directory:**
   ```
   cd lazy-load-image-component/react
   ```

3. **Install dependencies**
   ```
   npm install
   ```

4. **Start the React development server:**
    ```
    npm run dev
    ```

5. **Open your web browser and visit http://localhost:3000 to see the Lazy Load Image Component in action.**

## Usage
To use the Lazy Load Image Component in your React components, follow these steps:

1. **Import the LazyLoadImage component into your React file:**

```jsx
import LazyLoadImage from './LazyLoadImage';
```

2. **Use the LazyLoadImage component with the required props, providing both low-resolution and high-resolution versions of the image:**

```jsx
<LazyLoadImage
  src={{
    lowRes: '/path/to/low-res-image.jpg',
    hiRes: '/path/to/high-res-image.jpg'
  }}
  alt="Image Alt Text"
  width={500}
  height={300}
/>
```

## Configuration
You can configure the Lazy Load Image component by modifying its props in the component file **(./LazyLoadImage.tsx)**.

## Example
Here's an example of how to use the Lazy Load Image Component in a React component:

```jsx
import React from 'react';
import LazyLoadImage from './LazyLoadImage';

function App() {
  return (
    <div>
      <h1>Lazy Load Image Example</h1>
      <LazyLoadImage
        src={{
          lowRes: '/path/to/low-res-image.jpg',
          hiRes: '/path/to/high-res-image.jpg'
        }}
        alt="Lazy Load Image"
        width={500}
        height={300}
      />
    </div>
  );
}

export default App;
```