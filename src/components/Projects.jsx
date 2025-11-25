import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch GitHub repositories sorted by most recent commits
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mihretue/repos?sort=pushed&per_page=6"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        // Filter and format the repositories
        const formattedProjects = data
          .filter((repo) => !repo.fork) // Exclude forked repositories
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

  if (loading) {
    return (
      <Element name="project" className="section">
        <div className="mt-32 px-4 py-12">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-green-500">
              My Projects
            </h2>
            <p className="text-green-500 font-serif">
              Showcasing my most actively developed projects
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        </div>
      </Element>
    );
  }

  if (error) {
    return (
      <Element name="project" className="section">
        <div className="mt-32 px-4 py-12">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-green-500">
              My Projects
            </h2>
            <p className="text-red-500 font-serif">
              Error loading projects: {error}
            </p>
          </div>
        </div>
      </Element>
    );
  }

  return (
    <Element name="project" className="section">
      <div className="mt-32 px-4 py-12">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-green-500">
            My Projects
          </h2>
          <p className="text-green-500 font-serif">
            Showcasing my most actively developed projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-4">
                <h3 className="text-xl font-bold text-white truncate">
                  {project.name}
                </h3>
                {project.language && (
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    {project.language}
                  </span>
                )}
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>

                {/* Project Topics */}
                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{project.stars}</span>
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
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-900 transition-colors text-sm font-semibold">
                    View Code
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mihretue?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </Element>
  );
}
