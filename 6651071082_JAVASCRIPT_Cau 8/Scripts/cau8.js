$(function(){
  $(".op").on("click", function(){
    const a = parseFloat($("#a").val());
    const b = parseFloat($("#b").val());
    const op = $(this).data("op");
    const $loi = $("#loi").text("");

    if (isNaN(a) || isNaN(b)){
      $("#kq").val("");
      $loi.text("Vui lòng nhập hai số hợp lệ!");
      return;
    }

    let r;
    switch (op){
      case "+": r = a + b; break;
      case "-": r = a - b; break;
      case "x": r = a * b; break;
      case "/":
        if (b === 0){
          $("#kq").val("");
          $loi.text("Không thể chia cho 0!");
          return;
        }
        r = a / b;
        break;
      case "^": r = Math.pow(a, b); break;
    }

    if (!isFinite(r)){
      $("#kq").val("");
      $loi.text("Kết quả không hợp lệ hoặc quá lớn!");
      return;
    }
    $("#kq").val(Math.round(r * 1e10) / 1e10);
  });
});
