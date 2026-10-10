import React, { useState } from 'react';

const services = [
  { id: 1, icon: '💻', name: 'Web Development', description: 'Modern and responsive websites for your business.', price: 'Starting at ₹4,999' },
  { id: 2, icon: '🎨', name: 'UI/UX Design', description: 'Simple and attractive designs that are easy to use.', price: 'Starting at ₹2,999' },
  { id: 3, icon: '📱', name: 'Mobile Applications', description: 'Mobile-friendly experiences for your customers.', price: 'Starting at ₹6,999' }
];

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('');

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">BrightWorks</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"
            onClick={() => document.getElementById('navigation').classList.toggle('show')}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#buttons">Buttons</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero py-5" id="home">
        <div className="container py-4 text-center">
          <span className="badge text-bg-light text-primary mb-3">DAY 41 · BOOTSTRAP FORMS</span>
          <h1 className="display-5 fw-bold">Services that help your ideas grow</h1>
          <p className="lead mx-auto mt-3 mb-4 hero-text">Explore our services and contact us to get started.</p>
          <a className="btn btn-light btn-lg fw-semibold" href="#services">Explore Services</a>
        </div>
      </header>

      <main className="container py-5">
        {showAlert && (
          <div className="alert alert-success alert-dismissible d-flex align-items-center" role="alert">
            <span className="flex-grow-1">Welcome! Check out our services and try the Bootstrap components below.</span>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
          </div>
        )}

        <section id="services" className="mb-5">
          <div className="text-center mb-4">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="fw-bold mt-2">Our Services</h2>
            <p className="text-secondary">Three ways we can help bring your vision to life.</p>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-md-6 col-lg-4" key={service.id}>
                <div className="card h-100 shadow-sm service-card">
                  <div className="card-body p-4">
                    <div className="service-icon mb-3">{service.icon}</div>
                    <h3 className="card-title h5 fw-bold">{service.name}</h3>
                    <p className="card-text text-secondary">{service.description}</p>
                    <p className="fw-semibold text-primary mb-0">{service.price}</p>
                  </div>
                  <div className="card-footer bg-white border-0 p-4 pt-0">
                    <a href="#contact" className="btn btn-outline-primary w-100">Enquire Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="buttons" className="demo-section p-4 p-md-5 rounded-4 mb-5">
          <h2 className="h3 fw-bold">Bootstrap Button Styles</h2>
          <p className="text-secondary">Task 1: try different button styles and dismiss the green alert above.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <button className="btn btn-primary" onClick={() => setSelectedStyle('Primary')}>Primary</button>
            <button className="btn btn-outline-success" onClick={() => setSelectedStyle('Outline Success')}>Outline Success</button>
            <button className="btn btn-warning" onClick={() => setSelectedStyle('Warning')}>Warning</button>
            <button className="btn btn-outline-dark" onClick={() => setSelectedStyle('Outline Dark')}>Outline Dark</button>
          </div>
          {selectedStyle && <p className="text-primary fw-semibold mt-3 mb-0">You clicked: {selectedStyle}</p>}
        </section>

        <section id="contact" className="row g-4 align-items-center mb-4">
          <div className="col-12 col-lg-5">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="fw-bold mt-2">Contact Us</h2>
            <p className="text-secondary">Task 2: a contact form using Bootstrap's form-label and form-control classes.</p>
            <p className="text-secondary mb-0">Fill in the fields and click Send Message to display a success confirmation.</p>
          </div>
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                {submitted && <div className="alert alert-success" role="status">Your message was sent successfully!</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" name="name" value={form.name}
                      onChange={handleChange} placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" value={form.message}
                      onChange={handleChange} placeholder="How can we help you?" required></textarea>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <div className="container">© 2026 BrightWorks. Built with React and Bootstrap.</div>
      </footer>
    </>
  );
}

export default App;
