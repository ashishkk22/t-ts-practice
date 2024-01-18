declare global {
  interface Window {
    makeGreeting: () => string;
  }
}

const greeting = window.makeGreeting();

console.log(greeting); // Output: Hello

export {};
