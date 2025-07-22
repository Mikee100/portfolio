const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📝' },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Jest', icon: '🧪' },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', icon: '☁️' },
    ],
  },
]

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Skills & Technologies</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-lg text-[#64748b]">A selection of the main technologies and tools I use.</p>
        </div>
        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-[#2563eb] mb-4">{category.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-6 flex flex-col items-center">
                    <span className="text-4xl mb-2">{skill.icon}</span>
                    <span className="font-semibold text-[#2563eb]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills 