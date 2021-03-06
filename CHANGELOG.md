## Panda Clouds - ESLint Changelog

### 1.3.0
- disabled 'camelCase' and 'newline-per-chained-call' because there are lots of exceptions to these rules

### 1.2.0
- made 'no-unused-vars' a warning unless prod

### 1.1.0
- added 'es6' env
- silenced console, debugger, no-disabled-tests, and no-focused-tests unless production

### 1.0.0
- added no-undef
- added camelcase
- added new-cap
- added newline-per-chained-call

### 0.9.0

- disallowed 'done' in favor of async/await

### 0.8.0

- disabled consistent-return so we could return promises from if statements

### 0.7.0

- allowed myVar + ' (' + otherVar + ') '

### 0.6.0

- operator-linebreak to 'after'

### 0.5.0

- removed jest/no-hooks

### 0.4.0

- bumped to ES9
- added async/await rules

### 0.3.0

- Allowed focused tests EXPECT in production

### 0.2.0

- Allowed disabled tests EXPECT in production
- turned off 'jest/no-test-callback' and 'jest/valid-describe'

### 0.1.0

- Initial Commit
