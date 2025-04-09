import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center gap-8 font-sans">
      <Image
        className="rounded-full"
        src="/myface.png"
        alt="My profile photo"
        width={160}
        height={160}
      />

      <h1 className="text-3xl font-bold">wasedayooの部屋</h1>

      <ul className="text-left max-w-xl text-lg text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
        <li><strong>所属：</strong> 早稲田大学　笠原・木村研究室</li>
        <li><strong>興味のある分野：</strong> CPU、AI、機械学習、量子力学</li>
        <li><strong>趣味：</strong> 音楽ゲーム、旅</li>
      </ul>

      <div className="max-w-xl text-lg text-gray-700 dark:text-gray-300 text-left space-y-4">
        <p>
          wasedayooです。大学で情報系を学びながら、ウェブサイトを作ってみました。
          ウェブサイトに対する理解を少しずつ深めていきたいです。
        </p>
        <p>
          このサイトでは、私の興味や学習を少しずつ紹介していく予定です！
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          className="text-blue-600 hover:underline"
          href="https://github.com/wasedayoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-blue-600 hover:underline"
          href="https://twitter.com/wasedayoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          X（旧Twitter）
        </a>
      </div>

      <footer className="text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} fyuma All rights reserved.
      </footer>
    </div>
  );
}
