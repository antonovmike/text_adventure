import { createApp } from "./server.js";
const app = createApp("plotline.yaml");

app.listen(3000, () => {
  console.log("Game API running on http://localhost:3000");
});
