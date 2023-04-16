import React, { useEffect } from "react";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Notes from "reveal.js/plugin/notes/notes";
import Zoom from "reveal.js/plugin/zoom/zoom";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "./slides.css";
import "./github-dark.css";
// import "reveal.js/plugin/highlight/monokai.css";

export const Slides = ({ slides }) => {
  useEffect(() => {
    const reveal = new Reveal({
      autoAnimate: true,
      autoPlayMedia: true,
      controls: true,
      slideNumber: true,
      plugins: [Markdown, Highlight, Notes, Zoom],
    });

    reveal.initialize();
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {slides.map((Slide, i) => (
          <Slide key={i} />
        ))}
      </div>
    </div>
  );
};
