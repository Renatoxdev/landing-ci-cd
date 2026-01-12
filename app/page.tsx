export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 rounded-full bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
          Curso Online • Do Zero ao Avançado
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Aprenda <span className="text-emerald-400">Next.js</span> <br />
          e construa aplicações modernas
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Domine React, Next.js, CI/CD e deploy profissional com projetos reais
          usados no mercado.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="rounded-lg bg-emerald-500 px-8 py-4 font-semibold text-slate-900 hover:bg-emerald-400 transition">
            Quero me inscrever
          </button>

          <button className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition">
            Ver conteúdo do curso
          </button>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-slate-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-emerald-400">
              Projetos Reais
            </h3>
            <p className="mt-3 text-slate-300">
              Construa aplicações completas com autenticação, deploy e boas
              práticas.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-emerald-400">
              CI/CD na Prática
            </h3>
            <p className="mt-3 text-slate-300">
              Aprenda pipelines com GitHub Actions, testes, lint e deploy
              automático.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-emerald-400">
              Conteúdo Atual
            </h3>
            <p className="mt-3 text-slate-300">
              Stack moderna usada por empresas reais: Next.js, React e Vercel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pronto para dar o próximo passo?
        </h2>

        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Comece hoje e construa aplicações profissionais com confiança.
        </p>

        <button className="mt-8 rounded-lg bg-emerald-500 px-10 py-4 text-lg font-semibold text-slate-900 hover:bg-emerald-400 transition">
          Garantir minha vaga
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Curso Next.js • Todos os direitos reservados
      </footer>
    </main>
  );
}
