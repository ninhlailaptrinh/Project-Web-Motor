// Lấy tham chiếu đến modal và nút đóng
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close__modal");

// Lấy tất cả các nút "Xem chi tiết"
const detailButtons = document.querySelectorAll(".product__card .btn");

// Thêm sự kiện click cho từng nút
detailButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Lấy thông tin từ product card
    const card = this.closest(".product__card");
    const title = card.querySelector("h3").textContent;
    const img = card.querySelector("img").src;
    const specs = card.querySelectorAll("p");

    // Cập nhật nội dung modal
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalImage").src = img;
    document.getElementById("modalEngine").textContent = specs[0].textContent;
    document.getElementById("modalPower").textContent = specs[1].textContent;
    document.getElementById("modalTorque").textContent = specs[2].textContent;

    // Hiển thị modal
    modal.style.display = "block";
  });
});

// Đóng modal khi click vào nút đóng
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Đóng modal khi click bên ngoài modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});