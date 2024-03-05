import ImageSlider from "@/src/components/ImageSlider";
import dataSlider from "./data/slider-data.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ImageSlider data={dataSlider} />
    </main>
  );
}
