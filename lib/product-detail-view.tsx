import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import RelatedProducts from "@/components/RelatedProducts";
import { Breadcrumb } from "@/components/breadcrumb";

export const product = {
  name: "Thuốc trừ sâu Aragon 40WG",
  price: 125000,
  inStock: true,
  description:
    "<h2>THÔNG TIN SẢN PHẨM CHI TIẾT</h2><p><strong>Tên sản phẩm:</strong> Yến Chưng Nóng Ngũ Vị Bổ Dưỡng</p><p><strong>Dung tích:</strong> 70ml – 100ml – 150ml – 200ml</p><p><strong>Hàm lượng yến:</strong> 15gr – 25gr – 45gr – 60gr</p><p><strong>Thành phần:</strong></p><p>Yến tươi 100%, hạt chia, táo đỏ, kỷ tử tuyển chọn, long nhãn, đông trùng hạ thảo, đường phèn tự nhiên (hoặc không đường theo yêu cầu).</p><p><strong>Hình thức:</strong> Chưng nóng tại chỗ khi khách đặt</p><p><strong>Mùi vị:</strong> Thanh ngọt tự nhiên, dễ uống, nhẹ bụng, không gắt</p><h2>ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM</h2><p>Nguyên chất 100%: Yến tươi làm sạch thủ công kết hợp 5 nguyên liệu dưỡng chất chọn lọc</p><p>Chưng nóng theo từng phần: Không chưng sẵn, không bảo quản dài ngày</p><p>Sợi yến mềm dai tự nhiên: Giữ nguyên sợi, không nhão, không nát</p><p>Hương vị cân bằng: Ngọt dịu từ long nhãn – táo đỏ, hạt chia tạo cảm giác no nhẹ, dễ chịu</p><p>Không chất bảo quản – Không hương liệu – Không phụ gia tạo đặc</p><h2>QUY TRÌNH CHƯNG YẾN TẠI KIMI STORE</h2><p>Làm sạch yến tươi thủ công: Giữ trọn sợi yến, không xử lý hóa chất</p><p>Sơ chế hạt chia – táo đỏ – kỷ tử – long nhãn – đông trùng trong ngày: Nguyên liệu được chọn lọc và làm sạch kỹ</p><p>Định lượng nguyên liệu chuẩn: Yến và các vị được cân theo tỉ lệ hài hòa, không gây nặng bụng</p><p>Chưng nóng đúng thời gian: Kiểm soát nhiệt độ để yến chín đều, giữ dưỡng chất và kết cấu</p><p>Đóng hũ và giao ngay: Sản phẩm giữ độ nóng ấm và độ tươi khi đến tay khách</p><h2>CÔNG DỤNG CỦA SẢN PHẨM</h2><ul><li>Bồi bổ cơ thể toàn diện nhưng nhẹ nhàng, dễ hấp thu</li><li>Hỗ trợ phục hồi thể trạng khi mệt mỏi</li><li>Giúp cơ thể đủ năng lượng mà không gây nặng bụng</li><li>Phù hợp dùng hằng ngày như bữa phụ dinh dưỡng</li><li>Thích hợp cho người theo đuổi chế độ ăn uống lành mạnh</li></ul><h2>ĐỐI TƯỢNG SỬ DỤNG</h2><ul><li>Người lớn tuổi</li><li>Người làm việc nhiều, thường xuyên mệt mỏi</li><li>Người cần bồi bổ nhưng sợ “bổ quá nặng”</li><li>Phụ nữ sau sinh</li><li>Trẻ em từ 6 tuổi trở lên</li><li>Khách thích yến nóng, vị thanh ngọt, dễ uống</li><li>Người ưu tiên thực phẩm nguyên chất, không chất bảo quản</li></ul><h2>VÌ SAO NÊN CHỌN YẾN CHƯNG TẠI KIMI STORE?</h2><p>Kimi Store chỉ sử dụng yến tươi nguyên chất cùng các nguyên liệu dưỡng chất tuyển chọn, chưng nóng theo từng phần ngay khi khách đặt.</p><p>Không chưng sẵn – không pha trộn – không chất bảo quản.</p><p>Mỗi hũ yến tại Kimi đảm bảo tươi mới, an toàn và dễ hấp thu, đúng tinh thần bồi bổ lâu dài và bền vững.</p><p><strong>Thưởng thức ngay Yến Chưng Nóng Ngũ Vị Bổ Dưỡng tại Kimi Store – thanh nhẹ, dễ uống và được chưng nóng ngay khi bạn đặt.</strong></p><p>👉 <strong>Đặt ngay hôm nay để bồi bổ cơ thể mỗi ngày theo cách tự nhiên cùng Kimi Store.</strong></p>",
  images: [
    "/images/sample-product.png",
    "/images/sample-1.png",
    "/images/sample-2.png",
    "/images/sample-3.png",
    "/images/sample-4.png",
  ],
};

const relatedProducts = [
  {
    slug: "drainage-cleaner-1",
    name: "Thuốc trừ sâu",
    price: 19000,
    originalPrice: 29000,
    image: "/images/gallery-1.jpg",
    badge: "Sale",
  },
  {
    slug: "drainage-cleaner-2",
    name: "Thuốc trừ sâu",
    price: 19000,
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "drainage-cleaner-3",
    name: "Thuốc trừ sâu",
    price: 19000,
    originalPrice: 40000,
    image: "/images/gallery-3.jpg",
    badge: "50%",
  },
  {
    slug: "drainage-cleaner-4",
    name: "Thuốc trừ sâu",
    price: 19000,
    image: "/images/gallery-4.jpg",
  },
];

const ProductDetailView = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Breadcrumb
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm", href: "/products" },
            { label: product.name },
          ]}
        />
        <ProductDetail product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailView;
