function calculateCost() {  
    var customerCode = document.getElementById('customerCode').value;  
    var customerType = document.getElementById('customerType').value;  
    var connections = parseInt(document.getElementById('connections').value);  
    var totalCost = 0;  

    if (customerType === "Nhà dân") {  
        totalCost = 4.5 + 20.5 + (7.5 * connections);  
    } else if (customerType === "Doanh nghiệp") {  
        if (connections <= 10) {  
            totalCost = 15 + 75 + (50 * connections);  
        } else {  
            totalCost = 15 + (75 + (connections - 10) * 5) + (50 * connections);  
        }  
    } else {  
        document.getElementById('result').innerText = "Loại khách hàng không hợp lệ.";  
        return;  
    }  

    document.getElementById('result').innerText =   
        `Tổng chi phí cho khách hàng ${customerCode} là: $${totalCost.toFixed(2)}`;  
}