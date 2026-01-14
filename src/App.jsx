const stats = [
  {
    label: 'Productos activos',
    value: '128',
    detail: '+12 en la última semana',
  },
  {
    label: 'Stock total',
    value: '3.420 u.',
    detail: '54% del objetivo mensual',
  },
  {
    label: 'Precio promedio',
    value: '$2.950',
    detail: 'Rango $1.200 - $6.800',
  },
  {
    label: 'Alertas de stock',
    value: '7',
    detail: 'Revisión prioritaria hoy',
  },
];

const products = [
  {
    name: 'Combo desayuno',
    category: 'Combos',
    price: '$4.200',
    stock: 28,
    status: 'Óptimo',
  },
  {
    name: 'Café latte 12oz',
    category: 'Bebidas calientes',
    price: '$2.100',
    stock: 12,
    status: 'Medio',
  },
  {
    name: 'Wrap veggie',
    category: 'Snacks',
    price: '$3.950',
    stock: 6,
    status: 'Bajo',
  },
  {
    name: 'Smoothie power',
    category: 'Bebidas frías',
    price: '$3.600',
    stock: 18,
    status: 'Óptimo',
  },
  {
    name: 'Barra proteica',
    category: 'Saludable',
    price: '$1.900',
    stock: 9,
    status: 'Medio',
  },
];

const priceUpdates = [
  {
    title: 'Actualización por proveedor',
    description: 'Ajuste de precios sugerido para bebidas calientes.',
    action: 'Revisar cambios',
  },
  {
    title: 'Promos activas',
    description: '3x2 en snacks saludables hasta las 18:00.',
    action: 'Ver promociones',
  },
  {
    title: 'Comparativa semanal',
    description: 'Ticket promedio +8% vs. semana anterior.',
    action: 'Abrir reporte',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900/60">
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Kiosquito</p>
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">
              Dashboard de precios, stock y productos
            </h1>
            <p className="mt-2 text-sm text-slate-200">
              Monitoreo en tiempo real del catálogo y niveles de inventario.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm backdrop-blur">
            <div>
              <p className="text-xs text-slate-300">Sucursal</p>
              <p className="font-semibold">Terminal Sur · Módulo 4</p>
            </div>
            <div>
              <p className="text-xs text-slate-300">Última sync</p>
              <p className="font-semibold">Hace 3 min</p>
            </div>
            <button className="rounded-full bg-brand-400 px-4 py-2 font-semibold text-slate-950">
              Exportar
            </button>
          </div>
        </header>
        <section className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-200">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-200">
                  Productos destacados
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Precios y stock por SKU</h2>
              </div>
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold">
                Gestionar catálogo
              </button>
            </div>
            <div className="mt-6 space-y-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-slate-300">{product.category}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">Precio</p>
                      <p className="font-semibold text-brand-200">{product.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Stock</p>
                      <p className="font-semibold">{product.stock} u.</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        product.status === 'Bajo'
                          ? 'bg-rose-400/20 text-rose-200'
                          : product.status === 'Medio'
                          ? 'bg-amber-400/20 text-amber-200'
                          : 'bg-emerald-400/20 text-emerald-200'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">
                Reportes de precios
              </p>
              <div className="mt-4 space-y-3">
                {priceUpdates.map((update) => (
                  <div
                    key={update.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                  >
                    <p className="text-sm font-semibold">{update.title}</p>
                    <p className="mt-2 text-xs text-slate-300">{update.description}</p>
                    <button className="mt-4 text-xs font-semibold text-brand-200">
                      {update.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-300/40 bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-900 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Alertas críticas</p>
                <span className="rounded-full bg-rose-400/20 px-3 py-1 text-xs font-semibold text-rose-100">
                  2 urgentes
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-center justify-between">
                  <span>Wrap veggie</span>
                  <span className="text-rose-200">3 u.</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Barra proteica</span>
                  <span className="text-amber-200">5 u.</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Limonada fresca</span>
                  <span className="text-amber-200">8 u.</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950">
                Solicitar reposición
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Kiosquito. Panel operativo de inventario.</p>
          <div className="flex gap-6">
            <span>Actualización cada 5 min</span>
            <span>Histórico de precios</span>
            <span>Exportación CSV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
