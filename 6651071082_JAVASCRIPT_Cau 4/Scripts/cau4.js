function removecolor(){
  const $chon = $("#colorSelect option:selected");
  if ($chon.length === 0){
    alert("Danh sách đã hết, không còn mục để xóa!");
    return;
  }
  $chon.remove();
}
