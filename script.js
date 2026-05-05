// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Scroll reveal animations
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// =============================================
// FEEDBACK SYSTEM
// =============================================

(function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackStars = document.getElementById('feedbackStars');
  const feedbackRating = document.getElementById('feedbackRating');
  const feedbackMessage = document.getElementById('feedbackMessage');
  const feedbackName = document.getElementById('feedbackName');
  const charCount = document.getElementById('charCount');
  const feedbackSuccess = document.getElementById('feedbackSuccess');
  const feedbackClientList = document.getElementById('feedbackClientList');
  const STORAGE_KEY = 'borracharia_feedbacks';

  // Star rating — hover preview
  const stars = feedbackStars.querySelectorAll('.feedback-star');
  stars.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.value);
      stars.forEach(s => {
        s.classList.toggle('hovered', parseInt(s.dataset.value) <= val);
      });
    });

    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.value);
      feedbackRating.value = val;
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= val);
      });
    });
  });

  feedbackStars.addEventListener('mouseleave', () => {
    stars.forEach(s => s.classList.remove('hovered'));
  });

  // Character counter
  feedbackMessage.addEventListener('input', () => {
    charCount.textContent = feedbackMessage.value.length;
  });

  // Submit feedback
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const rating = parseInt(feedbackRating.value);
    if (rating === 0) {
      feedbackStars.style.animation = 'shake 0.4s ease';
      setTimeout(() => feedbackStars.style.animation = '', 400);
      return;
    }

    const feedback = {
      name: feedbackName.value.trim(),
      rating: rating,
      message: feedbackMessage.value.trim(),
      date: new Date().toISOString()
    };

    // Save to localStorage
    const feedbacks = getFeedbacks();
    feedbacks.unshift(feedback);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));

    // Show success message
    feedbackForm.style.display = 'none';
    feedbackSuccess.classList.add('show');

    // Reset form after delay
    setTimeout(() => {
      feedbackForm.reset();
      feedbackRating.value = '0';
      stars.forEach(s => s.classList.remove('active'));
      charCount.textContent = '0';
      feedbackSuccess.classList.remove('show');
      feedbackForm.style.display = '';
    }, 3000);

    // Re-render feedbacks
    renderFeedbacks();
  });

  // Get feedbacks from localStorage
  function getFeedbacks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  // Render client feedbacks as cards
  function renderFeedbacks() {
    const feedbacks = getFeedbacks();
    feedbackClientList.innerHTML = '';

    feedbacks.forEach(fb => {
      const starsHtml = '★'.repeat(fb.rating) + '<span style="opacity:0.2">' + '★'.repeat(5 - fb.rating) + '</span>';
      const initial = fb.name.charAt(0).toUpperCase();

      const card = document.createElement('div');
      card.className = 'feedback-client-card';
      card.innerHTML = `
        <div class="testimonial-stars">${starsHtml}</div>
        <blockquote>"${fb.message}"</blockquote>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${initial}</div>
          <div>
            <div class="name">${fb.name}</div>
            <div class="via">Via Site</div>
          </div>
        </div>
      `;
      feedbackClientList.appendChild(card);
    });
  }

  // Initial render
  renderFeedbacks();
})();
