# 🎨 Modern Portfolio Website

A stunning, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, beautiful gradients, and a modern design that showcases your work effectively.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions for a polished feel
- **Interactive Navigation**: Smooth scrolling between sections
- **Professional Sections**: Hero, About, Skills, Projects, and Contact sections
- **Social Integration**: Easy to add your social media links
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 Customization Guide

### Personal Information

Update the following in `src/App.jsx`:

1. **Your Name**: Replace "Your Name" in the hero section
2. **Title/Description**: Update the subtitle in the hero section
3. **About Me**: Modify the description in the About section
4. **Contact Information**: Update email, phone, and location
5. **Social Links**: Add your actual social media URLs

### Skills & Projects

1. **Skills**: Modify the skills arrays in the Skills section
2. **Projects**: Update the projects array with your actual projects
3. **Experience Stats**: Change the numbers in the About section

### Styling

1. **Colors**: The portfolio uses a purple-blue gradient theme. You can modify colors in `src/index.css`
2. **Fonts**: The portfolio uses Inter font. You can change this in `src/index.css`
3. **Animations**: Custom animations are defined in `src/App.css`

### Adding Your Projects

In the Projects section, update the projects array with your actual projects:

```javascript
{
  title: 'Your Project Name',
  description: 'Description of your project',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: '🛒' // You can use emojis or add actual images
}
```

### Adding Social Links

Update the social links array in the Contact section:

```javascript
{ name: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' }
```

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Custom animations and styles
├── index.css        # Tailwind CSS import and global styles
└── main.jsx         # Application entry point
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: ES6+ features
- **CSS3**: Custom animations and effects

## 🎨 Design Features

- **Glass-morphism**: Semi-transparent backgrounds with blur effects
- **Gradient Backgrounds**: Beautiful purple-blue gradients
- **Smooth Scrolling**: CSS scroll-behavior for smooth navigation
- **Hover Effects**: Interactive hover states on buttons and cards
- **Responsive Grid**: CSS Grid and Flexbox for responsive layouts
- **Custom Scrollbar**: Styled scrollbar to match the theme

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive typography
- Flexible grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

## 🚀 Deployment

To deploy your portfolio:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - **Netlify**: Drag and drop the `dist` folder
   - **Vercel**: Connect your GitHub repository
   - **GitHub Pages**: Use the `gh-pages` package

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy Coding! 🎉**
