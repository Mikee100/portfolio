import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const topSkills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' },
]

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="relative z-10 text-center px-4 pt-24 pb-12 w-full">
        <div className={`animate-fade-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}> 
          <h1 className="text-5xl md:text-7xl font-bold text-[#1e293b] mb-6">
            Hello, I'm{' '}
            <span className="text-[#2563eb]">Michael</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#64748b] mb-8 max-w-2xl mx-auto">
            System Developer | Web Developer | Database Management Specialist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/projects"
              className="px-6 py-2 bg-[#2563eb] text-white rounded-full font-semibold hover:bg-[#1e40af] transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-2 border-2 border-[#2563eb] text-[#2563eb] rounded-full font-semibold hover:bg-[#2563eb] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 px-4 pb-20">
        {/* About Preview */}
        <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-[#a78bfa] to-[#2563eb] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-2">About Me</h2>
            <p className="text-[#334155] mb-4 text-sm">I'm a passionate System & Web Developer, specializing in database management and full-stack development. Currently studying at Kenyatta University.</p>
            <Link to="/about" className="text-[#2563eb] font-semibold hover:underline text-sm">Read More →</Link>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Top Skills</h2>
          <div className="flex gap-4 mb-4">
            {topSkills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center">
                <span className="text-3xl mb-1">{skill.icon}</span>
                <span className="text-xs text-[#64748b]">{skill.name}</span>
              </div>
            ))}
          </div>
          <Link to="/skills" className="text-[#2563eb] font-semibold hover:underline text-sm">See All Skills →</Link>
        </div>

        {/* Projects Preview */}
        <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Featured Projects</h2>
          <div className="flex flex-col gap-4 mb-4">
            {projects.slice(0,2).map(project => (
              <div key={project.id} className="flex items-center gap-4">
                <span className="text-3xl">{project.image}</span>
                <div>
                  <div className="font-semibold text-[#2563eb]">{project.title}</div>
                  <div className="text-xs text-[#64748b] mb-1">{project.description.slice(0, 50)}...</div>
                  <Link to={`/project/${project.id}`} className="text-[#a78bfa] hover:underline text-xs">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="text-[#2563eb] font-semibold hover:underline text-sm">See All Projects →</Link>
        </div>

        {/* Contact Preview */}
        <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Contact</h2>
          <div className="mb-2 text-[#64748b] text-sm">Nairobi, Kenya</div>
          <div className="mb-4 text-[#2563eb] font-semibold text-sm">mikekariuki10028@gmail.com</div>
          <Link to="/contact" className="px-6 py-2 bg-[#2563eb] text-white rounded-full font-semibold hover:bg-[#1e40af] transition-all duration-300 text-sm">Get in Touch</Link>
        </div>
      </div>
    </div>
  )
}

export default Home 