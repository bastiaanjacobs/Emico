import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const signatureHTML = `
<table style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
  <tr><td><strong>${name}</strong></td></tr>
  <tr><td>${title}</td></tr>
  <tr><td>Email: <a href="mailto:${email}">${email}</a></td></tr>
  <tr><td>Phone: ${phone}</td></tr>
</table>
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signatureHTML);
    alert("HTML copied to clipboard!");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Email Signature Generator</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      />

      <h2>Generated HTML:</h2>
      <textarea
        value={signatureHTML}
        readOnly
        style={{ width: "100%", height: "150px", padding: "1rem" }}
      />
      <button
        onClick={copyToClipboard}
        style={{ margin: "1rem 0", padding: "0.5rem 1rem" }}
      >
        Copy HTML
      </button>

      <h2>Preview:</h2>
      <div dangerouslySetInnerHTML={{ __html: signatureHTML }} />
    </div>
  );
}

export default App;
