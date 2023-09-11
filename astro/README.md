# Lazy Load Image Component - Astro Implementation

This repository contains the Astro implementation of the Lazy Load Image component. The component is designed to improve web page performance by progressively loading images, providing a smoother user experience. It requires both a low-resolution and high-resolution version of the image.

## Features

- Progressive loading of images for a smoother user experience.
- Requires both low-resolution and high-resolution versions of images.
- Easily customizable and integratable into Astro-based web projects.
- Support for lazy loading images with different resolutions.

## Getting Started

To get started with this Astro implementation, follow these steps:

1. **Clone this repository to your local machine:**
   ```
   git clone https://github.com/lucas-argerich/lazy-load-image-component.git
   ```
   
2. **Navigate to the project directory:**
   ```
   cd lazy-load-image-component/astro
   ```

3. **Install dependencies**
   ```
   npm install
   ```

4. **Start the Astro development server:**
    ```
    npm run dev
    ```

5. **Open your web browser and visit http://localhost:3000 to see the Lazy Load Image Component in action.**

## Usage
To use the Lazy Load Image Component, you need to provide both a **low-resolution** and **high-resolution** version of the image. Here's how you can use it in your Astro components or templates:

```
---
import LazyLoadImage from '../src/components/LazyLoadImage.astro';
---

<LazyLoadImage
  src={{
    lowRes: "/path/to/low-res-image.jpg",
    hiRes: "/path/to/high-res-image.jpg"
  }}
  alt="Image Alt Text"
  width="500"
  height="300"
/>
```

## Configuration
You can configure the Lazy Load Image component by modifying its props in the component file **(./src/components/LazyLoadImage.astro)**.