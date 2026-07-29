import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Logo } from "@/components/logo";

export default function HomePage() {
  return (
    <Container className="flex min-h-screen flex-col">
      <header className="py-7 sm:py-9">
        <Logo />
      </header>
      <Hero />
      <Footer />
    </Container>
  );
}
