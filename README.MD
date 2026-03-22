# Text Adventure Demo

A simple text‑based adventure game engine built with **Node.js + TypeScript** on the backend and **React + Vite** on the frontend.  
The project demonstrates how to structure interactive stories using YAML files, where each node contains text, options, and links to other nodes.

---

## Features

- Backend game engine in Node.js + TypeScript
- Story content stored in `server/plotline.yaml`
- REST API for retrieving current state and making choices
- Frontend client in React + Vite
- CLI or browser play modes

---

## Project Structure

```
server/        # Backend (Node.js + TypeScript)
  src/         # Source code
  plotline.yaml# Story definition
  __tests__/   # Jest tests

frontend/      # Frontend (React + Vite)
  src/         # React components
```

---

## Requirements

- Node.js v20+ (ESM support required)
- npm (or yarn/pnpm)
- TypeScript

---

## Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run in development mode (auto‑reload with nodemon):

   ```bash
   npm run dev
   ```

   Or run directly with `tsx`:

   ```bash
   npx tsx src/index.ts
   ```

4. Build and run compiled code:

   ```bash
   npm run build
   npm start
   ```

5. Test API endpoints:
   ```bash
   curl http://localhost:3000/state
   curl -X POST http://localhost:3000/choice -H "Content-Type: application/json" -d '{"index":0}'
   ```

---

Curl request from terminal:

```bash
curl -X POST http://127.0.0.1:3000/choice -H "Content-Type: application/json" -d '{"index":0}
```

Response example:

```bash
{"id":"msg1","branch":"path_1","text":"Message 1","options":[{"label":"Option 4","next":"msg3"}, {"label":"Option 3","next":"death"}]}
```

---

## Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## Writing Stories

- All story nodes are defined in `plotline.yaml`.
- Each node must have:
  - `id`: unique identifier
  - `branch`: storyline branch name
  - `text`: message shown to the player
  - `options`: list of choices with `label` and `next`

### Example

```yaml
start:
  id: start
  branch: init
  text: "Initial text"
  options:
    - label: "Option 1"
      next: msg1
    - label: "Option 2"
      next: msg2
    - label: "Option 3"
      next: death

msg1:
  id: msg1
  branch: path_1
  text: "Message 1"
  options: []
```

---

## Running Tests

Backend tests are located in `server/__tests__`.

Run all tests:

```bash
cd server
npm test
```

---

## Roadmap

- Add conditions and effects (inventory, health, flags)
- Support multiple YAML files for modular storylines
- Improve CLI client for terminal gameplay

```

```
