'use client';

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const vibes = [
  "creative energy",
  "bold experiments",
  "curious questions",
  "playful sparks",
  "fearless iteration",
];

export default function Home() {
  const [focus, setFocus] = useState(0);
  const [name, setName] = useState("Arena");

  const message = useMemo(
    () =>
      `Hi ${name || "friend"} — let's turn ${vibes[focus]} into something unforgettable.`,
    [focus, name],
  );

  const nextFocus = () => {
    setFocus((prev) => (prev + 1) % vibes.length);
  };

  return (
    <main className={styles.page}>
      <div className={styles.backdrop} />
      <section className={styles.hero}>
        <header className={styles.header}>
          <span className={styles.tag}>hi arena</span>
          <h1 className={styles.title}>
            A bright hello to the boldest room on the internet.
          </h1>
          <p className={styles.subtitle}>{message}</p>
        </header>

        <div className={styles.panel}>
          <label className={styles.label} htmlFor="name">
            Who&apos;s waving back?
          </label>
          <div className={styles.controlRow}>
            <input
              id="name"
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Type your name"
              spellCheck={false}
            />
            <button className={styles.button} type="button" onClick={nextFocus}>
              Spin vibe
            </button>
          </div>
          <p className={styles.hint}>
            Currently vibing on <strong>{vibes[focus]}</strong>
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Signal</h2>
          <p>Share one sharp observation today. Arena thrives on crisp insights.</p>
        </article>
        <article className={styles.card}>
          <h2>Support</h2>
          <p>Back a fellow explorer. A kind word or idea boost goes a long way.</p>
        </article>
        <article className={styles.card}>
          <h2>Stretch</h2>
          <p>Try something wild. Prototype fast, laugh at the bugs, learn louder.</p>
        </article>
      </section>
    </main>
  );
}
