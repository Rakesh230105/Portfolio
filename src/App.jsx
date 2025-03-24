import { useState, useEffect } from "react";

const RakeshPortfolio = () => {
  // State to track scrolling for animations
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Improved scroll animation handler with throttling
    let ticking = false;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
              el.classList.add('in-view');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Initial check for elements in view on load
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-white text-gray-800 font-sans text-xl">
      {/* Add CSS keyframes and animation classes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s;
        }
        
        .in-view {
          opacity: 1;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .pulse-effect {
          animation: pulse 2s infinite;
        }
        
        .bounce-effect {
          animation: bounce 2s infinite;
        }
        
        .rotate-effect {
          animation: rotate 8s linear infinite;
        }
        
        .stagger-delay-1 {
          animation-delay: 0.1s;
        }
        
        .stagger-delay-2 {
          animation-delay: 0.2s;
        }
        
        .stagger-delay-3 {
          animation-delay: 0.3s;
        }
        
        .stagger-delay-4 {
          animation-delay: 0.4s;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.1);
        }
        
        .hover-rotate:hover {
          transform: rotate(10deg);
          transition: transform 0.3s ease;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.2);
        }
        
        .text-glow:hover {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
          transition: text-shadow 0.3s ease;
        }
        
        .section-alt {
          background-color: #f0fdff;
        }
        
        .project-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.1);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.2);
          transform: translateY(-5px);
        }
        
        .skill-icon {
          filter: drop-shadow(0 2px 5px rgba(6, 182, 212, 0.2));
          transition: all 0.3s ease;
        }
        
        .skill-icon:hover {
          filter: drop-shadow(0 4px 8px rgba(6, 182, 212, 0.3));
          transform: translateY(-5px) scale(1.1);
        }
        
        .cyan-gradient {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
        }
        
        .cyan-light-gradient {
          background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
        }
      `}</style>
      
      {/* Header */}
      <header className="bg-cyan-500 text-white py-6 text-center animate-on-scroll sticky top-0 z-50 shadow-md cyan-gradient">
        <nav>
          <ul className="flex justify-center space-x-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index} className={`stagger-delay-${index + 1} in-view fade-in-up`}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl hover:text-cyan-100 font-medium transition text-glow"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="py-24 text-center animate-on-scroll bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
          <div className="relative w-52 h-52 rounded-full overflow-hidden bg-cyan-50 flex items-center justify-center border-4 border-cyan-300 in-view pulse-effect shadow-lg">
            <span className="text-cyan-500 text-2xl">Photo Placeholder</span>
          </div>
          <h1 className="text-5xl font-bold text-cyan-600 in-view fade-in-up">Rakesh</h1>
          <p className="text-2xl max-w-3xl text-gray-700 in-view fade-in-up stagger-delay-2">
            I am an aspiring software developer passionate about coding and technology.
            I enjoy solving complex problems and building user-friendly applications.
            I have experience in various programming languages and frameworks.
            My goal is to continuously learn and contribute to innovative projects.
            I am always excited to explore new technologies and enhance my skills.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 section-alt text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-bold text-cyan-600 in-view fade-in-up">About Me</h2>
          <div className="mt-6">
            <div className="relative w-96 h-96 rounded-full overflow-hidden bg-cyan-50 mx-auto mb-6 border-4 border-cyan-300 in-view pulse-effect shadow-lg">
              <img src="/web_dev_pic.png" alt="Profile Photo" className="object-cover w-full h-full" />
            </div>
            <p className="text-2xl max-w-3xl mx-auto text-gray-700 in-view fade-in-up stagger-delay-2">
              I am a student with a strong foundation in web and software development.
              My expertise includes languages like HTML, CSS, JavaScript, React, and more.
              I enjoy working on real-world projects and improving my problem-solving skills.
              I am particularly interested in full-stack development and UI/UX design.
              My ambition is to create impactful applications that enhance user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-bold text-cyan-600 mb-12 in-view fade-in-up">Skills</h2>
          <div className="grid grid-cols-4 gap-8 justify-center">
            {[
              { name: "C", icon: "c/c-original.svg" },
              { name: "Java", icon: "java/java-original.svg" },
              { name: "Python", icon: "python/python-original.svg" },
              { name: "HTML", icon: "html5/html5-original.svg" },
              { name: "CSS", icon: "css3/css3-original.svg" },
              { name: "JavaScript", icon: "javascript/javascript-original.svg" },
              { name: "React", icon: "react/react-original.svg" }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={`skill animate-on-scroll flex flex-col items-center
                  in-view stagger-delay-${index % 4 + 1}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={`https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/${skill.icon}`} 
                  alt={`${skill.name} Logo`} 
                  className="w-28 h-28 skill-icon"
                />
                <p className="mt-3 text-2xl font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 section-alt text-center animate-on-scroll">
        <div className="w-full px-8 mx-auto">
          <h2 className="text-4xl font-bold text-cyan-600 mb-12 in-view fade-in-up">Projects</h2>
          <div className="flex flex-col gap-16 items-center">
            {[
              {
                title: "Hotstar Clone",
                image: "/Hotstar.png",
                description: "The Hotstar Clone project replicates the homepage of Hotstar. It is built using HTML, CSS, and JavaScript, focusing on visually appealing user interface, closely resembling the original streaming platform."
              },
              {
                title: "Book Store",
                image: "/book_store.png",
                description: "The Book Store project is an interactive web application built with HTML, CSS, JavaScript, and PHP. It allows users to browse a collection of books and make purchases. The website features a clean, responsive design for a seamless shopping experience."
              },
              {
                title: "Shoe Store",
                image: "/shoe_store.png",
                description: "The Shoe Store project is a dynamic e-commerce website built using modern web technologies. It features a seamless shopping experience with a user-friendly interface and responsive design."
              }
            ].map((project, index) => (
              <div key={index} className="project animate-on-scroll w-full flex items-start bg-white p-6 rounded-lg shadow-lg project-card in-view">
                <div className={`w-1/2 pr-6 ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                  <img src={project.image} alt={project.title} className="w-full h-80 rounded-md object-cover hover-scale shadow-md" />
                </div>
                <div className={`w-1/2 pl-6 text-left ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}>
                  <h3 className="text-3xl text-cyan-600 font-bold">{project.title}</h3>
                  <p className="text-2xl mt-4 text-gray-700">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition mr-3">View Project</button>
                    <button className="px-6 py-2 border border-cyan-500 text-cyan-600 rounded-full hover:bg-cyan-50 transition">Source Code</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-cyan-50 text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-bold text-cyan-600 in-view fade-in-up">Contact</h2>
          <p className="text-2xl mt-6 text-gray-700 in-view fade-in-up stagger-delay-1">You can reach me via email or phone.</p>
          <p className="text-2xl mt-4 in-view fade-in-up stagger-delay-2">Email: <a href="mailto:mulpurirakesh05@gmail.com" className="text-cyan-600 hover:underline">mulpurirakesh05@gmail.com</a></p>
          <p className="text-2xl mt-4 in-view fade-in-up stagger-delay-3">Phone: <span className="text-cyan-600">+91 9848254165</span></p>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto in-view fade-in-up animate-on-scroll">
            <h3 className="text-3xl font-semibold text-cyan-600 mb-6">Let's Connect</h3>
            <form className="flex flex-col space-y-6">
              <input type="text" placeholder="Your Name" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xl" />
              <input type="email" placeholder="Your Email" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xl" />
              <textarea placeholder="Your Message" rows="4" className="p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xl"></textarea>
              <button type="submit" className="cyan-gradient hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-xl shadow-lg hover:shadow-xl">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="cyan-gradient text-white py-8 text-center">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-white hover:text-cyan-100 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.01-1.017-.014-1.845-2.782.603-3.369-1.337-3.369-1.337-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.09-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.844-2.339 4.687-4.566 4.935.359.309.678.917.678 1.847 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-cyan-100 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 18.267v-7.912H4.94v7.912h2.942zM6.41 9.11a1.693 1.693 0 100-3.385 1.693 1.693 0 000 3.385zm12.327 9.156v-4.352c0-2.441-1.293-3.581-3.018-3.581-1.391 0-2.013.765-2.364 1.301v-1.115H10.41v7.747h2.946v-4.12c0-.264.02-.527.098-.716.215-.527.703-1.073 1.524-1.073 1.076 0 1.508.82 1.508 2.022v3.887h2.252z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-cyan-100 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.5 14a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1zm1-4a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v1zm1-4a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v1z"></path>
              </svg>
            </a>
          </div>
          <p className="text-xl">&copy; {new Date().getFullYear()} Rakesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RakeshPortfolio;