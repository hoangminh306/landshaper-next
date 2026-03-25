// components/ui/ImageLightbox.tsx
"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Tùy chọn: Thêm plugin để có nút download, zoom, v.v. nếu cần
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface ImageLightboxProps {
  open: boolean;
  close: () => void;
  slides: { src: string; alt?: string }[];
  index: number; // Chỉ số ảnh bắt đầu hiển thị
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  open,
  close,
  slides,
  index,
}) => {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      // plugins={[Zoom]} // Bỏ comment nếu muốn dùng plugin zoom
      // Tùy chỉnh render ảnh để tối ưu hoặc thêm alt text
      render={{
        slide: ({ slide, rect }) => {
          const width = Math.min(slide.width || Infinity, rect.width);
          const height = Math.min(slide.height || Infinity, rect.height);
          return (
            <div style={{ position: "relative", width, height }}>
              <img
                src={slide.src}
                alt={slide.alt || "Giấy chứng nhận"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          );
        },
      }}
    />
  );
};

export default ImageLightbox;
