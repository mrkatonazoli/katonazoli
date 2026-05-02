export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="font-mono text-xs tracking-[0.22em] uppercase text-muted flex items-center gap-3">
            <span className="text-accent">{">"}</span>
            <span>about.md</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mt-6 leading-[1] tracking-[-0.03em]">
            A few <span className="text-accent">words.</span>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I work at the intersection of operations, technology, and guest
            experience — helping hotels choose the right tools, connect them
            sensibly, and design the moments that turn a stay into a memory.
          </p>
          <p>
            My focus spans property management systems, digital check-in flows,
            mobile keys, guest messaging, and the human side of all of it: the
            front desk teams, housekeeping flows, and operators who have to
            make it work on a Tuesday at 6 a.m.
          </p>
          <p>
            I&apos;m based in Hungary, work with properties across Europe, and
            care most about the unsexy details that quietly add up to a great
            stay.
          </p>
        </div>
      </div>
    </section>
  );
}
