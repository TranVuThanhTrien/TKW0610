function getOptions(){
  const ds = $("#mySelect option").map(function(){
    return $(this).text();
  }).get();
  alert("Số mục: " + ds.length + "\nCác mục: " + ds.join(", "));
}
