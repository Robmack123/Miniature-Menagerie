# **Miniature Menagerie**

### **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## **Introduction**

**Miniature Menagerie** is an application designed for users to catalog, view, and manage their collection of miniatures. Users can add miniatures to their vault, filter by class, species, size, and painted status, and even search for specific miniatures by name. It allows for a personalized and organized way to track and display DnD or other tabletop miniatures.

---

## **Features**

- User authentication with unique user vaults.
- Add new miniatures with attributes such as name, species, class, size, and painted status.
- Filter miniatures by species, class, size, and painted status.
- Search for miniatures by name using a dynamic search bar.
- Pagination to browse miniatures in a vault efficiently.
- Edit or delete existing miniatures.
- Detailed miniature view with class, species, size, and image.

---

## **Technologies Used**

- **Frontend:**

  - React.js (Hooks and State Management)
  - CSS (Flexbox, Grid, Media Queries for responsiveness)

- **Backend:**

  - JSON Server (Mock database for miniatures, users, classes, species, sizes)

- **Additional Libraries:**
  - Fuse.js (for fuzzy searching in the vault)
  - React Router (for navigation and route management)

---

## **Setup and Installation**

### **Prerequisites**

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) installed on your machine.

### **Steps:**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/miniature-menagerie.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd miniature-menagerie
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the JSON Server (Mock API)**:

   ```bash
   npm run server
   ```

5. **Start the React development server**:

   ```bash
   npm start
   ```

6. The application will run on `http://localhost:3000`, and the JSON Server will run on `http://localhost:8088`.

---

## **Usage**

1. **Register/Login**: Users can create an account or log in with their credentials to access their vault.
2. **Add Miniatures**: Once logged in, users can add new miniatures with various attributes and upload images.
3. **Search & Filter**: Users can search miniatures by name or filter by attributes like class, species, and painted status.
4. **Pagination**: Users can navigate through multiple pages if their vault exceeds the number of miniatures shown per page.
5. **Edit/Delete Miniatures**: Users can update or remove miniatures from their vault.

---

## **Screenshots**

Include a few screenshots here showcasing key parts of your project such as:

- Homepage
- Vault page with filters
- Add miniature form
- Edit miniature form
- Search functionality in action

---

## **Future Enhancements**

- Allow users to upload custom images for miniatures instead of using URLs.
- Implement user profiles with additional settings and preferences.
- Add a feature for users to create custom tags for miniatures.
- Introduce an option to share vaults publicly or privately with other users.
