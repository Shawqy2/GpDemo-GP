//========================================= Toggle Menu =========================================

const toggleVisibility = (element, className = "show") => {
    element.classList.toggle(className);
};

// Menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu?.addEventListener("click", () => toggleVisibility(navBar));

// Search Bar
const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");

searchIcon?.addEventListener("click", () => toggleVisibility(searchBar));

//========================================= Login Form =========================================

function setupPopupWithToggle(trigger, popup, closeBtn) {
    trigger?.addEventListener("click", () => {
        const isPopupVisible = popup.style.display === "block";
        popup.style.display = isPopupVisible ? "none" : "block";
    });

    closeBtn?.addEventListener("click", () => (popup.style.display = "none"));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") popup.style.display = "none";
    });

    popup?.addEventListener("click", (event) => {
        if (event.target === popup) popup.style.display = "none";
    });
}

// Login
setupPopupWithToggle(
    document.getElementById("login-icon"),
    document.getElementById("login-popup"),
    document.getElementById("close-login-btn")
);

// Register
const registerPopup = document.getElementById("register-popup");
setupPopupWithToggle(
    document.getElementById("register-link"),
    registerPopup,
    document.getElementById("close-register-btn")
);

// Switch Between Login and Register
document.getElementById("register-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-popup").style.display = "none";
    registerPopup.style.display = "block";
});

document.getElementById("login-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    registerPopup.style.display = "none";
    document.getElementById("login-popup").style.display = "block";
});

//========================================= User Profile =========================================

setupPopupWithToggle(
    document.querySelector(".user-icon"),
    document.getElementById("profile-popup"),
    document.getElementById("close-profile-btn")
);

//========================================= Products Popup =========================================

const productPopup = document.getElementById("product-popup");
const closePopupBtn = document.getElementById("close-popup-btn");

const productDetails = {
    product1: {
        title: "Product 1",
        image: "product1.jpg",
        description: "This is a description of Product 1.",
        price: "$20.00",
    },
    product2: {
        title: "Product 2",
        image: "product2.jpg",
        description: "This is a description of Product 2.",
        price: "$25.00",
    },
    product3: {
        title: "Product 3",
        image: "product3.jpg",
        description: "This is a description of Product 3.",
        price: "$30.00",
    },
    product4: {
        title: "Product 4",
        image: "product4.jpg",
        description: "This is a description of Product 4.",
        price: "$35.00",
    },
};

function openPopup(productId) {
    const product = productDetails[productId];
    if (!product) return;

    document.getElementById("popup-title").textContent = product.title;
    document.getElementById("popup-image").src = product.image;
    document.getElementById("popup-description").textContent = product.description;
    document.getElementById("popup-price").textContent = product.price;

    productPopup?.classList.add("show");
}

function closePopup() {
    productPopup?.classList.remove("show");
}

productPopup?.addEventListener("click", (event) => {
    if (event.target === productPopup) closePopup();
});

closePopupBtn?.addEventListener("click", closePopup);


document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج افتراضيًا

    // الحصول على القيم المدخلة
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true; // flag لمعرفة إذا كانت جميع الحقول صحيحة

    // التحقق من اسم المستخدم
    if (username === "") {
        document.getElementById('username-error').textContent = "Username is required";
        isValid = false;
    } else {
        document.getElementById('username-error').textContent = "";
    }

    // التحقق من البريد الإلكتروني
    if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = "Please enter a valid email address";
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = "";
    }

    // التحقق من كلمة المرور
    if (password === "") {
        document.getElementById('password-error').textContent = "Password is required";
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = "";
    }

    // التحقق من تأكيد كلمة المرور
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').textContent = "";
    }

    // إذا كانت جميع الحقول صحيحة، يمكنك إرسال النموذج أو إغلاق النافذة المنبثقة
    if (isValid) {
        alert("Registration successful!");
        // يمكنك إرسال النموذج إلى السيرفر هنا
        // document.getElementById('register-form').submit();
    }
});

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
