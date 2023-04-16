import React from "react";

const TitleScreenSlide = () => {
  return (
    <section>
      <h3>
        Introduksjon til <span className="cyan">funksjonell</span> programmering
      </h3>
      <div className="fragment">
        <em>
          ...med <strong>typescript</strong> og <strong>fp-ts</strong>
        </em>
      </div>
    </section>
  );
};

const TableOfContentsSlide = () => (
  <section>
    <h3>Agenda</h3>
    <ul>
      <li className="fragment">Litt historie</li>
      <li className="fragment">
        Hva er <span>funksjonell</span> programmering?
      </li>
      <li className="fragment">
        Basics
        <ul>
          <li className="toc-small">(Composition, Higher Order Functions, Partial Application...)</li>
        </ul>
      </li>
      <li className="fragment">
        Monads
        <ul>
          <li className="toc-small">(Option, Either, Task, TaskEither...)</li>
        </ul>
      </li>
      <li className="fragment">Semigroup</li>
      <li className="fragment">Monoids</li>
      <li className="fragment">Eq</li>
      <li className="fragment">Ord</li>
      <li className="fragment">
        DEMO: <span>funksjonelt</span> GraphQL API
      </li>
    </ul>
  </section>
);

const HistorySlide = () => (
  <section>
    <div>
      <h3>Litt historie</h3>
      <ul>
        <li className="fragment">1930 - Lambda calculus</li>
        <li className="fragment">1945 - Første programmerbare datamaskinen</li>
        <li className="fragment">1958 - Functional programming</li>
        <li className="fragment">1966 - Object oriented programming</li>
        <li className="fragment">1968 - Structured programming</li>
      </ul>
    </div>
  </section>
);

const WhatIsFunctionalProgrammingSlide = () => (
  <section>
    <section>
      <h3>Hva er funksjonell programmering?</h3>
      <div className="fragment">First class functions</div>
      <div className="fragment">Immutable data structures</div>
      <div className="fragment">Composition</div>
    </section>
    <section>
      <div className="flex space-evenly">
        <div className="flex-1">
          <h3>OO patterns</h3>
          <ul className="unstyled-list">
            <li className="fragment">Factory pattern</li>
            <li className="fragment">Singleton pattern</li>
            <li className="fragment">Facade pattern</li>
            <li className="fragment">Decorator pattern</li>
            <li className="fragment">Composite pattern</li>
            <li className="fragment">Strategy pattern</li>
            <li className="fragment">Visitor pattern</li>
            <li className="fragment">Command pattern</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3>FP patterns</h3>
          <ul className="unstyled-list">
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
            <li className="fragment">Functions</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
);

export const BasicsSlide = () => (
  <section>
    <section>
      <h3>Basics</h3>
    </section>
    <section data-markdown="markdown/Concepts.md"></section>
  </section>
);

export const AdvancedSlide = () => (
  <section>
    <h3>Examples</h3>
  </section>
);

export const DemoSlide = () => (
  <section>
    <h3>Demo</h3>
  </section>
);

export const ALL_SLIDES = [
  TitleScreenSlide,
  TableOfContentsSlide,
  HistorySlide,
  WhatIsFunctionalProgrammingSlide,
  BasicsSlide,
  AdvancedSlide,
  DemoSlide,
];
