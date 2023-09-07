import { HomePage } from "@/components/features";
import { ReactQueryHydrate } from "@/components/shared";

export default function Home() {
  return (
    <ReactQueryHydrate>
      <HomePage />
    </ReactQueryHydrate>
  );
}
