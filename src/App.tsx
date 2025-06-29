import React from 'react';
import Navbar from './components/Navbar';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="home">
          <h1>Hi, welcome to my website!</h1>
          <h2>I'm Justin Kam</h2>
          <p>
            A passionate developer learning React, TypeScript, and modern web technologies.
          </p>
        </section>

        <section id="blog" className={styles.section}>
          <h3>Blog</h3>
          <p>Coming soon...</p>
        </section>

        <section id="contact" className={styles.section}>
          <h3>Contact Me</h3>
          <p>Email: kamjustin@gmail.com</p>
        </section>
      </main>
    </>
  );
};

export default App;
