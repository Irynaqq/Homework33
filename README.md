# Gulp + SCSS Project (Homework 33)

Проєкт створений як навчальне завдання з налаштування власного Gulp-конфігуратора.

## 🔧 Можливості збірки

✅ Компіляція SCSS → CSS  
✅ LiveReload через BrowserSync  
✅ Вендорні префікси (Autoprefixer)  
✅ Мінімізація стилів (CleanCSS)  
✅ Підтримка sourcemaps  
✅ Автоматичне копіювання HTML у dist/

## 📁 Структура проєкту
project/
│── src/
│ ├── scss/
│ │ └── style.scss
│ └── index.html
│
│── dist/ // генерується автоматично
│── gulpfile.js
│── package.json
│── .gitignore

## 🚀 Команди

|    Команда      |                 Опис                           |
|-----------------|------------------------------------------------|
| `npm run dev`   | запуск у режимі розробки (watch + live reload) |
| `npm run build` | збірка проєкту у dist/                         |

## 📦 Використані залежності

- gulp
- browser-sync
- gulp-sass + sass
- gulp-autoprefixer
- gulp-clean-css

---