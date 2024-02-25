# SPA - Single-Page Application
- ReactJS là 1 trong những thư viện tạo ra SPA
- Các "ông lớn" sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác: F8, Shoppe, 30Shine, chotot, zingmp3

## Cách triển khai
- SPA - Single-Page Application -> CSR -> Client side rendering
- MPA - Multi-Page Application -> SSR -> Server side rendering

---

## Sự khác biệt

### SPA
- Được cho là cách tiếp cận hiện đại hơn
- Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA
- Là cách tiếp cận cổ điển hơn
- Tải lại trang trong quá trình sử dụng (Click vào đường link,chuyển sang,... )

### Demo
 - SPA : do JavaScript hoàn toàn xử lý
 - render : nôm na là hiển thị nội dung trên trình duyệt
---
 - MPA : do back-end xử lý, nên reload lại trang mỗi lần chuyển trang

## So sánh

### Tốc độ
- SPA nhanh hơn khi sử dụng
    - Phần lớn tài nguyên được tải trong lần đầu
    - Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng
    - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bóc tách
- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong

### SEO
- SPA không thân thiện với SEO như MPA
- Trải ghiệm trên thiết bị di động tốt hơn

### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn

### Quá trình phát triển
- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE và BE
    - Chia team phát triển song song
    - Phát triển thêm mobile app dễ dàng

### Phụ thuộc Javascript
- SPA phụ thuộc hoàn toàn vào Javascript 
- MPA có thể không cần Javascript

---

### Chọn SPA hay MPA ?
- Không có thử gì luôn hoàn hảo trong mọi trường hợp

 - Trang bán hàng đơn giản, tương lai ko có ý định phát triển to lớn, ko mở thêm moblie app, đảm bảo phát triển nhanh => MPA, ko mất công viết APi, Không mất công bóc tách, deploy nhanh, dể dang hơn
 . Chi Phí phát triển thấp hơn, client-serve side, render dữ liệu từ server

 - Khách hàng quan tâm trải nghiệm người dùng, muốn dùng thêm moblie app, muốn phát triển thêm feature, có nhiều chức năng trong tương lai, có trải nghiệm người dùng tốt thì sẽ làm dưới dạng SPA.
 . Chi phí phát triển cao hơn

 ### Performance
 - Ứng dụng rất nhiều người truy cập thì SPA giảm tải lượt truy cập server. Vì render dữ liệu đẩy về client làm, trình duyệt tự đọc script, tự render giao diện

 - MPA khi nhiều người sử dụng thì tất cả các request đổ lên phía serve, thao tác chuyển trang phải request lên serve 1 cái, nên tăng tải cho serve, tốn chi phí nhiều hơn về máy chủ, bỏ ra nhiều tiền hơn về hạ tầng
