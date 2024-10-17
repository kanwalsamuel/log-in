# Blackstone Central Campus Login Page

## Project Overview

This project is a **Login Page Prototype** for the Blackstone Central campus management app. The page is designed to match the branding of **Blackstone School of Law & Business** and **University of London**. The login page includes the following features:

- Modern UI/UX design with responsive layout
- Role-based redirection (Admin and Student login)
- Dark mode toggle for improved UX
- Loading spinner during login process
- Error message for invalid login attempts
- Mobile responsiveness

## Technologies Used

- **HTML**: For the structure and content.
- **CSS**: For styling, including responsive design and dark mode.
- **JavaScript**: For form validation, role-based redirection, and interactivity (spinner, dark mode toggle).
- **Optional Backend**: Can be added using Node.js/Express.js or a JSON file for mock authentication (not implemented in this version).

## Project Features

### 1. **UI/UX Design**
- Designed with modern aesthetics using the brand colors of Blackstone and University of London.
- Input fields with placeholders, tooltips, and error messages for a user-friendly experience.
- **Dark mode** toggle added for improved user comfort.

### 2. **Role-Based Redirection**
- Users can log in as either an **Admin** or **Student**.
- After successful login, the user is redirected to their respective dashboard:
  - Admins are redirected to `admin.html`
  - Students are redirected to `student.html`

### 3. **Spinner for Loading**
- A spinner is displayed during the login process to indicate the loading state.

### 4. **Responsive Design**
- The page is fully responsive, adapting seamlessly to both desktop and mobile screens.

### 5. **Optional Backend Authentication (Not Implemented)**
- Mock authentication can be handled using backend technologies like Node.js with Express.js and a JSON file.

## How to Run the Project

1. **Clone the repository**:
git clone https://github.com/yourusername/blackstone-campus-login.git


2. **Open the HTML file**:
- Navigate to the project folder and open `index.html` in your browser.

3. **Optional Backend Setup**:
- If implementing backend authentication, install Node.js and Express.js.
- Run the server using:
  ```
  node server.js
  ```

## How to Use the Dark Mode Toggle

- Click the **moon icon** at the top right corner of the page to toggle between light and dark mode. The design will switch to dark mode for better visibility in low-light environments.

## Challenges & Solutions

- **Challenge**: Implementing the role-based routing without backend functionality.
- **Solution**: Used JavaScript for front-end role validation and redirection based on selected roles (Admin/Student).

- **Challenge**: Ensuring the login page was mobile responsive.
- **Solution**: Applied CSS media queries to make the layout responsive on various screen sizes.

## AI Tools Used

- **GitHub Copilot**: Assisted in generating HTML structure and form validation logic.
- **ChatGPT**: Helped refine the design and troubleshoot specific JavaScript and CSS issues.

## Future Enhancements (Optional)
- **Backend Integration**: Add a Node.js or Express.js backend to handle real authentication.
- **Database**: Store user credentials securely in a database like MongoDB or SQLite for better scalability.
- **Form Validation**: Improve form validation with error messages for all fields, such as password strength, etc.

## License

This project is open-source and available under the MIT License.

---
Thankyou!

