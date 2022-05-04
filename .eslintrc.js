module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jquery: true,
        node: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
      "prefer-const": ["error", {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }],
      "no-new-object": "error",
      "no-array-constructor": "error",
      "object-shorthand": ["error", "always"],
      "quote-props": ["error", "as-needed"],
      "prefer-object-spread": "error",
      "prefer-destructuring": ["error", {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      }, {
        enforceForRenamedProperties: false
      }]
    }
}
