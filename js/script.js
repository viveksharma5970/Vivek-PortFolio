const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    header.classList.add('active');

    navLinks.forEach(link => {
        link.classList.remove('active');
    })

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')); {
            activePage();

            link.classList.add('active');

            sections[idx].classList.add('active');
        }
    })
})

logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        sections[0].classList.add('active');
    }
})

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    })
})


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    })
    portfolioDetails[index].classList.add('active');

    // Disable/enable arrows based on position
    if (index === 0) {
        arrowLeft.classList.add('disabled');
        arrowRight.classList.remove('disabled');
    } else if (index === 2) {
        arrowRight.classList.add('disabled');
        arrowLeft.classList.remove('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
        arrowRight.classList.remove('disabled');
    }
}

// Initial call to set arrows correctly
activePortfolio();

arrowRight.addEventListener('click', () => {
    if (index < 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});


const certDetails = document.querySelectorAll(".certificates-detail");
const certImages = document.querySelectorAll(".cert-img-item");
const certLeftBtn = document.querySelector(".cert-arrow-left");
const certRightBtn = document.querySelector(".cert-arrow-right");

let certCurrent = 0;

function updateCertificates() {
  certDetails.forEach((detail, index) => {
    detail.classList.toggle("active-cert", index === certCurrent);
  });

  certImages.forEach((img, index) => {
    img.classList.toggle("active-img", index === certCurrent);
  });

  certLeftBtn.classList.toggle("disabled-cert", certCurrent === 0);
  certRightBtn.classList.toggle(
    "disabled-cert",
    certCurrent === certDetails.length - 1
  );
}

certLeftBtn.addEventListener("click", () => {
  if (certCurrent > 0) {
    certCurrent--;
    updateCertificates();
  }
});

certRightBtn.addEventListener("click", () => {
  if (certCurrent < certDetails.length - 1) {
    certCurrent++;
    updateCertificates();
  }
});


updateCertificates();
