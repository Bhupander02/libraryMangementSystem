# 📚 BookHaven - Interactive Book Management System

A modern, responsive React application for browsing, searching, and managing book collections with persistent storage and cart functionality.

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-cyan?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.0-yellow?style=for-the-badge&logo=vite)

## ✨ Features

### 🎯 Core Functionality
- **Dynamic Book Catalog** - Browse through a curated collection of books with rich metadata
- **Advanced Search** - Real-time search filtering by book title with instant results
- **Category Filtering** - Filter books by categories: Science, Psychology, Drama, Self-Help, Fiction
- **Detailed Book Views** - Comprehensive book details with cover images, ratings, and descriptions
- **Shopping Cart System** - Add, remove, and manage book selections using Redux state management

### 🛠️ Management Tools
- **Add New Books** - Intuitive form to expand the catalog with validation:
  - Title & Author validation
  - Page count verification
  - Category selection from predefined list
  - Rating format validation (e.g., 8.5/10)
  - URL validation for cover images
  - Minimum description length enforcement
- **Smart Storage** - Hybrid data persistence combining mock data with user additions
- **Persistent State** - LocalStorage integration maintains your library across sessions

### 🎨 User Experience
- **Responsive Design** - Fully adaptive layout using Tailwind CSS
- **Modern UI** - Gradient backgrounds, hover effects, and smooth transitions
- **Error Handling** - Comprehensive form validation with user-friendly error messages
- **Route Management** - Seamless navigation with React Router v6

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone &lt;your-repository-url&gt;
   cd bookhaven
    git clone <your-repository-url>
   cd bookhaven

    Install dependencies
    bash
    Copy

    npm install

    Start the development server
    bash
    Copy

    npm run dev

    Open your browser
    Navigate to http://localhost:5173

Build for Production
bash
Copy

npm run build

📖 Usage Guide
Browsing Books

    Home Page - Landing page with navigation
    Browse Page (/browse) - View all books in a responsive grid layout
    Category Pages (/browse/:category) - Filter by specific genres

Managing Books

    Add Book (/add) - Click "Add New Book" and fill the form:
        Ensure rating follows the format X.X/10
        Description must be at least 20 characters
        Select from valid categories only
    Book Details (/book/:id) - Click any book card to view details and manage cart

Search Functionality

    Use the search bar on the browse page for real-time filtering
    Results update instantly as you type
    Case-insensitive title matching

Cart Operations

    Add to Cart - Available on book detail pages
    Remove Item - Remove specific books from cart
    Clear Cart - Empty entire cart in one action

🏗️ Project Structure
Copy

src/
├── components/
│   ├── App.jsx              # Root component with Redux Provider
│   ├── Book.jsx             # Book card component
│   ├── BookDetails.jsx      # Detailed book view with cart actions
│   ├── BookList.jsx         # Grid layout for book collections
│   ├── BrowsePage.jsx       # Category filtering page
│   ├── AddBook.jsx          # Form for adding new books
│   ├── Search.jsx           # Real-time search component
│   ├── Header.jsx           # Navigation header
│   ├── HomePage.jsx         # Landing page
│   ├── Contact.jsx          # Contact page
│   └── Error.jsx            # Error boundary
├── utils/
│   ├── bookStorage.js       # LocalStorage management & mock data merger
│   ├── mockdata.js          # Initial book dataset
│   ├── appStore.js          # Redux store configuration
│   └── cartSlice.js         # Redux cart slice
├── index.css                # Global styles
└── main.jsx                 # Application entry point

💾 Data Persistence
The application uses a sophisticated storage strategy:

    Initial Load: Populates LocalStorage with mock data on first visit
    Sync Strategy: Automatically detects and merges new mock data entries without overwriting user additions
    Port Isolation: Data is scoped per origin (localhost:5173 vs 5174 maintain separate instances)
    Reset Function: Call resetBooks() in browser console to restore original dataset

🛣️ Routes
Table
Copy
Route	Component	Description
/	HomePage	Landing page
/browse	BookList	All books grid
/browse/:category	BrowsePage	Filtered by category
/book/:id	BookDetails	Single book view
/add	AddBook	Add new book form
/contact	Contact	Contact information
🧪 Validation Rules
When adding new books, the following validations apply:

    Title: Required, non-empty string
    Author: Required, non-empty string
    Pages: Positive integer greater than 0
    Category: Must be one of: science, psychology, drama, self-help, fiction
    Rating: Format must match X/10 or X.X/10 (e.g., 8.5/10)
    Cover Image: Valid URL format required
    Description: Minimum 20 characters

🎨 Styling

    Framework: Tailwind CSS with custom configurations
    Design System:
        Dark theme with slate/gray color palette
        Blue accent colors for interactive elements
        Gradient backgrounds for premium feel
        Responsive breakpoints for mobile, tablet, and desktop