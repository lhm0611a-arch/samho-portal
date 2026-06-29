import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// 미리 설정된 이미지 경로 목록 (jpg, png 모두 포함)
const potentialImages = [
  "/yard.png",
  ...Array.from({ length: 10 }, (_, i) => `/bg${i + 1}.jpg`),
  ...Array.from({ length: 10 }, (_, i) => `/bg${i + 1}.png`),
];

export function BackgroundSlider() {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;

    const checkImages = async () => {
      // 이미지들이 실제로 존재하는지(로딩 가능한지) 확인
      const results = await Promise.all(
        potentialImages.map((src) => {
          return new Promise<string | null>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          });
        })
      );

      if (mounted) {
        // 성공적으로 로드된 이미지들만 필터링
        const valid = results.filter((src): src is string => src !== null);
        // 만약 모두 실패하면 기본값 하나를 할당 (오류 방지)
        setValidImages(valid.length > 0 ? valid : ["/yard.png"]);
      }
    };

    checkImages();

    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (validImages.length <= 1) return; // 1개 이하면 슬라이더 애니메이션 불필요
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, 4000); // 4초마다 변경
    
    return () => clearInterval(timer);
  }, [validImages.length]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0f18]">
      {validImages.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          initial={false}
          animate={{ 
            opacity: index === i ? 1 : 0, 
            scale: index === i ? 1 : 1.05,
            zIndex: index === i ? 10 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover saturate-[1.1]"
          alt={`Shipyard Background ${i + 1}`}
        />
      ))}
      
      {/* 선명함을 위해 안개처럼 보이던 어두운 오버레이(gradient)를 대폭 옅게 조정했습니다 */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-blue-500/10 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
