export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nombre: "Miguel" },
    { id: 2, nombre: "Ana" }
  ]);
}