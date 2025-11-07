import { useState } from "react";
import axios from "axios";

const GeneratePdfButton = ({ reportId }) => {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/linkedin/generate-pdf/${reportId}`);
      setPdfUrl(res.data.pdfUrl);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          border: "none",
        }}
      >
        {loading ? "Generating..." : "Generate PDF"}
      </button>

      {pdfUrl && (
        <div style={{ marginTop: "10px" }}>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
  View PDF
</a>

        </div>
      )}
    </div>
  );
};

export default GeneratePdfButton;