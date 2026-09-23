export default function Hero() {
  return (
    <section className="text-background bg-linear-to-r from-orange-500 to-yellow-400 py-24 text-center">
      <div className="container">
        <h1 className="font-rajdhani mb-1 text-5xl">Mitsui&apos;s portfolio</h1>
        <p className="font-rajdhani mb-4">front-end engineer</p>
        <p className="text-sm leading-[1.75]">
          <span className="inline-block">
            TypeScript / React / Next.jsを中心に、生成AIも活用しながら
          </span>
          <span className="inline-block">
            ユーザビリティと保守性を両立するUI実装に取り組んでいます。
          </span>
        </p>
      </div>
    </section>
  );
}
