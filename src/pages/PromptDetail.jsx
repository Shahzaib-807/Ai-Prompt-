// src/pages/PromptDetail.jsx
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import prompts from "../data/prompts";

function PromptDetail() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const prompt = prompts.find(
    (item) => item.id === Number(id)
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy prompt:", error);
    }
  };

  if (!prompt) {
    return (
      <div className="detail-page">
        <div className="not-found">
          <h1>Prompt Not Found</h1>

          <p>
            The prompt you're looking for doesn't exist.
          </p>

          <Link to="/" className="back-button">
            ← Back to Prompts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">

      <nav className="navbar">
        <Link to="/" className="logo">
          Prompt<span>Vault</span>
        </Link>

        <div className="nav-badge">
          AI Prompt Library
        </div>
      </nav>

      <main className="detail-container">

        <Link to="/" className="back-link">
          ← Back to Prompts
        </Link>

        <div className="detail-header">

          {/* INTEGRATED THUMBNAIL HERE */}
          <div className="detail-header-thumbnail">
            <img src={prompt.thumbnail} alt={prompt.title} />
          </div>

          <div className="detail-header-content">
            <div className="detail-icon">
              {prompt.type === "image" ? "🖼️" : "🎬"}
            </div>

            <div>
              <span className="detail-type">
                {prompt.type.toUpperCase()} PROMPT
              </span>

              <h1>{prompt.title}</h1>

              <p>{prompt.description}</p>
            </div>
          </div>

        </div>

        <div className="prompt-box">

          <div className="prompt-box-header">

            <span>
              YOUR PROMPT
            </span>

            <button
              className={`copy-button ${copied ? "copied" : ""}`}
              onClick={handleCopy}
            >
              {copied ? "✓ Copied!" : "📋 Copy Prompt"}
            </button>

          </div>

          <div className="prompt-text">
            {prompt.prompt}
          </div>

        </div>

      </main>

      <footer className="footer">
        AI Prompt Library • Create. Imagine. Generate.
      </footer>

    </div>
  );
}

export default PromptDetail;