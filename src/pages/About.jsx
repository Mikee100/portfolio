const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[#334155] leading-relaxed">
              I'm a passionate System Developer and Web Developer with expertise in creating robust, scalable applications. 
              Currently studying at Kenyatta University, I specialize in database management and full-stack development.
            </p>
            <p className="text-lg text-[#334155] leading-relaxed">
              I've developed diverse projects including SaaS platforms (Atlascopco), food delivery systems, e-voting platforms, 
              and business management solutions. With 31+ repositories on GitHub, I'm constantly building innovative solutions 
              that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-[#e5e7eb]">
                <div className="text-2xl font-bold text-[#2563eb]">31+</div>
                <div className="text-[#64748b]">GitHub Repositories</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-[#e5e7eb]">
                <div className="text-2xl font-bold text-[#a78bfa]">5+</div>
                <div className="text-[#64748b]">Technologies Mastered</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-[#e5e7eb]">
                <div className="text-2xl font-bold text-[#2563eb]">100%</div>
                <div className="text-[#64748b]">Code Quality</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 bg-gradient-to-br from-[#a78bfa] to-[#2563eb] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 