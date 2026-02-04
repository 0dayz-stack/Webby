import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState(
  localStorage.getItem("name") || ""
);
  
const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

React.useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);
  
 React.useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
  }, [name]);

  return (
    <div className="app container">
      <header>
        <h1>Webby — React Starter</h1>
        <p className="lead">Create, Build, React here.</p>
     <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>   
      </header>

      <section className="controls card">
        <label>
          Your name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
          />
        </label>

        <div className="counter">
          <p>
            Hello, <strong>{name || 'friend'}</strong>! Count is <strong>{count}</strong>.
          </p>
          <button onClick={() => setCount((c) => c + 1)}>Increase</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <footer className="footer">
        <small>Built for learning — have fun and be safe!</small>
      </footer>
    </div>
  );
}
