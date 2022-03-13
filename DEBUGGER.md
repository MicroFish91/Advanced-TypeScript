## Debugger

- FYI: node --inspect ./src/app.js => Opens up a socket on port 9229 for the debugger to listen on
- node --inspect-brk ./src/app.js => attaches debugger to start of the file

- Create launch protocol for debugger launch.json

  - Node.js attach

- For TypeScript add "sourceMaps": true, and maybe "restart": true for nodemon

- With example package.json script
- npm run debug --filePath=src/test.ts

- npm run debug-brk --filePath=src/test.ts
- for breakpoint debugging
