export default function handler(req, res) {
  // Demo response
  res.status(200).json({ 
    message: "Demo endpoint working!",
    timestamp: new Date().toISOString()
  });
}
