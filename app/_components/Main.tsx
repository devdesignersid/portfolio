import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

/**
 * TODO: Automatic theme selection based on system preference.
 * TODO: Add favicon.
 */

export default function Main() {
  return (
    <main>
      <Introduction />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
