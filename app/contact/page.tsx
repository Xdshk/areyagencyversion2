import ContactForm from "../../components/ContactForm";

export const metadata = {
  metadataBase: new URL("https://areyagency.com"),
  title: "Контакты — Arey Agency",
  description: "Свяжитесь с Arey Agency: напишите бриф, и мы ответим в течение 1 рабочего дня",
  openGraph: {
    title: "Контакты — Arey Agency",
    description: "Напишите короткий бриф, и мы отправим направление и оценку по этапам",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-10">
      <section className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Контакты</p>
        <h1 className="font-editorial mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl">
          Обсудим проект, который нельзя пропустить
        </h1>
        <p className="mt-6 max-w-2xl text-white/70">
          Напиши короткий бриф: задача, сроки, форматы. В ответ отправим направление и оценку по этапам.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <a
          href="tel:+79510788381"
          className="rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition-colors hover:border-zinc-500/40"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Телефон</p>
          <p className="mt-3 text-lg">8 951 078 83 81</p>
        </a>
        <a
          href="mailto:annaarey22@yandex.ru"
          className="rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition-colors hover:border-zinc-500/40"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Email</p>
          <p className="mt-3 text-lg">annaarey22@yandex.ru</p>
        </a>
        <article className="rounded-2xl border border-white/15 bg-white/[0.02] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Адрес</p>
          <p className="mt-3 text-lg">Бизнес-центр «Креатив», ул. Творческая, д. 1, Москва</p>
        </article>
      </section>

      <ContactForm />

      <section className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 p-6 transition-[box-shadow] duration-300 hover:border-zinc-500/30 hover:shadow-lg hover:shadow-black/20">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Что прислать</p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>Название проекта и ниша</li>
            <li>Форматы и каналы размещения</li>
            <li>Референсы или визуальные ориентиры</li>
            <li>Срок запуска</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 p-6 transition-[box-shadow] duration-300 hover:border-zinc-500/30 hover:shadow-lg hover:shadow-black/20">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Как отвечаем</p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>В течение 1 рабочего дня</li>
            <li>Фиксируем этапы и дедлайны</li>
            <li>Выдаем прозрачный расчет</li>
            <li>Стартуем сразу после подтверждения</li>
          </ul>
        </article>
      </section>
    </main>
  );
}