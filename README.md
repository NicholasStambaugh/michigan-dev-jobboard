   # COMING SOON FOR MICHIGAN
   ![image](https://github.com/NicholasStambaugh/michigan-dev-jobboard/blob/main/public/Screenshot%202023-10-08%20225307.png))
   
   
   # What is miDev?

  The first job board for developers in Michigan. 
  
  Inspired by [jschimp](https://jschimp.com/), [railsdevs](https://railsdevs.com/), and [japan-dev](https://japan-dev.com/).

   ## Table of Contents

   - [Installation](#installation)
   - [Contributing](#contributing)
   - [License](#license)
   - [React-TS Help](#React)
   - [Roadmap](#Roadmap)

   ## Installation

   `git clone https://github.com/NicholasStambaugh/michigan-dev-jobboard`
   
   `npm install`
   
   `npm start`
   
   ### RECOMMENDED
   `yarn add`
   
   `yarn run dev`

   ## Contributing

   Fork first, please.

   ## License

   Apache License 2.0


## React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



# RoadMap
- [ ] User Authentication:
   - [ ] Implement a user registration and login system.
   - [ ] Users should be able to register, log in, and log out.
   - [ ] Consider using a package like passport.js for authentication.

      
- [ ] Job Posting:
   - [ ] Allow authenticated users to post new job listings.
   - [ ] Each job listing should have a title, description, location, and other relevant fields.
      
- [ ] Job Search:
   - [ ] Implement a search feature that allows users to search for jobs based on keywords, location, and other criteria.
 
- [ ] Job Application:
   - [ ] Allow users to apply for jobs directly through the platform.
   - [ ] Users should be able to upload their resume and/or fill out an application form.
      
- [ ] User Profiles:
   - [ ] Allow users to create and edit their own profiles.
   - [ ] Profiles can include information like a bio, skills, work experience, and a portfolio of work.

- [ ] Company Profiles:
   - [ ] Allow companies to create and edit their own profiles.
   - [ ] Company profiles can include information like a company description, location, and current job listings.

# Short Demo 10/8
[![]](https://github.com/NicholasStambaugh/michigan-dev-jobboard/blob/main/public/gif1-midev.gif)
