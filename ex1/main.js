document.getElementById('btnSubmitEx1').onclick = function (){
    // khai báo biến
    const diemChuan = parseFloat(document.getElementById("diemchuan").value);
    const diemToan = parseFloat(document.getElementById("dToan").value);
    const diemLy = parseFloat(document.getElementById("dLy").value);
    const diemHoa = parseFloat(document.getElementById("dHoa").value);
    const khuVuc = document.getElementById("khuvuc").value.toUpperCase();
    const doiTuong = parseInt(document.getElementById("doituong").value);

    // Kiểm tra nếu có môn nào điểm 0 thì rớt
    if (diemToan === 0 || diemLy === 0 || diemHoa === 0) {
        return document.getElementById("diemTongKet").textContent = "Rớt (Có môn điểm 0)";
    }

    // Điểm ưu tiên khu vực
    const khuVucUuTien = [2, 1, 0.5, 0];
    const doiTuongUuTien = [2.5, 1.5, 1, 0];

    // Điểm ưu tiên khu vực
    function layDiemUuTienKhuVuc(khuVuc) {
        switch (khuVuc) {
            case "A": return khuVucUuTien[0];
            case "B": return khuVucUuTien[1];
            case "C": return khuVucUuTien[2];
            default: return khuVucUuTien[3]; // "X" hoặc giá trị khác
        }
    }

    // Điểm ưu tiên đối tượng
    function layDiemUuTienDoiTuong(doiTuong) {
        if (doiTuong >= 1 && doiTuong <= 3) {
            return doiTuongUuTien[doiTuong - 1];
        }
        return doiTuongUuTien[3]; // Đối tượng 0 hoặc không hợp lệ
    }

    // Tính điểm ưu tiên
    const diemUuTienKhuVuc = layDiemUuTienKhuVuc(khuVuc);
    const diemUuTienDoiTuong = layDiemUuTienDoiTuong(doiTuong);
    const diemUuTienTong = diemUuTienKhuVuc + diemUuTienDoiTuong;

    // Tính tổng điểm
    const diemTongKet = diemToan + diemLy + diemHoa + diemUuTienTong;

    // Kiểm tra đậu hay rớt
    if (diemTongKet >= diemChuan) {
        document.getElementById("diemTongKet").innerHTML = `Đậu với tổng điểm ${diemTongKet}`;
    } else {
        document.getElementById("diemTongKet").innerHTML = `Rớt với tổng điểm ${diemTongKet}`;
    }
}
