import { useState } from 'react'
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        created: Timestamp.now(),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Mikee100', description: 'View my code and projects' },
    { name: 'LinkedIn', icon: '💼', url: '#', description: 'Connect professionally' },
    { name: 'Email', icon: '📧', url: 'mailto:mikekariuki10028@gmail.com', description: 'Send me an email' },
    { name: 'Portfolio', icon: '🎨', url: '#', description: 'View my work' }
  ]

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'mikekariuki10028@gmail.com',
      description: 'Primary contact method'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Nairobi, Kenya',
      description: 'Available for remote work'
    },
    {
      icon: '🎓',
      title: 'Education',
      value: 'Kenyatta University',
      description: 'Computer Science Student'
    },
    {
      icon: '⏰',
      title: 'Availability',
      value: 'Open to Opportunities',
      description: 'Freelance & Full-time'
    }
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies',
      icon: '🌐'
    },
    {
      title: 'System Development',
      description: 'Enterprise-level systems and business solutions',
      icon: '⚙️'
    },
    {
      title: 'Database Design',
      description: 'Database architecture and optimization',
      icon: '🗄️'
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and microservices',
      icon: '🔌'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, and innovative ideas. Let's create something amazing together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8">
              <h2 className="text-2xl font-bold text-[#2563eb] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#a78bfa] to-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-[#1e293b] font-semibold mb-1">{info.title}</h3>
                      <p className="text-[#2563eb] mb-1 font-medium">{info.value}</p>
                      <p className="text-[#64748b] text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8">
              <h2 className="text-2xl font-bold text-[#2563eb] mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex flex-col items-center p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e0e7ef] transition-all duration-300 group border border-[#e5e7eb]"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span className="text-[#2563eb] font-semibold text-center mb-1">{social.name}</span>
                    <span className="text-[#64748b] text-xs text-center">{social.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-8">
            <h2 className="text-2xl font-bold text-[#2563eb] mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[#1e293b] font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e5e7ef] rounded-lg text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:border-[#a78bfa] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#1e293b] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e5e7ef] rounded-lg text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:border-[#a78bfa] transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#1e293b] font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e5e7ef] rounded-lg text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:border-[#a78bfa] transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#1e293b] font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e5e7ef] rounded-lg text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:border-[#a78bfa] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] text-white rounded-lg font-semibold hover:from-[#1e40af] hover:to-[#a78bfa] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
              {status === 'success' && (
                <div className="text-green-600 font-semibold mt-2 text-center">Message sent successfully!</div>
              )}
              {status === 'error' && (
                <div className="text-red-600 font-semibold mt-2 text-center">Failed to send message. Please try again.</div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-[#64748b] mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. I'm excited to work on your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:mikekariuki10028@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#a78bfa] text-white rounded-full font-semibold hover:from-[#1e40af] hover:to-[#a78bfa] transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="https://github.com/Mikee100"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#a78bfa] text-[#a78bfa] rounded-full font-semibold hover:bg-[#a78bfa] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 