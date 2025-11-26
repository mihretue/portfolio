import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mihretue/repos?sort=pushed&per_page=20"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        const formattedProjects = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description available",
            url: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics || [],
            updated: new Date(repo.updated_at),
            created: new Date(repo.created_at),
            size: repo.size,
            has_pages: repo.has_pages,
          }));

        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Filter projects based on language/topic
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "with-demo") return project.homepage || project.has_pages;
    return (
      project.language?.toLowerCase() === filter.toLowerCase() ||
      project.topics.some(
        (topic) => topic.toLowerCase() === filter.toLowerCase()
      )
    );
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const languages = [
    ...new Set(projects.map((p) => p.language).filter(Boolean)),
  ];
  // const allTopics = [...new Set(projects.flatMap((p) => p.topics))].slice(
  //   0,
  //   10
  // );

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  if (loading) {
    return (
      <Element name="projects" className="section">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                  My Work
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Showcasing my most actively developed projects
              </p>
            </div>
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading amazing projects...</p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }

  if (error) {
    return (
      <Element name="projects" className="section">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Unable to Load Projects
                </h3>
                <p className="text-red-600 mb-4">{error}</p>
                <a
                  href="https://github.com/mihretue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                  View on GitHub
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }

  return (
    <Element name="projects" className="section">
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                My Work
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my latest work and open-source contributions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => {
                setFilter("all");
                setVisibleProjects(6);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === "all"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow"
              }`}>
              All Projects
            </button>
            <button
              onClick={() => {
                setFilter("with-demo");
                setVisibleProjects(6);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === "with-demo"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow"
              }`}>
              With Live Demo
            </button>
            {languages.slice(0, 4).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setFilter(lang);
                  setVisibleProjects(6);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === lang
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow"
                }`}>
                {lang}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-green-200">
                {/* Project Header with Gradient */}
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.language && (
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                          {project.language}
                        </span>
                      )}
                      <span className="text-white/80 text-sm">
                        Updated {project.updated.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Topics */}
                  {project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 4).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-xs rounded-full font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold">{project.forks}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {project.size} KB
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold group/link flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                    {(project.homepage || project.has_pages) && (
                      <a
                        href={
                          project.homepage ||
                          `https://mihretue.github.io/${project.name}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white text-center rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-semibold group/link flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / View All */}
          <div className="text-center">
            {visibleProjects < filteredProjects.length ? (
              <button
                onClick={loadMore}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Load More Projects ({filteredProjects.length - visibleProjects}{" "}
                remaining)
              </button>
            ) : (
              <a
                href="https://github.com/mihretue?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View All Projects on GitHub
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}
