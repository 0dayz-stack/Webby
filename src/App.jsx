import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');

  return (
    <div className="app container">
      <header>
        <h1>Webby — React Starter</h1>
        <p className="lead">A small playground to learn React and build things.</p>
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
