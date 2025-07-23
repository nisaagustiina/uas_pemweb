const testiSwiper = new Swiper(".testiSwiper", {
  direction: "horizontal",
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigasi
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#joinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    alert(`${name} tersubmit`);
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#joinModal")
    );
    modal.hide();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function resetForm() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#description").value = "";
  }

  document.querySelector("#joinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    alert(
      `Hi, ${name} form kamu sudah terkirim! Nantikan email dari kami untuk informasi selanjutnya.`
    );

    // Close modal
    document.querySelector("#joinModal .btn-close").click();

    // Reset form setelah submit
    setTimeout(() => {
      resetForm();
    }, 200);
  });

  document
    .querySelector("#joinModal .btn-close")
    .addEventListener("click", function () {
      setTimeout(() => {
        resetForm();
      }, 300);
    });

  const closeButton = document.querySelector("#joinModal .btn-secondary");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      setTimeout(() => {
        resetForm();
      }, 300);
    });
  }

  document
    .querySelector("#joinModal")
    .addEventListener("hidden.bs.modal", function () {
      resetForm();
    });
});
