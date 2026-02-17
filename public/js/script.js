// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  formMessage.textContent = '';
  formMessage.className = 'form-message';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      formMessage.textContent = result.message;
      formMessage.className = 'form-message success';
      contactForm.reset();
    } else {
      formMessage.textContent = result.error || 'Something went wrong.';
      formMessage.className = 'form-message error';
    }
  } catch (err) {
    formMessage.textContent = 'Failed to send. Please try again or email directly.';
    formMessage.className = 'form-message error';
  }
});

// Smooth scroll for anchor links (fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
