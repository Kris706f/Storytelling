// Funktion for at kontrollere synligheden af sektioner
function checkVisibility(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }
  
  // Opretter en Intersection Observer med funktionen for at kontrollere synlighed
  const observer = new IntersectionObserver(checkVisibility, { threshold: 0.5 });
  
  // Hent alle sektioner med billeder
  const sectionsWithImages = document.querySelectorAll('.section');
  
  // Tilføj hver sektion med billeder til observeren
  sectionsWithImages.forEach((section) => {
    observer.observe(section);
  });







  // Funktion for at kontrollere synligheden af sektioner
function checkVisibility(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }
  
 
  
  // Hent alle sektioner med tekstelementer (h2)
  const textSections = document.querySelectorAll('h2');
  
  // Tilføj hver tekstsektion til observeren
  textSections.forEach((section) => {
    observer.observe(section);
  });