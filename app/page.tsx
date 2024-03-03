import Contact from "@/components/component/contact";
import Main from "@/components/component/main";
import Projects from "@/components/component/projects";
import Skills from "@/components/component/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <Main />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Projects />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Skills />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Contact />
        </section>
      </main>
    </div>
  );
}
