
# 🍽️ Lostro — Restaurant Landing Page

A fully modular, single-page restaurant site built with **vanilla JavaScript** and **Webpack**, showcasing modern frontend practices without relying on frameworks.

## 🚀 Tech Highlights

* **Webpack**: Custom setup from scratch using `webpack.config.js`, with minimal loaders tailored to the project’s actual needs.
* **ES Modules**: Project structured using `import` and `export` statements to promote modular, maintainable code — each tab (Home, Menu, Contact) is isolated in its own file.
* **`.gitignore`**: Clean repo with `node_modules/` and `dist/` excluded to ensure lightweight version control.
* **DOM Manipulation with Vanilla JS**: All UI elements (including tab switching and dynamic page content) are created and rendered using pure JavaScript — no frameworks or libraries involved.
* **Advanced CSS**: Styled entirely with modern vanilla CSS, featuring:

  * `:hover`, `:nth-child` and other pseudo-classes
  * `transform`, `z-index`, custom box shadows, and layered effects
  * Clean layout using `flexbox` and responsive design principles


## 📂 Project Structure (as seen above)

```
src/
├── about.js
├── contact.js
├── home.js
├── index.js
├── style.css
├── template.html
dist/
node_modules/
.gitignore
webpack.config.js
package.json
README.md
```

## 🧪 Run Locally

```bash
npm install
npx webpack serve
```

Open `http://localhost:8080` in your browser.

---