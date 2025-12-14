// ==============================
// GLOBAL REFERENCES (LOCKED)
// ==============================
const productIdInput = document.getElementById("productId");
const productNameInput = document.getElementById("productName");
const manufacturerInput = document.getElementById("manufacturer");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("productTableBody");

// ---- Search References ----
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");

// ---- Edit Modal References ----
const editModal = document.getElementById("editModal");
const editProductId = document.getElementById("editProductId");
const editProductName = document.getElementById("editProductName");
const editManufacturer = document.getElementById("editManufacturer");
const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");

// ==============================
// LOAD PRODUCTS ON PAGE LOAD
// ==============================
window.onload = function () {
    loadProducts();
};

// ==============================
// FETCH + RENDER PRODUCTS
// ==============================
function loadProducts() {
    fetch("/home")
        .then(response => response.json())
        .then(data => {
            renderTable(data);
        })
        .catch(error => {
            console.error("Error loading products:", error);
        });
}

// ==============================
// RENDER TABLE ROWS
// ==============================
function renderTable(products) {
    tableBody.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.productId}</td>
            <td>${product.productName}</td>
            <td>${product.manufacturer}</td>
            <td>
                <button class="action-btn show-btn"
                    onclick="showMoreInfo(${product.productId},
                                           '${product.productName}',
                                           '${product.manufacturer}')">
                    Show
                </button>

                <button class="action-btn edit-btn"
                    onclick="openEditModal(${product.productId},
                                           '${product.productName}',
                                           '${product.manufacturer}')">
                    Edit
                </button>

                <button class="action-btn delete-btn"
                    onclick="deleteProduct(${product.productId})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// ==============================
// ADD PRODUCT
// ==============================
addBtn.addEventListener("click", function () {

    const productId = productIdInput.value;
    const productName = productNameInput.value;
    const manufacturer = manufacturerInput.value;

    if (!productId || !productName || !manufacturer) {
        alert("Please fill all fields");
        return;
    }

    const product = {
        productId: Number(productId),
        productName: productName,
        manufacturer: manufacturer
    };

    fetch("/addProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(() => {
        clearForm();
        loadProducts();
    })
    .catch(error => {
        console.error("Error adding product:", error);
    });
});

// ==============================
// DELETE PRODUCT
// ==============================
function deleteProduct(id) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    fetch(`/product/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        loadProducts();
    })
    .catch(error => {
        console.error("Error deleting product:", error);
    });
}

// ==============================
// SHOW MORE INFO (MODAL)
// ==============================
function showMoreInfo(id, name, manufacturer) {
    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.6)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    modal.innerHTML = `
        <div style="
            background:#1f1f1f;
            padding:30px;
            border-radius:14px;
            min-width:300px;
            box-shadow:0 10px 30px rgba(0,0,0,0.6);
        ">
            <h2 style="margin-top:0;">Product Details</h2>
            <p><b>ID:</b> ${id}</p>
            <p><b>Name:</b> ${name}</p>
            <p><b>Manufacturer:</b> ${manufacturer}</p>

            <button style="
                margin-top:20px;
                padding:10px 20px;
                border:none;
                border-radius:8px;
                background:#00c6ff;
                cursor:pointer;
                font-weight:bold;
            " onclick="document.body.removeChild(this.parentElement.parentElement)">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}

// ==============================
// OPEN EDIT MODAL
// ==============================
function openEditModal(id, name, manufacturer) {
    editProductId.value = id;
    editProductName.value = name;
    editManufacturer.value = manufacturer;
    editModal.style.display = "flex";
}

// ==============================
// CANCEL EDIT
// ==============================
cancelBtn.addEventListener("click", function () {
    editModal.style.display = "none";
});

// ==============================
// UPDATE PRODUCT (PATCH)
// ==============================
updateBtn.addEventListener("click", function () {

    const id = editProductId.value;

    const updatedProduct = {
        productName: editProductName.value,
        manufacturer: editManufacturer.value
    };

    fetch(`/product/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(() => {
        editModal.style.display = "none";
        loadProducts();
    })
    .catch(error => {
        console.error("Error updating product:", error);
    });
});

// ==============================
// SEARCH PRODUCTS
// ==============================
searchBtn.addEventListener("click", function () {
    const keyword = searchInput.value.trim();

    if (keyword === "") {
        loadProducts();
        return;
    }

    fetch(`/product/search?name=${encodeURIComponent(keyword)}`)
        .then(response => response.json())
        .then(data => {
            renderTable(data);
        })
        .catch(error => {
            console.error("Error searching products:", error);
        });
});

// ==============================
// CLEAR SEARCH
// ==============================
clearSearchBtn.addEventListener("click", function () {
    searchInput.value = "";
    loadProducts();
});

// ==============================
// CLEAR FORM
// ==============================
function clearForm() {
    productIdInput.value = "";
    productNameInput.value = "";
    manufacturerInput.value = "";
}
