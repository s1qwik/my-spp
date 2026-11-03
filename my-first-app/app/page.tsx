export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="flex items-center justify-between px-6 py-5 md:px-16">
        <a href="#" className="text-2xl font-black text-blue-900">
          BB Game
        </a>

        <nav className="hidden gap-6 md:flex">
          <a href="#steps">Как начать</a>
          <a href="#services">Услуги</a>
          <a href="#advantages">Преимущества</a>
        </nav>

        <a
          href="mailto:info@boxpack.ru"
          className="rounded-lg bg-blue-900 px-5 py-3 text-white"
        >
          Оставить заявку
        </a>
      </header>

      <section className="bg-[#172b55] px-6 py-20 text-white md:px-16 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-widest text-blue-200">
            Фулфилмент для маркетплейсов
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Ваш бизнес растёт — мы берём логистику на себя
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            Приёмка, хранение, упаковка и отправка товаров.
            Помогаем упростить работу с маркетплейсами.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-4 font-bold text-blue-900"
          >
            Наши услуги
          </a>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["24/7", "Контроль процессов"],
              ["7 дней", "Работаем всю неделю"],
              ["100%", "Внимание к товарам"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl bg-white/10 p-5">
                <p className="text-3xl font-bold">{number}</p>
                <p className="mt-2 text-sm text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="px-6 py-16 md:px-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Как начать работать с нами
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Оставляете заявку",
            "Получаете расчёт",
            "Подписываем договор",
            "Передаёте товары",
            "Мы принимаем товар",
            "Упаковываем заказы",
            "Отправляем покупателям",
          ].map((step, i) => (
            <div key={step} className="rounded-xl bg-slate-100 p-6">
              <p className="font-bold text-blue-800">
                ШАГ {i + 1}
              </p>
              <h3 className="mt-3 font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-6 py-16 md:px-16">
        <h2 className="text-3xl font-bold">Услуги фулфилмента</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Приёмка товаров",
            "Хранение",
            "Маркировка",
            "Упаковка",
            "Комплектация заказов",
            "Обработка возвратов",
            "Отгрузка на маркетплейсы",
          ].map((service) => (
            <div key={service} className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="advantages" className="px-6 py-16 md:px-16">
        <h2 className="text-3xl font-bold">
          Почему выбирают BOXPACK
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Экономия времени",
            "Контроль качества",
            "Удобные процессы",
            "Поддержка бизнеса",
          ].map((item) => (
            <div key={item} className="rounded-xl border p-6">
12:34
<h3 className="font-bold">{item}</h3>
              <p className="mt-3 text-sm text-slate-600">
                Помогаем организовать обработку и отправку товаров.
              </p>
            </div>
          ))}
        </div>
      </section>
      </main>
  );
}
