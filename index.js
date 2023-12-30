$(window).scroll(function() {
    var windowH = $(window).height(),
      scrollY = $(window).scrollTop();
    $('.effect').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass("txt-effect");
      }
    });
  });

$(document).ready(function() {
  var prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Show the navigation bar when scrolling up
      document.getElementById("header").style.top = "0";
    } else {
      // Hide the navigation bar when scrolling down
      document.getElementById("header").style.top = "-100px"; // Adjust this value to hide or show the nav bar as needed
    }

    prevScrollPos = currentScrollPos;
  };
});



// document.addEventListener('DOMContentLoaded', function () {
//   let menu = document.querySelector('.menubar');
//   let navbar = document.querySelector('#navbar');
//   // let navbarLinks = document.querySelectorAll('#navbar a');

//   menu.addEventListener('click', function () {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
//   });

//   navbar.addEventListener('click', function (event) {
//     if (event.target.tagName === 'A') {
//       menu.classList.remove('bx-x');
//       navbar.classList.remove('open');
//     }
//   });
// });

function showSidebar(){
  const navbar = document.querySelector('#navbar');
  navbar.style.display = 'flex';
}
function hideSidebar(){
  const navbar = document.querySelector('#navbar');
  navbar.style.display = 'none';
}

 


// Get all the sections and nav links
// Get all the sections and nav links
const sections = document.querySelectorAll('.activenav');
const navlinks = document.querySelectorAll('#navbar a');

// Function to update the active state of the navigation links
function updateActiveNav() {
  const top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all nav links
      navlinks.forEach(link => {
        link.classList.remove('active');
      });

      // Special handling for the "home" section
      if (id === 'home') {
        const homeLink = document.querySelector(`#navbar a[href='#home']`);
        if (homeLink) {
          homeLink.classList.add('active');
        }
      } else {
        // Add 'active' class to the corresponding nav link
        const matchingLink = document.querySelector(`#navbar a[href='#${id}']`);
        if (matchingLink) {
          matchingLink.classList.add('active');
        }
      }
    }
  });
}

// Attach the 'updateActiveNav' function to the scroll event
window.addEventListener('scroll', updateActiveNav);

// Function to handle click events on navigation links
function handleNavLinkClick(event) {
  // Remove 'active' class from all nav links
  navlinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked nav link
  event.target.classList.add('active');
}

// Attach the 'handleNavLinkClick' function to click events on nav links
navlinks.forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
});

// Initial update to set the active state when the page loads
updateActiveNav();

const section = document.querySelectorAll('.activenav');
const navlink = document.querySelectorAll('.hideOnMobile a');

// Function to update the active state of the navigation links
function updateActiveNavs() {
  const top = window.scrollY;

  section.forEach(sec => {
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all nav links
      navlink.forEach(link => {
        link.classList.remove('active');
      });

      // Special handling for the "home" section
      if (id === 'home') {
        const homeLink = document.querySelector(`.hideOnMobile a[href='#home']`);
        if (homeLink) {
          homeLink.classList.add('active');
        }
      } else {
        // Add 'active' class to the corresponding nav link
        const matchingLink = document.querySelector(`.hideOnMobile a[href='#${id}']`);
        if (matchingLink) {
          matchingLink.classList.add('active');
        }
      }
    }
  });
}

// Attach the 'updateActiveNav' function to the scroll event
window.addEventListener('scroll', updateActiveNavs);

// Function to handle click events on navigation links
function handleNavsLinkClick(event) {
  // Remove 'active' class from all nav links
  navlinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked nav link
  event.target.classList.add('active');
}

// Attach the 'handleNavLinkClick' function to click events on nav links
navlink.forEach(link => {
  link.addEventListener('click', handleNavsLinkClick);
});

// Initial update to set the active state when the page loads
updateActiveNavs();








$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('.sliding').each(function() {
    var elPosition = $(this).offset().top;
    if (scrollY > elPosition - windowH) {
      $(this).addClass("txt-effect2");
    }
  });
});

$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('.sliding2').each(function() {
    var elPosition = $(this).offset().top;
    if (scrollY > elPosition - windowH) {
      $(this).addClass("txt-effect3");
    }
  });
});


function sendMail() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (firstname.trim() === "" || lastname.trim() === "" || !email.match(emailRegex) ||mobile.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields correctly before sending the email.");
  } else {
    var params = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
      message: message
    }

    const serviceID = "service_vevdqgf";
    const templateID = "template_bkzoq2u";

    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          
          document.getElementById("firstname").value = "";
          document.getElementById("lastname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("message").value = "";
          alert("Your message sent successfully");
          console.log("Email sent successfully. Response:", res);
          
        }
      )
      .catch((err) => {
        console.log("Email sending failed. Error:", err);
      });
  }

  return false;
}

