document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const modals = document.querySelectorAll(".modal");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        if (filter === "all" || category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const openModal = (id) => {
    const modal = document.querySelector(`.modal[data-modal-id="${id}"]`);
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeModals = () => {
    modals.forEach((m) => m.classList.remove("open"));
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".project-link").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.modal;
      openModal(id);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-close-modal")) {
        closeModals();
      }
    });
  });

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", closeModals);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModals();
    }
  });
});

