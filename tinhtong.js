function tinhtong() {
//  lay thong tin diem tu nguoi dung
    let x = parseFloat(prompt ("Hãy nhập điểm Toán"));
    let y = parseFloat(prompt ("Hãy nhập điểm Lý"));
    let z = parseFloat(prompt ("Hãy nhập điểm Hóa"));

// tinh tong
    let tong = x + y + z;
    let m = parseFloat(tong); tong = Math.round(m * 100)/100;
    let TB = tong/3;
    let n = parseFloat(TB); TB = Math.round(n * 100)/100;

// In kết quả ra màn hình
    document.write("Điểm tổng nà: " + tong + "<br>" + "Điểm TB xún dòng nà: " + TB);
}