const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})
const modalOverlay = document.querySelector(".modal-overlay");
if (modalOverlay) {
    const detailButtons = document.querySelectorAll(".details-btn");
const closeButton = document.querySelector(".close-button");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");

detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.dataset.title;
        const price = button.dataset.price;
        const description = button.dataset.description;
        const imgSrc = button.parentElement.querySelector("img").src;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalDescription.textContent = description;
        modalImg.src = imgSrc;
        modalOverlay.style.display = "flex";
    });
});

function closeModal() {
    modalOverlay.style.display = "none";
}

closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});
}

const testimonials = document.querySelectorAll(".testimonial-card");
if (testimonials.length > 0) {
    const prevButton = document.querySelector(".slider-btn.prev");
    const nextButton = document.querySelector(".slider-btn.next");

    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(card => {
            card.classList.remove("active");
        });
        testimonials[index].classList.add("active");
    }

    nextButton.addEventListener("click", () => {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonials.length) {
            currentTestimonialIndex = 0;
        }
        showTestimonial(currentTestimonialIndex);
    });
    prevButton.addEventListener("click", () => {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonials.length - 1;
        }
        showTestimonial(currentTestimonialIndex);
    });
    }
    
const testimonialForm = document.getElementById("testimonial-form");
if (testimonialForm) {
    testimonialForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const customerName = document.getElementById("customerName").value;
        const reviewMessage = document.getElementById("reviewMessage").value;
        alert(`Terima kasih, ${customerName}! Ulasan Anda telah kami terima.`);
        testimonialForm.reset();
    });
}
const subscriptionForm = document.getElementById("subscription-form");
if (subscriptionForm) {
    const planInputs = document.querySelectorAll('input[name="plan"]');
    const mealTypeInputs = document.querySelectorAll('input[name="mealType"]');
    const deliveryDayInputs = document.querySelectorAll('input[name="deliveryDay"]');
    const totalPriceElement = document.getElementById("total-price");
function calculateTotal() {
    const planInputs = document.querySelectorAll('input[name="plan"]');
    const totalPriceElement = document.getElementById("total-price");
    let planPrice = 0;
    planInputs.forEach(function(input) {
        if (input.checked) {
            planPrice = Number(input.value);
        }
    });
    const selectedMealTypes = document.querySelectorAll('input[name="mealType"]:checked').length;
    const selectedDeliveryDays = document.querySelectorAll('input[name="deliveryDay"]:checked').length;
    const totalPrice = planPrice * selectedMealTypes * selectedDeliveryDays * 4.3;
    totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}
const allInputs = [...planInputs, ...mealTypeInputs, ...deliveryDayInputs]; // Biarkan ini apa adanya
allInputs.forEach(input => {
    input.addEventListener("change", calculateTotal); // Ini akan memanggil fungsi versi baru
});
}