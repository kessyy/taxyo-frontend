# Taxyo

**Taxyo** is a web application that helps Ugandans estimate motor vehicle import taxes and browse car tax information based on Uganda Revenue Authority (herein URA) valuation guidelines.

The platform is designed to make car import costs **transparent, accessible, and easy to understand**, especially for first-time importers.

---

## Features

### Public (No Login Required)
- Calculate estimated car import tax
- Browse a list of cars with estimated tax values
- View car details (engine size, fuel type, CIF, tax estimate)

### Admin (Authentication Required)
- Add and manage car records
- Update tax-related details
- Manage valuation reference data  

---

## Tech Stack

### Frontend
- **Angular** (SCSS)
- **Bootstrap 5**
- **Bootstrap Icons**
- Modular, reusable component architecture

### Backend
- **PHP**
- **MySQL**
- REST API (custom, no official URA API currently available)

---

## Project Structure (Frontend)
src/app/
├── components/ # Shared UI components (buttons, header, footer, loader, etc.)
├── pages/ # Application pages (home, calculator, cars list, etc.)
├── authentication/ # Admin login & auth pages
├── services/ # Data services (API / dummy data)
├── models/ # TypeScript interfaces & models
├── guards/ # Route guards (admin access)
├── helpers/ # interceptors
├── assets/ # Images, icons, static files

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI

### Install Dependencies
- npm install

## Run Development Server
- ng serve
- Open: http://localhost:4200

### Important Notes
- Tax values shown are estimates, not official URA confirmations.
- URA does not provide a public API, so values are based on publicly available valuation rules.
- This project is not affiliated with URA.