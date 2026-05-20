## Daily progress log
### 2 May 2026
* Creaetd a repo in Github
* Created a TypeScript repo
Followed https://sasangaedirisinghe.medium.com/setting-up-a-typescript-project-from-scratch-611689a270ae

### 3 May 2026
* Moved the Typescript project created on 2nd May to "typeScript_01" and confirmed it is all working as it should.
* Created a TypeScript project with React using vite `npm create vite@latest`

## 9 May 2026
* Recapped TypeScript types and interfaces
https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/


## 11 May 2026
* Added .nvmrc using the command `node -v > .nvmrc`. This is to let other developers know which node version this project is using.
* Tried to create Typescirpt + express project using vite. Learned that the Vite runs code on broswer whereas express requires node runtime - separating the file and deployment helps. i.e. Frontend - run `npm run dev` via Vite, but then the epxress needs to be run using `node server.ts` (or whatever the file name for the express file is.)

## 12 May 2026
* Created a fodler `typescript_06_express` and initialized a `package.json` file using `npm init -y`.  
Changed the `"type"` to `module` to specify that this project uses ES Modules.
* Leaned difference between ts-node and tsx. TLDR; Both translate ts files to js files.  

| Aspect | ts-node | tsx |
|---|---|---|
| Primary approach | Runs TypeScript through the TypeScript compiler/runtime pipeline [1][2] | Runs TypeScript using esbuild-based transpilation [1][2] |
| Startup speed | Slower [1][2] | Faster [1][2] |
| Type checking | Can perform type checking during execution [2][3] | Does not type-check by itself [2] |
| Setup | Often needs more configuration, especially for ESM [1][4] | Usually minimal or zero-config [1][3] |
| ESM support | Works, but can require extra flags or config in some setups [1][2] | Generally smoother ESM experience [1][2] |
| CommonJS support | Supported [1][2] | Supported [1][2] |
| Best for | Projects that want TypeScript compiler-aligned behavior and runtime type checking [1][2] | Scripts, dev tooling, and modern Node projects that value speed and simplicity [1][3] |
| Typical tradeoff | More capability, less speed [1][2] | More speed, less runtime type checking [1][2] |

* Added prettier config and prettier ignore for dist file.


# 13 May 2026
Working directory = typescirpt_06_express
* Added `.vscode` folder with `settings.json` and `extensions.json` for VS Code preferences and reccomendataions.

# 18 May 2026
* Added ESlint and `eslint.config.js`
* Added `.env` file

# 19 May 2026



Todo
* Adding tests with Vitest
* Use express to create some API endpoints (Read https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d#f20c)