// Nhập điểm chuẩn

function kiemTraDauRot() {
  let toan = parseFloat(document.getElementById("dToan"));
  let ly = parseFloat(document.getElementById("dLy"));
  let hoa = parseFloat(document.getElementById("dHoa"));
  // Cho biến tổng 3 môn bằng 0
  let sumBaMon = 0;
  if (toan <= 2 || ly <= 2 || hoa <= 2) {
    return "Rớt (có môn 0 điểm)";
  } else if (toan > 2 && ly > 2 && hoa > 2) {
    sumBaMon = toan + ly + hoa;
  }
  const khuVucUuTien = [2, 1, 0.5, 0]; // A, B, C, X
  const doiTuongUuTien = [2.5, 1.5, 1, 0]; // 1, 2, 3, 0

  // Điểm ưu tiên khu vực
  function diemKhuVuc(khuvuc) {
    let khuvuc = document.getElementById("khuvuc").value;

    switch (khuvuc) {
      case "A":
        return khuVucUuTien[0]; // 2
      case "B":
        return khuVucUuTien[1]; // 1
      case "C":
        return khuVucUuTien[2]; // 0.5
      case "X":
        return khuVucUuTien[3]; //0
      default:
        break;
    }
  }

  // Điểm ưu tiên đối tượng
  function diemDoiTuong(doituong) {
    let doituong = document.getElementById("doituong").value;
    switch (doituong) {
      case 1:
        return doiTuongUuTien[0]; // 2.5
      case 2:
        return doiTuongUuTien[1]; // 1.5
      case 3:
        return doiTuongUuTien[2]; // 1
      case 0:
        return doiTuongUuTien[3]; //0
      default:
        break;
    }
  }

  const diemUuTienKhuVuc = diemKhuVuc(khuvuc);
  const diemUuTienDoiTuong = diemDoiTuong(doituong);
  const diemUuTienTong = diemUuTienKhuVuc + diemUuTienDoiTuong;

  // Tính điểm tổng kết
  const diemTongKet = sumBaMon + diemUuTienTong;
}
