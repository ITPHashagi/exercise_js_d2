function calculateCost() {  
    var idKhachHang = document.getElementById('idKhachHang').value;  
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;  
    var soKetNoi = parseInt(document.getElementById('soKetNoi').value);  
    var totalCost = 0;  

    if (loaiKhachHang === "Nhà dân") {  
        totalCost = 4.5 + 20.5 + (7.5 * soKetNoi);  
    } else if (loaiKhachHang === "Doanh nghiệp") {  
        if (soKetNoi <= 10) {  
            totalCost = 15 + 75 + (50 * soKetNoi);  
        } else {  
            totalCost = 15 + (75 + (soKetNoi - 10) * 5) + (50 * soKetNoi);  
        }  
    } else {  
        document.getElementById('result').innerText = "Loại khách hàng không hợp lệ.";  
        return;  
    }  

    document.getElementById('result').innerText =   
        `Tổng chi phí cho khách hàng ${idKhachHang} là: $${totalCost.toFixed(2)}`;  
}