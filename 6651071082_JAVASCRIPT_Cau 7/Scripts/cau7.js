$(function(){
  $("#linkForm").on("submit", function(e){
    e.preventDefault();
    let link = $("#linkInput").val().trim();
    if (link === ""){
      alert("Vui lòng nhập đường link!");
      return;
    }
    // Thiếu http:// hoặc https:// thì tự thêm vào
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(link)) link = "https://" + link;
    // OK: chuyển đến trang; Cancel: không làm gì
    if (confirm("Bạn có muốn chuyển đến trang:\n" + link + " ?")){
      window.location.href = link;
    }
  });
});
