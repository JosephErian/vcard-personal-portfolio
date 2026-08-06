'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// themed toast, replaces native alert()
const toast = document.querySelector("[data-toast]");
const toastIcon = document.querySelector("[data-toast-icon]");
const toastText = document.querySelector("[data-toast-text]");
let toastTimeout;

const showToast = function (message, type) {
  clearTimeout(toastTimeout);
  toast.dataset.type = type;
  toastIcon.setAttribute("name", type === "error" ? "close-circle" : "checkmark-circle");
  toastText.textContent = message;
  toast.classList.add("active");
  toastTimeout = setTimeout(function () { toast.classList.remove("active"); }, 5000);
};

// show the "choose application" select only when purpose is "Asking for a demo"
const purposeSelect = document.querySelector("[data-purpose-select]");
const appSelect = document.querySelector("[data-app-select]");

purposeSelect.addEventListener("change", function () {
  const isDemo = purposeSelect.value === "Asking for a demo";
  appSelect.hidden = !isDemo;
  appSelect.required = isDemo;
  if (!isDemo) appSelect.value = "";
});

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// send form via EmailJS on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  formBtn.setAttribute("disabled", "");

  const purpose = (!appSelect.hidden && appSelect.value)
    ? purposeSelect.value + " — " + appSelect.value
    : purposeSelect.value;

  const params = {
    from_name: form.from_name.value,
    reply_to: form.reply_to.value,
    purpose: purpose,
    message: form.message.value,
  };

  emailjs.send("service_boxatzo", "template_g0rday8", params)
    .then(function () {
      showToast("Message sent, thanks! I'll get back to you soon.", "success");
      form.reset();
      appSelect.hidden = true;
      appSelect.required = false;
    })
    .catch(function (error) {
      showToast("Message failed to send, please try again or email me directly.", "error");
      console.error("EmailJS error:", error);
      formBtn.removeAttribute("disabled");
    });
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}