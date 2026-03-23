const host = "http://localhost:3000/";

export async function getState() {
  const res = await fetch(`${host}state`);
  return res.json();
}

export async function makeChoice(index: number) {
  const res = await fetch(`${host}choice`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index }),
  });
  return res.json();
}

export async function reset() {
  const res = await fetch(`${host}reset`, {
    method: "POST",
  });
  return res.json();
}
