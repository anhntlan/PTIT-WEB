class NhanVien {
    constructor(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }

    // Method để cập nhật thông tin nhân viên
    capNhatThongTin(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }

    // Method để hiển thị thông tin nhân viên
    hienThiThongTin() {
        console.log(`Mã NV: ${this.maNV}`);
        console.log(`Họ và tên: ${this.hoTen}`);
        console.log(`Ngày sinh: ${this.ngaySinh}`);
        console.log(`Phòng ban: ${this.phongBan}`);
        console.log(`Hệ số lương: ${this.heSoLuong}`);
    }
}

function quanLyNhanVien() {
    let soLuongNV = prompt("Nhập số lượng nhân viên: ");
    let danhSachNhanVien = [];

    for (let i = 0; i < soLuongNV; i++) {
        let maNV = prompt("Nhập mã NV: ");
        let hoTen = prompt("Nhập họ và tên: ");
        let ngaySinh = prompt("Nhập ngày sinh: ");
        let phongBan = prompt("Nhập phòng ban: ");
        let heSoLuong = prompt("Nhập hệ số lương: ");

        danhSachNhanVien.push(new NhanVien(maNV, hoTen, ngaySinh, phongBan, heSoLuong));
    }

    console.log("Danh sách nhân viên:");
    danhSachNhanVien.forEach(nv => nv.hienThiThongTin());
}

quanLyNhanVien();
