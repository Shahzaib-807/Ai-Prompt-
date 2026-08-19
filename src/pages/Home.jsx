// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import prompts from "../data/prompts";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const searchTerm = search.toLowerCase().trim();

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchTerm) ||
      prompt.description.toLowerCase().includes(searchTerm) ||
      prompt.prompt.toLowerCase().includes(searchTerm);

    const matchesFilter =
      filter === "all" || prompt.type === filter;

    return matchesSearch && matchesFilter;
  });

  const imagePrompts = filteredPrompts.filter(
    (prompt) => prompt.type === "image"
  );

  const videoPrompts = filteredPrompts.filter(
    (prompt) => prompt.type === "video"
  );

  return (
    <div className="home">

      {/* NAVBAR */}

      <nav className="navbar">

        <Link to="/" className="logo">
          Prompt<span>Vault</span>
        </Link>

        <div className="nav-badge">
          AI Prompt Library
        </div>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-badge">
          ✨ Curated AI Prompts
        </div>

        <h1>
          Create Better with
          <br />
          <span>AI Prompts</span>
        </h1>

        <p>
          Explore powerful prompts for AI image and video creation.
          Find the perfect prompt, open it, and copy it with one click.
        </p>


        {/* SEARCH */}

        <div className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              type="button"
            >
              ×
            </button>
          )}

        </div>


        {search.trim() && (
          <div className="search-count">
            {filteredPrompts.length} prompt
            {filteredPrompts.length !== 1 ? "s" : ""} found
          </div>
        )}

      </section>


      {/* FILTER BUTTONS */}

      <div className="filter-container">

        <button
          className={`filter-button ${
            filter === "all" ? "active" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          ✨ All
        </button>

        <button
          className={`filter-button ${
            filter === "image" ? "active" : ""
          }`}
          onClick={() => setFilter("image")}
        >
          🖼️ Image
        </button>

        <button
          className={`filter-button ${
            filter === "video" ? "active" : ""
          }`}
          onClick={() => setFilter("video")}
        >
          🎬 Video
        </button>

      </div>


      {/* IMAGE PROMPTS */}

      {(filter === "all" || filter === "image") && (
        <section className="prompt-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                IMAGE AI
              </span>

              <h2>
                Image Creation Prompts
              </h2>

            </div>

            <p>
              Powerful prompts for stunning AI images.
            </p>

          </div>


          {imagePrompts.length > 0 ? (

            <div className="prompt-grid">

              {imagePrompts.map((prompt) => (

                <Link
                  to={`/prompt/${prompt.id}`}
                  className="prompt-card"
                  key={prompt.id}
                >

                  {/* THUMBNAIL INTEGRATION */}
                  <div className="prompt-card-thumbnail">
                    <img src={prompt.thumbnail} alt={prompt.title} />
                  </div>

                  <div className="prompt-card-top">

                    <div className="card-icon">
                      🖼️
                    </div>

                    <span className="prompt-type">
                      IMAGE
                    </span>

                  </div>


                  <h3>
                    {prompt.title}
                  </h3>


                  <p>
                    {prompt.description}
                  </p>


                  <div className="view-prompt">
                    View Prompt <span>→</span>
                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="no-results">

              <div className="no-results-icon">
                🔍
              </div>

              <h3>
                No image prompts found
              </h3>

              <p>
                Try searching with a different keyword.
              </p>

            </div>

          )}

        </section>
      )}


      {/* VIDEO PROMPTS */}

      {(filter === "all" || filter === "video") && (
        <section className="prompt-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                VIDEO AI
              </span>

              <h2>
                Video Creation Prompts
              </h2>

            </div>

            <p>
              Cinematic prompts for creative AI videos.
            </p>

          </div>


          {videoPrompts.length > 0 ? (

            <div className="prompt-grid">

              {videoPrompts.map((prompt) => (

                <Link
                  to={`/prompt/${prompt.id}`}
                  className="prompt-card"
                  key={prompt.id}
                >

                  {/* THUMBNAIL INTEGRATION */}
                  <div className="prompt-card-thumbnail">
                    <img src={prompt.thumbnail} alt={prompt.title} />
                  </div>

                  <div className="prompt-card-top">

                    <div className="card-icon">
                      🎬
                    </div>

                    <span className="prompt-type video">
                      VIDEO
                    </span>

                  </div>


                  <h3>
                    {prompt.title}
                  </h3>


                  <p>
                    {prompt.description}
                  </p>


                  <div className="view-prompt">
                    View Prompt <span>→</span>
                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="no-results">

              <div className="no-results-icon">
                🔍
              </div>

              <h3>
                No video prompts found
              </h3>

              <p>
                Try searching with a different keyword.
              </p>

            </div>

          )}

        </section>
      )}


      {/* FOOTER */}

      <footer className="footer">
        AI Prompt Library • Create. Imagine. Generate.
      </footer>

    </div>
  );
}

export default Home;