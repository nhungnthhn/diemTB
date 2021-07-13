function baohanh() {
    let km = prompt("Hãy nhập số km:");
    let nam = prompt ("Hãy nhập số năm:");
    let bao_hanh = km <= 20000 && nam <=7;
    document.write("Còn hạn bảo hành?" +  bao_hanh);
}