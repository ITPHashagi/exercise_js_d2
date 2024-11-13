document.getElementById("btnSubmit").onclick = function () {
  let soDien = parseFloat(document.getElementById("dienDaSuDung").value);
  let output = document.getElementById("output");

  if (soDien < 0 || isNaN(soDien)) {
    output.textContent = "Vui lòng nhập số kw hợp lệ";
    return;
  }
  //   Hàm tính tiền
  function tinhTienDien(kw) {
    let total = 0;

    if (kw > 0 && kw <= 50) {
      total = kw * 500;
    } else if (kw <= 100) {
      total = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
      total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
      total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
      total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    return total;
  }

  const tienDien = tinhTienDien(soDien);
  //   Output
  output.textContent = `Số điện đã sử dụng là: ${soDien} kW \nTổng: ${tienDien.toLocaleString()} VND`;
};
