import React from "react";
import ReactDOM from "react-dom/client";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  body: {
    height: "100dvh",
    width: "100%",
  },
  bg: {
    position: "fixed",
    inset: 0,
    backgroundImage: "url('assets/image.avif')",
    backgroundSize: "cover",
    zIndex: 10,
    "::before": {
      content: '""',
      position: "absolute",
      backgroundImage: "url('assets/splash.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mixBlendMode: "difference",
      zIndex: 11,
      inset: 0,
    },
    "::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      zIndex: 12,
      backgroundImage: "linear-gradient(to right, transparent, #fff3, transparent)",
      opacity: 0,
    },
    ":hover::after": {
      animationName: {
        "0%": { opacity: 1, transform: "translateX(-100%)" },
        "100%": { opacity: 1, transform: "translateX(100%)" },
      },
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationFillMode: "both",
    },
  },
});

function App() {
  return (
    <div {...stylex.props(styles.body)}>
      <section {...stylex.props(styles.bg)} />
    </div>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
