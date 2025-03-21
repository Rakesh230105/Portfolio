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
            } else {
              // Optional: Remove the class when element is out of view for replay effect
              // el.classList.remove('in-view');
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
    <div className="bg-gray-900 text-white font-sans text-xl">
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
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .text-glow:hover {
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
          transition: text-shadow 0.3s ease;
        }
      `}</style>
      
      {/* Header */}
      <header className="bg-gray-800 py-6 text-center animate-on-scroll">
        <nav>
          <ul className="flex justify-center space-x-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index} className={`stagger-delay-${index + 1} in-view fade-in-up`}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl hover:text-yellow-500 transition text-glow"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="py-24 text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
          <div className="relative w-52 h-52 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center in-view pulse-effect">
            <span className="text-gray-400 text-2xl">Photo Placeholder</span>
          </div>
          <h1 className="text-5xl font-semibold text-yellow-500 in-view fade-in-up">Rakesh</h1>
          <p className="text-2xl max-w-3xl in-view fade-in-up stagger-delay-2">
            I am an aspiring software developer passionate about coding and technology.
            I enjoy solving complex problems and building user-friendly applications.
            I have experience in various programming languages and frameworks.
            My goal is to continuously learn and contribute to innovative projects.
            I am always excited to explore new technologies and enhance my skills.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800 text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-semibold text-yellow-500 in-view fade-in-up">About Me</h2>
          <div className="mt-6">
            <div className="relative w-96 h-96 rounded-full overflow-hidden bg-gray-700 mx-auto mb-6 in-view pulse-effect">
              <img src="/web_dev_pic.png" alt="Profile Photo" className="object-cover w-full h-full" />
            </div>
            <p className="text-2xl max-w-3xl mx-auto in-view fade-in-up stagger-delay-2">
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
      <section id="skills" className="py-24 bg-gray-900 text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-semibold text-yellow-500 mb-8 in-view fade-in-up">Skills</h2>
          <div className="grid grid-cols-4 gap-6 justify-center">
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
                className={`skill animate-on-scroll flex flex-col items-center transition-transform 
                  transform hover-scale hover-rotate in-view stagger-delay-${index % 4 + 1}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={`https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/${skill.icon}`} 
                  alt={`${skill.name} Logo`} 
                  className="w-28 h-28"
                />
                <p className="mt-2 text-2xl">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900 text-center animate-on-scroll">
        <div className="w-full px-8 mx-auto">
          <h2 className="text-4xl font-semibold text-yellow-500 mb-8 in-view fade-in-up">Projects</h2>
          <div className="flex flex-col gap-12 items-center">
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
              <div key={index} className="project animate-on-scroll w-full flex items-start card-hover in-view">
                <div className={`w-1/2 pr-6 ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                  <img src={project.image} alt={project.title} className="w-full h-80 rounded-md object-cover hover-scale" />
                </div>
                <div className={`w-1/2 pl-6 text-left ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}>
                  <h3 className="text-3xl text-yellow-500 text-glow">{project.title}</h3>
                  <p className="text-2xl mt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800 text-center animate-on-scroll">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-semibold text-yellow-500 in-view fade-in-up">Contact</h2>
          <p className="text-2xl mt-6 in-view fade-in-up stagger-delay-1">You can reach me via email or phone.</p>
          <p className="text-2xl mt-4 in-view fade-in-up stagger-delay-2">Email: <a href="mailto:mulpurirakesh05@gmail.com" className="text-yellow-500 text-glow">mulpurirakesh05@gmail.com</a></p>
          <p className="text-2xl mt-4 in-view fade-in-up stagger-delay-3">Phone: <span className="text-yellow-500">+91 9848254165</span></p>
        </div>
      </section>
    </div>
  );
};

export default RakeshPortfolio;