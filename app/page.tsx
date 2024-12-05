"use client";

import { useState } from "react";
import "./globals.css";

interface Circle {
  id: number;
  x: number; // 横位置 (%)
  y: number; // 縦位置 (%)
}

export default function Home() {
  const [circles, setCircles] = useState<Circle[]>(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10% ~ 90% の範囲で配置
      y: Math.random() * 80 + 10, // 10% ~ 90% の範囲で配置
    }))
  );

  const [draggingCircle, setDraggingCircle] = useState<number | null>(null); // ドラッグ中の丸の ID
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 }); // ドラッグ開始時のオフセット

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    // ドラッグ開始
    const circle = circles.find((c) => c.id === id);
    if (!circle) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggingCircle(id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (draggingCircle === null) return;

    // 画面サイズに対するドラッグ位置の計算
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const newX = ((clientX - offset.x) / innerWidth) * 100;
    const newY = ((clientY - offset.y) / innerHeight) * 100;

    // 対象の丸の位置を更新
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === draggingCircle
          ? { ...circle, x: Math.min(Math.max(newX, 0), 100), y: Math.min(Math.max(newY, 0), 100) }
          : circle
      )
    );
  };

  const handleMouseUp = () => {
    // ドラッグ終了
    setDraggingCircle(null);
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="circle"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          onMouseDown={(e) => handleMouseDown(e, circle.id)}
        />
      ))}
      <h1 className="text-white text-center mt-10">丸を掴んで動かしてみてください！</h1>
    </div>
  );
}
