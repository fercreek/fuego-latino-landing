"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

export default function DanceLottie({ className }: { className?: string }) {
  return (
    <div className={className}>
      <DotLottieReact
        src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/KBKUIFiMiN.lottie"
        loop
        autoplay
      />
    </div>
  );
}
