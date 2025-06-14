## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript development.
- **Vite**: As the build tool and development server.
- **Tailwind CSS**: For utility-first CSS styling.
- **ESLint & Prettier**: For code linting and formatting.

## How to Run the Project Locally

Follow these steps to get the project running on your computer:

1. **Clone the Repository**

   Open your terminal and run:
   ```sh
   git clone https://github.com/your-username/fromm-cl-prod.git
   cd fromm-cl-prod
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed (recommended version 16 or higher). Then run:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**

   The project uses a `.env` file for environment variables. You can find a sample or the actual `.env` file in the root directory. The main variable used is:

   ```
   VITE_API_URL=your_api_url_here
   ```

   - Replace `your_api_url_here` with the actual API endpoint you want to use.
   - If the `.env` file does not exist, create it in the root folder and add the variable above.

4. **Start the Development Server**

   Run:
   ```sh
   npm run dev
   ```

   This will start the app at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is busy).

## Environmental Variables

- **VITE_API_URL**: The base URL for your backend API.  
  Example:
  ```
  VITE_API_URL=https://api.example.com
  ```

  This variable is accessed in the code via `import.meta.env.VITE_API_URL` (see [src/assets/variables.ts](src/assets/variables.ts)).

---

Now anyone can clone, set up, and run the project easily!
