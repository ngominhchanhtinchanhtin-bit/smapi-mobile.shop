"use client";

import { useState } from 'react';
import styles from './product.module.css';
import { Header } from '../../components/header/header';
export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [showMore, setShowMore] = useState(false);

  const product = {
    name: "iPhone 17 Pro Max 1TB Chính Hãng",
    brand: "Apple", 
    newPrice: "46.990.000đ",
    oldPrice: "50.990.000đ",
    discount: "-8%",
    status: "Còn hàng",
    specs_short: [
      "Màn hình: 6.9 inch, Super Retina XDR, 3000 nits",
      "Chip: Apple A19 Pro mạnh mẽ nhất",
      "Camera: Chính 48MP & Phụ 48MP, Zoom quang 8x",
      "Pin: Thời lượng sử dụng lên đến 37 giờ",
      "Cổng sạc: USB-C thế hệ mới"
    ]
  };

  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
  const handleIncrease = () => setQuantity(quantity + 1);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#f4f4f4', paddingBottom: '60px' }}>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.breadcrumb}>
          <span>Trang chủ</span> / <span>Điện thoại</span> / <span className={styles.current}>{product.name}</span>
        </div>

        <div className={styles.productTop}>
          {/* Cột trái: Hình ảnh */}
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <span className={styles.badge}>{product.discount}</span>
              <img src="/download (1).jpg" alt={product.name} />
            </div>
            <div className={styles.thumbnailList}>
              {[1,].map((i) => (
                <div key={i} className={styles.thumbnail}>
                   <img src={"/download (1).jpg"} alt={`Thumb ${i}`} />

                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: Thông tin */}
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productBrand}>
              Thương hiệu: <strong style={{color: '#ee2624'}}>{product.brand}</strong> | 
              Tình trạng: <span style={{color: '#27ae60'}}>✔ {product.status}</span>
            </p>
            
            <div className={styles.priceBox}>
              <span className={styles.newPrice}>{product.newPrice}</span>
              <span className={styles.oldPrice}>{product.oldPrice}</span>
            </div>

            <div className={styles.shortSpecs}>
              <h3>Thông số nổi bật:</h3>
              <ul>
                {product.specs_short.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className={styles.purchaseActions}>
              <div className={styles.quantitySelector}>
                <button onClick={handleDecrease}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className={styles.btnAddToCart}>THÊM VÀO GIỎ HÀNG</button>
              <button className={styles.btnBuyNow}>MUA NGAY</button>
            </div>
          </div>
        </div>

        {/* Phần Tabs Chi tiết */}
        <div className={styles.productDetailsBottom}>
          <div className={styles.tabs}>
            <button className={activeTab === 'desc' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('desc')}>MÔ TẢ SẢN PHẨM</button>
            <button className={activeTab === 'spec' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('spec')}>THÔNG SỐ KỸ THUẬT</button>
            <button className={activeTab === 'review' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('review')}>ĐÁNH GIÁ (68)</button>
          </div>

          <div className={styles.tabContent}>
            {/* Tab 1: Mô tả chi tiết */}
            {activeTab === 'desc' && (
              <div className={styles.descriptionSection}>
                <div className={styles.toc}>
                   <h4>Nội dung chính</h4>
                   <ol>
                      <li>iPhone 17 Pro Max khi nào ra mắt?</li>
                      <li>iPhone 17 Pro Max giá bao nhiêu?</li>
                      <li>iPhone 17 Pro Max có mấy màu?</li>
                   </ol>
                </div>
                <div className={`${styles.article} ${showMore ? styles.expanded : ''}`}>
                  <p><strong>iPhone 17 Pro Max 1TB</strong> chính thức ra mắt tháng 9/2025, đánh dấu bước tiến lớn trong lịch sử Apple với thiết kế khung nhôm hoàn toàn mới. Phiên bản 1TB hướng đến những ai cần không gian lưu trữ khổng lồ để quay video 4K, chụp ảnh RAW...</p>
                  <p>Chip A19 Pro kết hợp hệ thống tản nhiệt buồng hơi giúp máy xử lý nhanh hơn 20% so với thế hệ trước. Màn hình 6.9 inch đạt độ sáng tối đa 3000 nits cực ấn tượng.</p>
                </div>
                <button className={styles.btnShowMore} onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Thu gọn" : "Xem thêm"}
                </button>
              </div>
            )}

            {/* Tab 2: Thông số kỹ thuật (Dựa trên hình ảnh) */}
            {activeTab === 'spec' && (
              <div className={styles.specsTable}>
                <h3>Thông số kỹ thuật chi tiết</h3>
                <div className={styles.specGroup}>
                  <h4>Màn hình</h4>
                  <table>
                    <tbody>
                      <tr><td>Công nghệ màn hình</td><td>Super Retina XDR, ProMotion</td></tr>
                      <tr><td>Độ sáng tối đa</td><td>3000 nits</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.specGroup}>
                  <h4>Hệ điều hành & CPU</h4>
                  <table>
                    <tbody>
                      <tr><td>Chip xử lý (CPU)</td><td>Apple A19 Pro</td></tr>
                      <tr><td>Hệ điều hành</td><td>iOS 26</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 3: Đánh giá */}
            {activeTab === 'review' && (
              <div className={styles.reviewSection}>
                <div className={styles.ratingSummary}>
                  <div className={styles.ratingBig}>4.7</div>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <p>68 người đã đánh giá</p>
                </div>
                {/* Mock Review List */}
                <div className={styles.commentItem}>
                  <strong>Đặng Ngọc Linh</strong> <span className={styles.commentDate}>05/03/2026</span>
                  <p>iPhone 17 Pro Max 1TB là sự lựa chọn hoàn hảo. AI rất thông minh và ổn định.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}