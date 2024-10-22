# Ada Shop

Ada Shop is a React.js-based e-commerce web application that allows users to browse, filter, and add products to their cart. The project uses React, TypeScript, Tailwind CSS, and Redux for state management. This project also includes features like product sorting, cart management, and product filtering.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)

## Features

- **Product Listing**: Displays a list of products with mock data, 6 items per page, and a "Load More" button to display additional products.
- **Filtering**: Users can filter products by their names using an input field.
- **Sorting**: Users can sort products by three options:
  1. Default (All Products)
  2. Cheapest to Most Expensive
  3. Most Expensive to Cheapest
- **Cart Management**: Displays the total number of selected products in the cart.
- **Dropdown Menu**: The sorting dropdown can be toggled, and closes automatically when clicking outside of it.

## Tech Stack

- **React** (version 18.3.1)
- **TypeScript**: Strict type checking for a better development experience.
- **Tailwind CSS**: For fast and efficient styling.
- **Redux Toolkit**: For global state management, particularly managing products in the cart.
- **dndkit**: Drag-and-drop functionality for managing products (planned future feature).
- **React Hooks**: Used extensively for state and effect management.

## Usage

- **Filtering Products**: Type into the input field to filter the product list based on product names.
- **Sorting Products**: Click the "فیلتر ها" (Filter) button to open the dropdown and select:
1. همه: Displays all products in the default order.
2. ارزان ترین: Sorts products from cheapest to most expensive.
3. گران ترین: Sorts products from most expensive to cheapest.
- **Managing Cart**: The cart page displays the number of products added to the cart and calculate price and showing randomly statuses of payment with modal overlay.



