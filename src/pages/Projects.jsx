import { projects } from '../data/projects'
import { useMemo } from 'react';

// Group projects by category
const groupProjectsByCategory = (projects) => {
  const grouped = {};
  projects.forEach((project) => {
    const cat = project.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(project);
  });
  return grouped;
};

// Category descriptions
const categoryDescriptions = {
  'ERP': 'Enterprise Resource Planning systems for business management and analytics.',
  'Full Stack': 'End-to-end applications with both frontend and backend.',
  'Backend': 'Server-side systems, APIs, and infrastructure.',
  'Education': 'Platforms for learning, teaching, and online assessments.',
  'Business': 'Solutions for business management, analytics, and growth.',
  'Other': 'Miscellaneous projects and experiments.'
};

const categoryIcons = {
  'ERP': '⚙️',
  'Full Stack': '🖥️',
  'Backend': '🗄️',
  'Education': '📚',
  'Business': '📊',
  'Other': '✨'
};

const Projects = () => {
  const groupedProjects = groupProjectsByCategory(projects);
  const totalProjects = projects.length;
  const categories = useMemo(() => Object.entries(groupedProjects), [groupedProjects]);

  return (
    <div className="min-h-screen py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] mx-auto mb-4"></div>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base md:text-lg">Explore a variety of projects grouped by type, from enterprise systems to educational platforms. Click any project for full details and demos.</p>
        </div>
        <div className="space-y-20">
          {categories.map(([category, catProjects]) => (
            <div key={category}>
              {/* Category Header Card */}
              <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl shadow-md border border-[#e5e7eb] px-6 py-4 mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{categoryIcons[category] || categoryIcons['Other']}</span>
                  <span className="text-xl font-bold text-[#2563eb]">{category}</span>
                  <span className="bg-[#f1f5f9] text-[#2563eb] text-xs font-bold px-2 py-1 rounded-full border border-[#e5e7eb]">{catProjects.length} project{catProjects.length > 1 ? 's' : ''}</span>
                </div>
                <div className="text-[#64748b] text-sm text-center sm:text-left">{categoryDescriptions[category] || categoryDescriptions['Other']}</div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{project.image}</div>
                      <span className="bg-[#f1f5f9] text-[#2563eb] text-xs font-bold px-2 py-1 rounded-full border border-[#e5e7eb]">{project.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1e293b] mb-1">{project.title}</h4>
                    <div className="text-xs text-[#a78bfa] mb-2 font-medium">{project.tagline}</div>
                    <p className="text-[#64748b] mb-3 text-xs">{project.description}</p>
                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                      <ul className="mb-4 list-disc list-inside text-xs text-[#2563eb] space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#f8fafc] text-[#2563eb] rounded-full text-xs font-semibold border border-[#e5e7eb]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-[#2563eb] text-white rounded-full hover:bg-[#1e40af] transition-all duration-300 text-xs font-semibold"
                      >
                        <span>📋</span>
                        <span>Details</span>
                      </a>
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 border border-[#a78bfa] text-[#a78bfa] rounded-full hover:bg-[#a78bfa] hover:text-white transition-all duration-300 text-xs font-semibold"
                        >
                          <span>🐙</span>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Call-to-Action and Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-r from-[#2563eb] to-[#a78bfa] rounded-xl p-8 text-white shadow-md flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-2">Want to collaborate?</h4>
            <p className="text-base mb-4">I’m always open to new opportunities and exciting projects. Let’s build something amazing together!</p>
            <a href="/contact" className="inline-block px-4 py-2 bg-white text-[#2563eb] rounded-full font-semibold hover:bg-[#f1f5f9] transition w-max">Contact Me</a>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8 flex flex-col justify-center items-center">
            <h4 className="text-lg font-bold text-[#2563eb] mb-2">Total Projects</h4>
            <div className="text-4xl font-bold text-[#1e293b]">{totalProjects}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 