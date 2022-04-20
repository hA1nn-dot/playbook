# Issue with SyntaxError: missing ) after argument list when execute npm test

When run the test appear this issue in CLI due to an error configuration.

The default config tries to run the sh shell script of jest as a node program.

```Json
"scripts": {
    "test": "node --experimental-vm-modules ./node_modules/.bin/jest"
  },

//Instead, we can skip the sh jest script and run directly the jest nodejs script.
"scripts": {
    "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"
  },

```

Pagina de apoyo [Link](https://dev.to/elpddev/debug-jest-spec-in-vscode-error-missing-after-argument-list-1p3b)
