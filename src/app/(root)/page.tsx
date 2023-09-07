import { HomePage } from "@/components/features";
import { PageTransition } from "@/components/shared";

export default function Home() {
  return (
    <PageTransition>
      <HomePage />
    </PageTransition>
  );
}
