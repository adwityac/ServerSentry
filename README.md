<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Server Sentry - Game Performance Dashboard</h1>
    <p><strong>Server Sentry</strong> is a real-time game performance monitoring dashboard designed to provide insights into server health, player activity, and game performance metrics. Built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, this project leverages modern web technologies to deliver a responsive and intuitive user experience.</p>

  <h2>Live Demo</h2>
    <p>Check out the live demo of Server Sentry here:</p>
    <p>👉 <a href="https://serversentry.netlify.app/" target="_blank">https://serversentry.netlify.app/</a></p>

  <h2>Features</h2>
    <ul>
        <li><strong>Real-Time Metrics</strong>: Monitor key performance indicators such as FPS, latency, memory usage, active players, and server load.</li>
        <li><strong>Interactive Charts</strong>: Visualize performance trends over time using dynamic line charts powered by <strong>Recharts</strong>.</li>
        <li><strong>Server Status Badge</strong>: Quickly assess server health with a color-coded status badge.</li>
        <li><strong>Responsive Design</strong>: Optimized for both desktop and mobile devices.</li>
        <li><strong>Simulated Data</strong>: Real-time data updates are simulated for demonstration purposes.</li>
    </ul>

  <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend</strong>: React, TypeScript, Tailwind CSS</li>
        <li><strong>Charts</strong>: Recharts</li>
        <li><strong>Icons</strong>: Lucide React</li>
        <li><strong>Build Tool</strong>: Vite</li>
        <li><strong>Linting</strong>: ESLint</li>
        <li><strong>Styling</strong>: PostCSS, Autoprefixer</li>
    </ul>

  <h2>Project Structure</h2>
    <pre>
serversentry/
├── src/
│   ├── components/          # Reusable UI components
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point for the React app
│   └── index.css            # Tailwind CSS styles
├── public/                  # Static assets
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript Node configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Project dependencies and scripts
    </pre>

  <h2>Getting Started</h2>
    <p>Follow these steps to set up the project locally:</p>

  <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v16 or higher)</li>
        <li>npm or yarn</li>
    </ul>

  <h3>Installation</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/adwityac/serversentry.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd serversentry</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
        <li>Open your browser and visit <code>http://localhost:5173</code>.</li>
    </ol>

  <h2>Scripts</h2>
    <ul>
        <li><code>npm run dev</code>: Start the development server.</li>
        <li><code>npm run build</code>: Build the project for production.</li>
                <li><code>npm run lint</code>: Run ESLint to check for code issues.</li>
        <li><code>npm run preview</code>: Preview the production build locally.</li>
    </ul>

  <h2>Contributing</h2>
    <p>Contributions are welcome! If you'd like to contribute, please follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch for your feature or bugfix.</li>
        <li>Commit your changes.</li>
        <li>Submit a pull request.</li>
    </ol>



  <h2>Acknowledgements</h2>
    <ul>
        <li><a href="https://vitejs.dev/" target="_blank">Vite</a> for the fast build tool.</li>
        <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> for the utility-first CSS framework.</li>
        <li><a href="https://recharts.org/" target="_blank">Recharts</a> for the charting library.</li>
        <li><a href="https://lucide.dev/" target="_blank">Lucide React</a> for the icons.</li>
    </ul>

  <h2>Happy Monitoring! 🚀</h2>
</body>
</html>
        
