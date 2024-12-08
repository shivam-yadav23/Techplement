document.getElementById("btn").addEventListener("click", function () {
    const searchInput = document.querySelector("input").value.toLowerCase();
    const courses = document.querySelectorAll(".card");
    
    courses.forEach((card) => {
      const courseName = card.querySelector(".upper_card p").textContent.toLowerCase();
      if (courseName.includes(searchInput)) {
        card.style.display = "block"; 
      } else {
        card.style.display = "none"; 
      }
    });
    
    updateCourseCount();
  });
  
  function updateCourseCount() {
    const visibleCourses = document.querySelectorAll(".card[style*='display: block']");
    document.getElementById("course-count").textContent = `Showing ${visibleCourses.length} courses`;
  }
  
  document.getElementById("sort-btn").addEventListener("click", function () {
    const coursesContainer = document.querySelector(".courses");
    const coursesArray = Array.from(coursesContainer.children);
    
    coursesArray.sort((a, b) => {
      const courseA = a.querySelector(".upper_card p").textContent.toLowerCase();
      const courseB = b.querySelector(".upper_card p").textContent.toLowerCase();
      
      return courseA.localeCompare(courseB);
    });
  
    coursesArray.forEach(course => {
      coursesContainer.appendChild(course);
    });
  });
  