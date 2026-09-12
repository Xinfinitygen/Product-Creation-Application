# Product Creation Application

A simple React application for creating products through an API. The project includes two versions of the same product creation form: one built with React Hook Form and another built without a form library.

## Features

- Create products using the Product API
- Form validation based on the API requirements
- React Hook Form implementation
- No-form-library implementation
- Reusable form input, textarea, and button components
- API error and success handling
- Loading state during submission
- Responsive interface
- Featured and Published product options

## Product Fields
The form includes:

- Product name
- Description
- Price
- Compare-at price
- SKU
- Barcode
- Quantity
- Category
- Tags 
- Image URL
- Featured status
- Published status 

## Form Validation

The application validates product information before sending it to the API.

Validation includes:

- Required product name
- Product name character limit
- Required price
- Non-negative price
- Non-negative compare-at price
- Non-negative quantity
- Appropriate data type conversion before submission

## Form Versions

### React Hook Form
This version uses ```react-hook-form``` to manage form state, validation, and submission. 

### Without Form Library

This version manages form state and validation manually using React's ```useState``` and event handlers.

`Both versions communicate with the same API and provide the same product creation functionality. `  

## Technologies Used

- React
- JavaScript
- Vite
- React Hook Form
- CSS
- REST API

## Project Structure

```text
src/
├── components/
│   ├── FormButton.jsx
│   ├── FormInput.jsx
│   └── FormTextarea.jsx
│
├── forms/
│   ├── productFormWithLibrary.jsx
│   └── productFormWithoutLibrary.jsx
│
├── pages/
│   └── productCreation.jsx
│
├── services/
│   └── productApi.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository
` git clone <your-repository-url> `

### 2. Navigate into the project
` cd Product-Creation-Application`

### 3. Install dependencies
`npm install`

### 4. Start the development server
`npm run dev`

The application will then be available through the local development URL provided by Vite.

## Build for production
To create a production build:

`npm run build`

## API 
The application uses the Product API to create products: 

- [Product API](https://api.oluwasetemi.dev/ "https://api.oluwasetemi.dev/")

## Online IDE

[Open in StackBlitz](https://stackblitz.com/github/Xinfinitygen/Product-Creation-Application)

## Live Demo

[View the live application](https://xinfinitygen.github.io/Product-Creation-Application/) 