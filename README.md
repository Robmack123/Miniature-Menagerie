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
   git clone https://github.com/Robmack123/Miniature-Menagerie
   ```

2. **Clone the Mock Database**:

   ```bash
   git clone https://github.com/Robmack123/Mini-api
   ```

3. **Navigate to the project directory**:

   ```bash
   cd miniature-menagerie
   ```

4. **Navigate to the project mock database**:

   ```bash
   cd mini-api
   ```

5. **Install the dependencies**:

   ```bash
   npm install
   ```

6. **Start the JSON Server (Mock API)**:

   ```bash
   json.server database.json -p 8088
   ```

7. **Start the React development server**:

   ```bash
   npm run dev
   ```

8. The application will run on `http://localhost:5173`, and the JSON Server will run on `http://localhost:8088`.

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
  ![alt text](image.png)
- Vault page with filters
 ![MiniatureMenagerie-GoogleChrome2024-10-1111-45-32-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/04f905c2-8d4b-4a6b-84cb-e1c74cad785f)

- Add miniature form
  ![MiniatureMenagerie-GoogleChrome2024-10-1111-55-21-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e8c2d81f-e586-431c-b404-7c7eb92eff61)
- Edit miniature form
   ![MiniatureMenagerie-GoogleChrome2024-10-1111-45-32-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/b288a5c7-a842-407d-a3e7-f8781752b45d)

---

## **Future Enhancements**

- Allow users to upload custom images for miniatures instead of using URLs.

