function insert_Row(){
  const n = $("#sampleTable tr").length + 1;
  $("#sampleTable").append(
    "<tr><td>Row" + n + " cell1</td><td>Row" + n + " cell2</td></tr>"
  );
}
