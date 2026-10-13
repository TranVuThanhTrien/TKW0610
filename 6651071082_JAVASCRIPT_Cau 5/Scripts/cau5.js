// Danh sách ảnh theo đề bài: đường dẫn, chiều rộng, chiều cao
const danhSachAnh = [
  {src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", w: "240", h: "160"},
  {src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",      w: "320", h: "195"},
  {src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",    w: "500", h: "343"}
];

function display_random_image(){
  const r = danhSachAnh[Math.floor(Math.random() * danhSachAnh.length)];
  $("#hinh").empty().append(
    $("<img>").attr({src: r.src, width: r.w, height: r.h, alt: "Hình ngẫu nhiên"})
  );
}