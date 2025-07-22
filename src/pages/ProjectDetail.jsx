import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
    setIsImageModalOpen(true)
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mb-8"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">{project.image}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{project.detailedDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {project.tech.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-400/30">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {project.github !== '#' && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <span>🐙</span>
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                <span>🚀</span>
                <span>Live Demo</span>
              </a>
            )}
            {project.backend && (
              <a 
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                <span>⚙️</span>
                <span>Backend API</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Architecture</h2>
              <p className="text-gray-700 leading-relaxed">{project.architecture}</p>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Challenge {index + 1}</h3>
                  <p className="text-gray-700 mb-4">{challenge.problem}</p>
                  <h4 className="text-lg font-semibold text-green-600 mb-2">Solution:</h4>
                  <p className="text-gray-700">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots/Gallery */}
          {project.screenshots && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200"
                    onClick={() => openImageModal(screenshot)}
                  >
                    <div className="relative group">
                      <img 
                        src={screenshot.url} 
                        alt={screenshot.alt}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">Click to expand</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-800 font-semibold mb-2">{screenshot.alt}</h3>
                      <p className="text-gray-600 text-sm">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Interface Gallery */}
          {project.clientScreenshots && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Client Interface</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.clientScreenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200"
                    onClick={() => openImageModal(screenshot)}
                  >
                    <div className="relative group">
                      <img 
                        src={screenshot.url} 
                        alt={screenshot.alt}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">Click to expand</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-800 font-semibold mb-2">{screenshot.alt}</h3>
                      <p className="text-gray-600 text-sm">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admin Interface Gallery */}
          {project.adminScreenshots && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Interface</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.adminScreenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200"
                    onClick={() => openImageModal(screenshot)}
                  >
                    <div className="relative group">
                      <img 
                        src={screenshot.url} 
                        alt={screenshot.alt}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">Click to expand</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-800 font-semibold mb-2">{screenshot.alt}</h3>
                      <p className="text-gray-600 text-sm">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Demos */}
          {project.videoUrl && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Video Demo</h2>
              <div className="max-w-4xl mx-auto">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-2xl"
                  poster={project.screenshots?.[0]?.url}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* Client Video Demo */}
          {project.clientVideo && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Client Interface Demo</h2>
              <div className="max-w-4xl mx-auto">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-2xl"
                  poster={project.clientScreenshots?.[0]?.url}
                >
                  <source src={project.clientVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* Admin Video Demo */}
          {project.adminVideo && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Admin Interface Demo</h2>
              <div className="max-w-4xl mx-auto">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-2xl"
                  poster={project.adminScreenshots?.[0]?.url}
                >
                  <source src={project.adminVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeImageModal}
          ></div>
          <div className="relative z-10 max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
            <div className="relative">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-300">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail 