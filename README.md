# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## 🐳 Dockerization & ⚡ GitHub Actions CI/CD

### 🐳 Running with Docker Locally

1. **Build Docker Image**
```bash
docker build -t uttam-resume-app .
```

2. **Run Container**
```bash
docker run -d -p 8080:80 --name uttam-portfolio uttam-resume-app
```
Access the application at `http://localhost:8080`

3. **Or Run via Docker Compose**
```bash
docker-compose up -d --build
```
To stop the container: `docker-compose down`

---

### ⚡ GitHub Actions CI/CD Pipeline

The project includes an automated GitHub Actions CI/CD workflow ([`.github/workflows/docker-ci.yml`](file:///.github/workflows/docker-ci.yml)):

- **Automated Testing & Build**: Runs `npm ci` and `npm run build` on every push and pull request.
- **Docker Container Build**: Uses Docker Buildx with layer caching for ultra-fast builds.
- **Publish to GHCR**: Automatically builds and pushes Docker images to GitHub Container Registry (`ghcr.io/ucodecrafter/uttam-resume-app:latest`).

---

## 🌟 Customization

To personalize this portfolio:

1. **Update Personal Info**
   - Edit contact details in `Header.js`
   - Update about text in `About.js`

2. **Modify Experience**
   - Edit experience data in `Experience.js`
   - Add your own job titles and descriptions

3. **Add Projects**
   - Update project list in `Projects.js`
   - Include links to your GitHub repos

4. **Update Skills**
   - Modify skill categories in `Skills.js`
   - Adjust proficiency levels

5. **Change Colors**
   - Edit gradient values in `App.css`
   - Customize component styles in respective CSS files

## 🔧 Configuration

The app is configured to deploy to: `/uttam-resume-app/`
(Update `homepage` in `package.json` if deploying elsewhere)

## 📊 Performance

- **Optimized Build Size**: 95.35 kB (JS) + 4.06 kB (CSS) gzipped
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: GPU-accelerated with Framer Motion
- **SEO Ready**: Semantic HTML structure

## 🎨 Design Highlights

- **Color Scheme**: Purple/Blue gradient theme
- **Typography**: Professional sans-serif fonts
- **Layout**: Clean, modern card-based design
- **Interactions**: Smooth hover effects and transitions
- **Animations**: Fade-in, slide-in effects on scroll
- **Accessibility**: WCAG compliant, keyboard navigation support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Author

**Uttam Modi** - Full Stack Java Developer
- Email: [uttammodi.asn@gmail.com](mailto:uttammodi.asn@gmail.com)
- LinkedIn: [linkedin.com/in/uttammodi](https://linkedin.com/in/uttammodi)
- GitHub: [github.com/UCodeCrafter](https://github.com/UCodeCrafter)

## 📞 Contact & Portfolio

- **Portfolio**: [https://ucodecrafter.github.io/uttam-resume-app/](https://ucodecrafter.github.io/uttam-resume-app/)
- **Email**: uttammodi.asn@gmail.com
- **LinkedIn**: [Uttam Modi](https://linkedin.com/in/uttammodi)
- **GitHub**: [UCodeCrafter](https://github.com/UCodeCrafter)

## 📝 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Uttam Modi**

Last Updated: December 2024
