export async function getState() {
  const res = await fetch("http://localhost:3000/state");
  return res.json();
}

export async function makeChoice(index: number) {
  const res = await fetch("http://localhost:3000/choice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index }),
  });
  return res.json();
}

export async function reset() {
  const res = await fetch("http://localhost:3000/reset", {
    method: "POST",
  });
  return res.json();
}
