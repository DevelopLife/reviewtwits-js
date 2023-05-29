export default {
  input: ["lib/index.js"], // Replace 'main.js' with the entry point of your application
  output: {
    file: "bundle.js", // Replace 'bundle.js' with the desired name of the output file
    format: "iife",
    globals: {
      "state/index.js": "index_js",
    },
  },
};
