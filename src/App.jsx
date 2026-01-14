const quickActions = [
  {
    title: 'Escanear QR',
    description: 'Identifica tu cuenta o beneficios.',
    action: 'Escanear',
  },
  {
    title: 'Mi pedido',
    description: 'Retomar compra pendiente o favorita.',
    action: 'Ver pedido',
  },
  {
    title: 'Soporte rápido',
    description: 'Llamar a un asistente en tienda.',
    action: 'Solicitar',
  },
];

const categories = [
  {
    title: 'Combos calientes',
    subtitle: 'Listos en menos de 3 min.',
    items: ['Café + medialuna', 'Capuccino XL', 'Tostado clásico'],
  },
  {
    title: 'Snacks saludables',
    subtitle: 'Energía natural.',
    items: ['Mix frutos secos', 'Yogur griego', 'Barra proteica'],
  },
  {
    title: 'Bebidas frías',
    subtitle: 'Refrescantes todo el día.',
    items: ['Limonada fresca', 'Smoothie mango', 'Agua con gas'],
  },
];

const favorites = [
  {
    name: 'Combo desayuno',
    detail: 'Café latte + croissant + jugo',
    price: '$4.200',
  },
  {
    name: 'Wrap veggie',
    detail: 'Con hummus y vegetales grillados',
    price: '$3.950',
  },
  {
    name: 'Smoothie power',
    detail: 'Banana, proteína y avena',
    price: '$3.600',
  },
];

const steps = [
  {
    step: '1',
    title: 'Elegí tu modo',
    description: 'Compra rápida, retiro o delivery.',
  },
  {
    step: '2',
    title: 'Personalizá',
    description: 'Agregá extras y preferencias.',
  },
  {
    step: '3',
    title: 'Pagá y retirás',
    description: 'Tarjeta, QR o contacto cero.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900/60">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 pt-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Kiosquito</p>
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">Plantilla de kiosco digital</h1>
            <p className="mt-2 text-sm text-slate-200">
              Atención rápida, pedidos personalizados y pagos sin contacto.
            </p>
          </div>
          <div className="hidden items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm backdrop-blur sm:flex">
            <div>
              <p className="text-xs text-slate-300">Ubicación</p>
              <p className="font-semibold">Terminal Sur · Módulo 4</p>
            </div>
            <div>
              <p className="text-xs text-slate-300">Hora local</p>
              <p className="font-semibold">18:45</p>
            </div>
            <button className="rounded-full bg-brand-400 px-4 py-2 font-semibold text-slate-950">
              Ayuda
            </button>
          </div>
        </header>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">
                Experiencia autogestionada
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Pedí, pagá y retirás en menos de 2 minutos.
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-200">
                Diseñado para espacios de alto tráfico: UI clara, botones grandes, contraste alto y
                módulos de información visibles a distancia.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-brand-400 px-6 py-3 text-base font-semibold text-slate-950">
                  Iniciar pedido
                </button>
                <button className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold">
                  Ver menú completo
                </button>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {quickActions.map((action) => (
                  <div
                    key={action.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                  >
                    <p className="text-sm font-semibold">{action.title}</p>
                    <p className="mt-2 text-xs text-slate-300">{action.description}</p>
                    <button className="mt-4 text-xs font-semibold text-brand-200">
                      {action.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-200">
                    {category.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{category.subtitle}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-300/40 bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-900 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Resumen activo</p>
                <span className="rounded-full bg-accent-300 px-3 py-1 text-xs font-semibold text-slate-950">
                  Turno 08
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">Pedido #2048</h3>
              <p className="mt-2 text-sm text-slate-300">
                Retiro en mostrador · Tiempo estimado 4 min
              </p>
              <div className="mt-6 space-y-4">
                {favorites.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-slate-300">{item.detail}</p>
                    </div>
                    <span className="text-sm font-semibold text-brand-200">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <p className="text-sm text-slate-300">Total</p>
                <p className="text-2xl font-semibold">$11.750</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button className="rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950">
                  Continuar pago
                </button>
                <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                  Editar pedido
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Pagos disponibles</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {['Contactless', 'QR', 'Tarjeta'].map((method) => (
                  <div
                    key={method}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center text-sm font-semibold"
                  >
                    {method}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-4">
                <p className="text-sm font-semibold">Modo accesible</p>
                <p className="mt-2 text-xs text-slate-300">
                  Tamaño de letra ampliado, alto contraste y guía por voz.
                </p>
                <button className="mt-4 text-xs font-semibold text-brand-200">Activar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-sm font-semibold text-brand-200">Paso {step.step}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-brand-600/20 via-slate-900 to-slate-900 p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Modo demo</p>
              <h3 className="mt-2 text-2xl font-semibold">Activá el loop promocional</h3>
              <p className="mt-2 text-sm text-slate-300">
                Perfecto para pantallas en espera. Rotá promociones y tutoriales en pantalla completa.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950">
                Reproducir
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                Configurar
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Kiosquito. UI lista para producción.</p>
          <div className="flex gap-6">
            <span>Modo nocturno</span>
            <span>Soporte 24/7</span>
            <span>Actualizaciones OTA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
