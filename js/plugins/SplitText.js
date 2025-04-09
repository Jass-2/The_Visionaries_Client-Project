// SplitText.js — ESM version
// Make sure to import gsap before this in your main script
let _coreInitted, gsap, _toArray;

function _initCore(core) {
  if (_coreInitted) return;

  gsap = core || window.gsap;
  if (!gsap) {
    console.warn("GSAP is required for SplitText");
    return;
  }

  _toArray = gsap.utils.toArray;
  _coreInitted = true;
}

class SplitText {
  constructor(elements, vars = {}) {
    _initCore();
    this.elements = _toArray(elements);
    this.vars = vars;
    this.chars = [];
    this.words = [];
    this.lines = [];

    this.split(vars);
  }

  split(vars = this.vars) {
    this.revert(); // reset if already split
    this.vars = vars;

    this.elements.forEach((element) => {
      const text = element.textContent;
      const chars = text.split("");
      const words = text.split(" ");
      const charEls = chars.map((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char;
        return span;
      });
      const wordEls = words.map((word) => {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = word;
        return span;
      });

      // Clear and re-append
      element.innerHTML = "";
      if (vars.type?.includes("words")) {
        wordEls.forEach((word, i) => {
          element.appendChild(word);
          if (i < wordEls.length - 1) element.appendChild(document.createTextNode(" "));
        });
        this.words.push(...wordEls);
      }
      if (vars.type?.includes("chars")) {
        element.innerHTML = "";
        charEls.forEach((charEl) => element.appendChild(charEl));
        this.chars.push(...charEls);
      }
    });

    this.isSplit = true;
    return this;
  }

  revert() {
    if (!this.isSplit) return;
    this.elements.forEach((el) => {
      el.textContent = el.textContent; // quick reset
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.isSplit = false;
  }
}

SplitText.register = _initCore;
SplitText.version = "lite-esm-1.0.0";

export { SplitText };
