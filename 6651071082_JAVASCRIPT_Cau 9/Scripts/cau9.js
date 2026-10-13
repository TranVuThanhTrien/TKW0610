$(function(){

  // Ghi thông báo lỗi cạnh ô nhập; trả về true nếu hợp lệ (msg rỗng)
  function setErr(id, msg){
    $("#err-" + id).text(msg);
    return msg === "";
  }

  function checkEmail(s){
    if (s === "") return "Vui lòng nhập email";
    // account: nhiều nhất 1 dấu chấm | đúng 1 dấu @ | domain: ít nhất 1 dấu chấm
    const re = /^[\w+-]+(\.[\w+-]+)?@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
    return re.test(s) ? "" : "Email không hợp lệ (vd: ten.ho@gmail.com)";
  }

  function checkBirthday(s){
    if (s === "") return "Vui lòng nhập ngày sinh";
    const m = s.match(/^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/);
    if (!m) return "Định dạng phải là mm/dd/yyyy hoặc mm-dd-yyyy";
    const mon = parseInt(m[1], 10), day = parseInt(m[3], 10), yr = parseInt(m[4], 10);
    if (mon < 1 || mon > 12) return "Tháng phải từ 1 đến 12";
    if (yr < 1900 || yr >= new Date().getFullYear()) return "Năm phải từ 1900 và nhỏ hơn năm hiện tại";
    if (day < 1 || day > new Date(yr, mon, 0).getDate()) return "Ngày không hợp lệ";
    return "";
  }

  function finish(){
    let ok = true;
    ok = setErr("name",   $("#name").val().trim() === "" ? "Vui lòng nhập tên" : "") && ok;
    ok = setErr("sex",    $("input[name='sex']:checked").length === 0 ? "Vui lòng chọn giới tính" : "") && ok;
    ok = setErr("email",  checkEmail($("#email").val().trim())) && ok;
    ok = setErr("birthday", checkBirthday($("#birthday").val().trim())) && ok;
    ok = setErr("street", $("#street").val().trim() === "" ? "Vui lòng nhập địa chỉ" : "") && ok;
    ok = setErr("city",   $("#city").val().trim() === "" ? "Vui lòng nhập thành phố" : "") && ok;
    ok = setErr("region", $("#region").val() === "" ? "Vui lòng chọn khu vực" : "") && ok;
    const zip = $("#zip").val().trim();
    ok = setErr("zip",    zip === "" ? "Vui lòng nhập ZIP code" : (/^\d{5}$/.test(zip) ? "" : "ZIP code phải gồm đúng 5 chữ số")) && ok;

    const $kq = $("#ketqua");
    if (ok) $kq.text("Đăng ký thành công! Dữ liệu hợp lệ.").css("color", "green");
    else    $kq.text("Vui lòng sửa các lỗi được báo ở trên.").css("color", "red");
  }

  function clearAll(){
    $("#regForm")[0].reset();      // xóa mọi dữ liệu đã nhập
    $(".err").text("");
    $("#ketqua").text("");
  }

  $("#btnFinish").on("click", finish);
  $("#btnClear").on("click", clearAll);
  $("#regForm").on("submit", function(e){ e.preventDefault(); finish(); });
});
