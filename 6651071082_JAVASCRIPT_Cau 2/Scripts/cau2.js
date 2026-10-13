function getFormvalue(){
  const fname = $("#form1 input[name='fname']").val();
  const lname = $("#form1 input[name='lname']").val();
  alert("Họ và tên: " + fname + " " + lname);
  return false;   // không cho form tải lại trang
}
