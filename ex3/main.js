document.getElementById("btnSubmit").onclick = function () {
    let hoTen = document.getElementById("hoTen").value;
    let tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    let nguoiPhuThuoc = parseInt(document.getElementById("nguoiPhuThuoc").value);
  
    let thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  
    function tinhThuNhapChiuThue(thunhap) {
      let thueSuat = 0;
      if (thunhap <= 60000000) {
        thueSuat = (thunhap * 5) / 100;
      } else if (thunhap > 60000000 && thunhap <= 120000000) {
        thueSuat = (thunhap * 10) / 100;
      } else if (thunhap > 120000000 && thunhap <= 210000000) {
        thueSuat = (thunhap * 15) / 100;
      } else if (thunhap > 210000000 && thunhap <= 384000000) {
        thueSuat = (thunhap * 20) / 100;
      } else if (thunhap > 384000000 && thunhap <= 624000000) {
        thueSuat = (thunhap * 25) / 100;
      } else if (thunhap > 624000000 && thunhap <= 960000000) {
        thueSuat = (thunhap * 30) / 100;
      } else {
        thueSuat = (thunhap * 35) / 100;
      }
      return thueSuat;
    }
  
    let thuePhaiTra = tinhThuNhapChiuThue(thuNhapChiuThue);
    document.getElementById(
      "output"
    ).textContent = `Họ tên: ${hoTen}\n Thu nhập hàng năm: ${tongThuNhap} VND\nThu nhập chịu thuế: ${thuNhapChiuThue.toLocaleString()} VND\nThuế phải trả:${thuePhaiTra.toLocaleString()} VND`;
};
