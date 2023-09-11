# Lazy Load Image Component - Vanilla JavaScript Implementation

This repository contains the Vanilla JavaScript implementation of the Lazy Load Image component. The component is designed to improve web page performance by progressively loading images, providing a smoother user experience. It requires both a low-resolution and high-resolution version of the image.

## Features

- Progressive loading of images for a smoother user experience.
- Requires both low-resolution and high-resolution versions of images.
- Easily customizable and integratable into web projects that use plain JavaScript.


## Usage

To use the Lazy Load Image Component in your Vanilla JavaScript project, follow these steps:

1. **Clone this repository to your local machine:**
   ```
   git clone https://github.com/lucas-argerich/lazy-load-image-component.git
   ```
   
2. **Navigate to the project directory:**
   ```
   cd lazy-load-image-component/vanilla
   ```

3. **Include the component file in your HTML:**
   ```html
   <script src="path/to/LazyLoadImage.js"></script>
   ```

4. **Create an HTML element where you want to load the Lazy Load Image Component. Give it a unique id:**
    ```html
    <div id="lazy-load-image-container"></div>
    ```

5. **Create and initialize the component in your JavaScript file:**
    ```javascript
    const containerId = 'lazy-load-image-container';

    const props = {
      width: 500,
      height: 300,
      src: {
        lowRes: '/path/to/low-res-image.jpg',
        hiRes: '/path/to/high-res-image.jpg'
      },
      alt: 'Image Alt Text',
    };

    createLazyLoadImage(containerId, props);
    ```

## Configuration
You can configure the Lazy Load Image component by modifying the props object in your JavaScript file **(./LazyLoadImage.js)**.

## Example
Here's an example of how to use the Lazy Load Image Component in a Vanilla JavaScript project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Load Image Example</title>
</head>
<body>
  <div id="lazy-load-image-container"></div>
  <script src="./LazyLoadImage.js"></script>
  <script>
    const containerId = 'lazy-load-image-container';

    const props = {
      width: 500,
      height: 300,
      src: {
        lowRes: '/path/to/low-res-image.jpg',
        hiRes: '/path/to/high-res-image.jpg'
      },
      alt: 'Lazy Load Image Example',
    };

    createLazyLoadImage(containerId, props);
  </script>
</body>
</html>
```