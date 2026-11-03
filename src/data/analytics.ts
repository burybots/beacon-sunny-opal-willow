export const TABS = [
  { id: "requests", label: "Requests" },
  { id: "visitors", label: "Visitors" },
  { id: "performance", label: "Performance" },
  { id: "security", label: "Security" },
  { id: "cache", label: "Cache" },
  { id: "origin", label: "Origin" },
  { id: "dns", label: "DNS" },
] as const;

export type TabId = (typeof TABS)[number]["id"];
export type RangeId = "24h" | "7d" | "30d";
export type GroupId = "none" | "country" | "cache";
export type YKind = "count" | "bytes" | "ms";
export type CountryId = "all" | "us" | "gb" | "ca";

export interface Zone {
  id: string;
  host: string;
  trade: string;
  scale: number;
  hit: number;
}

export const ZONES: Zone[] = [
  { id: "northshore", host: "northshore.studio", trade: "Design studio", scale: 1, hit: 96.4 },
  { id: "harbor", host: "harborandco.com", trade: "Neighborhood shop", scale: 2.35, hit: 94.8 },
  { id: "field", host: "fielddayelectric.com", trade: "Local trades", scale: 0.62, hit: 97.6 },
];

export interface Filters {
  humansOnly: boolean;
  country: CountryId;
}

export const RANGE_LABEL: Record<RangeId, string> = {
  "24h": "Last 24 hours",
  "7d": "Last 7 days",
  "30d": "Last 30 days",
};

export interface Delta {
  pct: number;
  direction: "up" | "down";
}

export interface Kpi {
  id: string;
  label: string;
  value: string;
  delta?: Delta;
  spark: number[];
}

export interface SeriesDef {
  key: string;
  label: string;
  color: string;
  total: string;
}

export type Row = { label: string; tip: string; [key: string]: string | number };

export interface ChartView {
  series: SeriesDef[];
  data: Row[];
}

export interface ChartModel {
  id: string;
  title: string;
  kind: "line" | "bar";
  y: YKind;
  stack: boolean;
  groupable: boolean;
  views: Record<GroupId, ChartView>;
}

export interface TabModel {
  kpis: Kpi[];
  charts: ChartModel[];
  layout: "5" | "6" | "3" | "2";
}

export interface Boost {
  requests: number;
  visits: number;
  pageviews: number;
  blocked: number;
  dns: number;
  transfer: number;
}

export const ZERO_BOOST: Boost = {
  requests: 0,
  visits: 0,
  pageviews: 0,
  blocked: 0,
  dns: 0,
  transfer: 0,
};

const BLUE = "#2f6fed";
const ORANGE = "#f5a524";
const PINK = "#e34b9b";
const SLATE = "#8b95a5";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SHAPE = {
  spike: [1, 2, 5, 2, 8, 3, 2, 26, 5, 2, 3, 9, 2, 1, 20, 6, 3, 4, 48, 7, 3, 2, 10, 3, 16, 4, 2, 6, 22, 3, 8, 2],
  busy: [8, 12, 9, 16, 14, 20, 18, 24, 16, 22, 30, 18, 16, 26, 22, 34, 20, 15, 24, 38, 26, 18, 22, 16, 20, 24, 14, 18, 22, 12, 16, 10],
  calm: [18, 21, 17, 22, 19, 23, 18, 16, 21, 20, 19, 24, 18, 17, 21, 19, 23, 18, 22, 16, 20, 21, 18, 17],
  rare: [0.2, 0.1, 0.5, 0, 0.3, 1.4, 0.2, 0, 0.4, 0.1, 0.2, 3.2, 0, 0.2, 0.5, 0.1, 0.3, 1.1, 0, 0.2, 0.4, 0.1, 2.2, 0.2],
  one: [0.15, 0.1, 0.2, 0.05, 0.2, 0.1, 0.3, 0.1, 0.15, 14, 0.2, 0.1, 0.25, 0.4, 0.1, 0.05, 0.3, 0.15, 0.4, 0.1, 0.2, 0.1, 0.35, 0.15],
  wave: [10, 16, 8, 14, 28, 12, 7, 18, 9, 6, 15, 32, 11, 8, 20, 13, 7, 11, 26, 9, 6, 16, 22, 8, 14, 19, 9, 7, 17, 8, 12, 6],
  hard: [0.2, 0.3, 0.2, 0.6, 1.4, 0.3, 0.5, 30, 0.4, 0.2, 0.5, 1, 0.3, 0.2, 18, 0.7, 0.3, 0.5, 56, 0.8, 0.3, 0.2, 0.7, 0.3, 10, 0.4, 0.2, 0.5, 16, 0.3, 0.6, 0.2],
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function trimNum(n: number, digits: number): string {
  return n.toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

export function compactCount(n: number): string {
  const sign = n < 0 ? "-" : "";
  const v = Math.abs(n);
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    return sign + trimNum(m, m >= 10 ? 1 : 2) + "M";
  }
  if (v >= 1000) {
    const k = v / 1000;
    const digits = k >= 100 ? 0 : k >= 10 ? 1 : 2;
    return sign + trimNum(k, digits) + "k";
  }
  return sign + Math.round(v).toLocaleString("en-US");
}

export function formatBytes(n: number): string {
  const sign = n < 0 ? "-" : "";
  const v = Math.abs(n);
  const unit = (x: number, suffix: string, digits: number) => `${sign}${trimNum(x, digits)} ${suffix}`;
  if (v >= 1e9) return unit(v / 1e9, "GB", 2);
  if (v >= 1e6) return unit(v / 1e6, "MB", v >= 100e6 ? 0 : 2);
  if (v >= 1e3) return unit(v / 1e3, "kB", 2);
  return `${sign}${Math.round(v)} B`;
}

export function formatPct(n: number): string {
  if (n > 0 && n < 1) return `${n.toFixed(2)}%`;
  return `${n.toFixed(1)}%`;
}

export function formatAxis(kind: YKind, n: number): string {
  if (kind === "bytes") {
    if (Math.abs(n) >= 1e9) return `${trimNum(n / 1e9, 1)} GB`;
    if (Math.abs(n) >= 1e6) return `${Math.round(n / 1e6)} MB`;
    if (Math.abs(n) >= 1e3) return `${Math.round(n / 1e3)} kB`;
    return `${Math.round(n)} B`;
  }
  if (kind === "ms") return `${Math.round(n)}`;
  return compactCount(n);
}

export function formatTip(kind: YKind, n: number): string {
  if (kind === "bytes") return formatBytes(n);
  if (kind === "ms") return `${Math.round(n)} ms`;
  return compactCount(Math.round(n));
}

function fmt(ms: number, time: boolean): string {
  const dt = new Date(ms);
  const mon = MONTHS[dt.getUTCMonth()];
  const day = dt.getUTCDate();
  if (!time) return `${mon} ${day}`;
  const h = String(dt.getUTCHours()).padStart(2, "0");
  return `${mon} ${day}, ${h}:00`;
}

function makeBuckets(range: RangeId): { label: string; tip: string }[] {
  if (range === "24h") {
    const start = Date.UTC(2026, 10, 2, 12, 0, 0);
    return Array.from({ length: 24 }, (_, i) => {
      const tip = fmt(start + i * 3_600_000, true);
      return { tip, label: i % 4 === 0 ? tip : "" };
    });
  }
  if (range === "7d") {
    const start = Date.UTC(2026, 9, 28, 0, 0, 0);
    return Array.from({ length: 28 }, (_, i) => {
      const ms = start + i * 6 * 3_600_000;
      const dt = new Date(ms);
      const tip = fmt(ms, true);
      return { tip, label: dt.getUTCHours() === 0 ? fmt(ms, false) : "" };
    });
  }
  const start = Date.UTC(2026, 9, 5, 0, 0, 0);
  return Array.from({ length: 30 }, (_, i) => {
    const tip = fmt(start + i * 86_400_000, false);
    return { tip, label: i % 5 === 0 ? tip : "" };
  });
}

function sample(profile: number[], n: number, seed: number): number[] {
  const rng = mulberry32(seed);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / Math.max(1, n - 1)) * (profile.length - 1);
    const i0 = Math.floor(t);
    const i1 = Math.min(profile.length - 1, i0 + 1);
    const f = t - i0;
    const v = profile[i0] * (1 - f) + profile[i1] * f;
    out.push(Math.max(0, v * (0.86 + rng() * 0.28)));
  }
  return out;
}

function fitSum(values: number[], total: number): number[] {
  const sum = values.reduce((a, b) => a + b, 0) || 1;
  const safe = Math.max(0, total);
  return values.map((v) => (v / sum) * safe);
}

function fitMean(values: number[], mean: number): number[] {
  const avg = values.reduce((a, b) => a + b, 0) / values.length || 1;
  return values.map((v) => Math.max(0.2, (v / avg) * mean));
}

function nudge(values: number[], tick: number): number[] {
  if (tick <= 0 || values.length === 0) return values;
  const next = values.slice();
  const extra = Math.abs(Math.sin(tick / 1.7)) * ((next[next.length - 1] || 1) * 0.08 + 0.4);
  next[next.length - 1] = Math.max(0, next[next.length - 1] + extra);
  return next;
}

function sum(values: number[]): number {
  return values.reduce((a, b) => a + b, 0);
}

function sparkOf(values: number[]): number[] {
  if (values.length <= 36) return values;
  const n = 32;
  return Array.from({ length: n }, (_, i) => values[Math.min(values.length - 1, Math.floor((i / (n - 1)) * (values.length - 1)))] ?? 0);
}

function kpi(id: string, label: string, value: string, spark: number[], delta?: Delta): Kpi {
  return { id, label, value, delta, spark: sparkOf(spark) };
}

const COUNTRY_PARTS = [
  { key: "us", label: "United States", color: BLUE, weight: 0.58 },
  { key: "gb", label: "United Kingdom", color: ORANGE, weight: 0.16 },
  { key: "ca", label: "Canada", color: PINK, weight: 0.11 },
  { key: "other", label: "Other", color: SLATE, weight: 0.15 },
];

const CACHE_PARTS = [
  { key: "hit", label: "Hit", color: BLUE, weight: 0.78 },
  { key: "dynamic", label: "Dynamic", color: PINK, weight: 0.16 },
  { key: "miss", label: "Miss", color: ORANGE, weight: 0.06 },
];

function totalLabel(values: number[], y: YKind): string {
  const s = sum(values);
  if (y === "bytes") return formatBytes(s);
  if (y === "ms") return `${Math.round(s / Math.max(1, values.length))} ms`;
  return compactCount(s);
}

function splitView(rows: Row[], key: string, parts: typeof COUNTRY_PARTS, seed: number, y: YKind): ChartView {
  const data: Row[] = rows.map((row, i) => {
    const total = Number(row[key] ?? 0);
    const rng = mulberry32(seed + i * 13);
    const jitter = parts.map((p) => p.weight * (0.82 + rng() * 0.36));
    const jsum = jitter.reduce((a, b) => a + b, 0) || 1;
    const next: Row = { label: row.label, tip: row.tip };
    let used = 0;
    parts.forEach((p, idx) => {
      if (idx === parts.length - 1) next[p.key] = Math.max(0, total - used);
      else {
        const v = total * (jitter[idx] / jsum);
        next[p.key] = v;
        used += v;
      }
    });
    return next;
  });
  const series: SeriesDef[] = parts.map((p) => {
    const values = data.map((r) => Number(r[p.key] ?? 0));
    return { key: p.key, label: p.label, color: p.color, total: totalLabel(values, y) };
  });
  return { data, series };
}

function singleChart(opts: {
  id: string;
  title: string;
  kind: "line" | "bar";
  y: YKind;
  groupable?: boolean;
  buckets: { label: string; tip: string }[];
  key: string;
  label: string;
  color: string;
  values: number[];
  total?: string;
  seed: number;
}): ChartModel {
  const data: Row[] = opts.buckets.map((b, i) => ({
    label: b.label,
    tip: b.tip,
    [opts.key]: opts.values[i] ?? 0,
  }));
  const base: ChartView = {
    data,
    series: [
      {
        key: opts.key,
        label: opts.label,
        color: opts.color,
        total: opts.total ?? totalLabel(opts.values, opts.y),
      },
    ],
  };
  return {
    id: opts.id,
    title: opts.title,
    kind: opts.kind,
    y: opts.y,
    stack: false,
    groupable: Boolean(opts.groupable),
    views: {
      none: base,
      country: opts.groupable ? splitView(data, opts.key, COUNTRY_PARTS, opts.seed, opts.y) : base,
      cache: opts.groupable ? splitView(data, opts.key, CACHE_PARTS, opts.seed + 90, opts.y) : base,
    },
  };
}

function multiChart(opts: {
  id: string;
  title: string;
  kind: "line" | "bar";
  y: YKind;
  stack?: boolean;
  buckets: { label: string; tip: string }[];
  parts: { key: string; label: string; color: string; values: number[]; total?: string }[];
}): ChartModel {
  const data: Row[] = opts.buckets.map((b, i) => {
    const row: Row = { label: b.label, tip: b.tip };
    for (const p of opts.parts) row[p.key] = p.values[i] ?? 0;
    return row;
  });
  const view: ChartView = {
    data,
    series: opts.parts.map((p) => ({
      key: p.key,
      label: p.label,
      color: p.color,
      total: p.total ?? totalLabel(p.values, opts.y),
    })),
  };
  return {
    id: opts.id,
    title: opts.title,
    kind: opts.kind,
    y: opts.y,
    stack: opts.stack ?? opts.kind === "bar",
    groupable: false,
    views: { none: view, country: view, cache: view },
  };
}

function up(pct: number): Delta {
  return { pct, direction: "up" };
}
function down(pct: number): Delta {
  return { pct, direction: "down" };
}

function qpsLabel(queries: number, range: RangeId): string {
  const seconds = range === "24h" ? 86_400 : range === "7d" ? 86_400 * 7 : 86_400 * 30;
  const q = queries / seconds;
  return `${q.toFixed(2)}/s`;
}

export function buildDashboard(opts: {
  zoneId: string;
  range: RangeId;
  filters: Filters;
  boost: Boost;
  tick: number;
}): Record<TabId, TabModel> {
  const zone = ZONES.find((z) => z.id === opts.zoneId) ?? ZONES[0];
  const rangeMult = opts.range === "24h" ? 1 : opts.range === "7d" ? 7.15 : 31.2;
  const geo = opts.filters.country === "all" ? 1 : opts.filters.country === "us" ? 0.61 : opts.filters.country === "gb" ? 0.16 : 0.11;
  const live = opts.range === "24h" ? 1 : opts.range === "7d" ? 3.4 : 10;
  const vol = zone.scale * rangeMult * geo;
  const human = opts.filters.humansOnly;

  const requests = 24860 * vol * (human ? 0.78 : 1) + opts.boost.requests * live;
  const visits = 1840 * vol + opts.boost.visits * live;
  const pageviews = Math.max(visits, 5210 * vol + opts.boost.pageviews * live);
  const transfer = 860e6 * vol * (human ? 0.86 : 1) + opts.boost.transfer * live;
  const mitigated = Math.min(requests * 0.34, 4120 * vol * (human ? 0.16 : 1) + opts.boost.blocked * live);
  const dns = 36400 * vol + opts.boost.dns * live;

  const hitRate = Math.min(99.1, zone.hit + (human ? 0.7 : 0));
  const cacheable = requests * 0.97;
  const hitN = cacheable * (hitRate / 100);
  const missN = Math.max(0, cacheable - hitN);
  const noneN = Math.max(0, requests - hitN - missN);
  const cachedN = hitN;
  const uncachedN = Math.max(0, requests - cachedN);
  const bwCache = Math.min(transfer * 0.95, transfer * (0.72 + hitRate / 400));
  const saved = transfer > 0 ? (bwCache / transfer) * 100 : 0;
  const originN = Math.max(0, missN + noneN * 0.08);
  const originFail = Math.max(1, Math.round(originN * 0.0006));
  const originOk = Math.max(0, originN - originFail);
  const originBytes = transfer * (1 - saved / 100);
  const custom = mitigated * 0.69;
  const rateLimited = mitigated * 0.23;
  const managed = Math.max(0, mitigated - custom - rateLimited);
  const blocked = mitigated * 0.88;
  const challenged = mitigated - blocked;

  const p50 = 42 - (zone.hit - 96) * 0.8;
  const p95 = 128 - (zone.hit - 96) * 1.5;
  const p99 = 264 - (zone.hit - 96);
  const tcp = 11;
  const tls = 16;
  const wait = Math.max(8, p50 - tcp - tls);

  const h1 = requests * 0.1;
  const h2 = requests * 0.58;
  const h3 = requests * 0.32;
  const noerror = dns * 0.994;
  const nx = dns - noerror;

  const buckets = makeBuckets(opts.range);
  const n = buckets.length;
  const tick = opts.tick;

  const reqSeries = nudge(fitSum(sample(SHAPE.busy, n, 11), requests), tick);
  const bytesSeries = nudge(fitSum(sample(SHAPE.wave, n, 17), transfer), tick);
  const viewSeries = nudge(fitSum(sample(SHAPE.spike, n, 23), pageviews), tick);
  const visitSeries = nudge(fitSum(sample(SHAPE.wave, n, 29), visits), tick);
  const mitSeries = nudge(fitSum(sample(SHAPE.hard, n, 31), mitigated), tick);
  const servedSeries = nudge(fitSum(sample(SHAPE.busy, n, 37), cachedN), tick + 2);
  const originSeries = nudge(fitSum(sample(SHAPE.calm, n, 41), Math.max(originN, 1)), tick);
  const blockSeries = nudge(fitSum(sample(SHAPE.hard, n, 43), blocked), tick);
  const challengeSeries = nudge(fitSum(sample(SHAPE.rare, n, 47), challenged), tick);
  const hitSeries = nudge(fitSum(sample(SHAPE.busy, n, 53), hitN), tick);
  const missSeries = nudge(fitSum(sample(SHAPE.rare, n, 59), missN), tick);
  const noneSeries = nudge(fitSum(sample(SHAPE.wave, n, 61), noneN), tick);
  const uncachedSeries = nudge(fitSum(sample(SHAPE.calm, n, 67), uncachedN), tick);
  const reachSeries = nudge(fitSum(sample(SHAPE.busy, n, 71), originOk), tick);
  const failSeries = nudge(fitSum(sample(SHAPE.one, n, 73), originFail), tick);
  const dnsSeries = nudge(fitSum(sample(SHAPE.wave, n, 79), dns), tick);
  const nxSeries = nudge(fitSum(sample(SHAPE.rare, n, 83), nx), tick);
  const okSeries = dnsSeries.map((v, i) => Math.max(0, v - (nxSeries[i] ?? 0)));

  const p50Series = nudge(fitMean(sample(SHAPE.calm, n, 3), p50), tick);
  const p95Series = nudge(fitMean(sample(SHAPE.wave, n, 5), p95), tick);
  const p99Series = nudge(fitMean(sample(SHAPE.spike, n, 7), p99), tick);
  const tcpSeries = fitMean(sample(SHAPE.calm, n, 101), tcp);
  const tlsSeries = fitMean(sample(SHAPE.calm, n, 103), tls);
  const waitSeries = nudge(fitMean(sample(SHAPE.wave, n, 107), wait), tick);
  const h1Series = nudge(fitSum(sample(SHAPE.calm, n, 111), h1), tick);
  const h2Series = nudge(fitSum(sample(SHAPE.busy, n, 113), h2), tick);
  const h3Series = nudge(fitSum(sample(SHAPE.wave, n, 117), h3), tick);
  const customSeries = nudge(fitSum(sample(SHAPE.spike, n, 121), custom), tick);
  const rlSeries = nudge(fitSum(sample(SHAPE.one, n, 127), rateLimited), tick);
  const mgSeries = nudge(fitSum(sample(SHAPE.rare, n, 131), managed), tick);
  const hitSpark = fitMean(sample(SHAPE.calm, n, 137), hitRate);
  const errSpark = fitMean(sample(SHAPE.rare, n, 139), 0.04);
  const reachSpark = fitMean(sample(SHAPE.calm, n, 149), 99.6);
  const nxSpark = fitMean(sample(SHAPE.rare, n, 151), 0.6);
  const noSpark = fitMean(sample(SHAPE.calm, n, 157), 99.4);
  const msSpark = fitMean(sample(SHAPE.calm, n, 163), 3);

  const showReq = sum(reqSeries);
  const showViews = sum(viewSeries);
  const showVisits = sum(visitSeries);
  const showBytes = sum(bytesSeries);
  const showMit = sum(mitSeries);
  const showDns = sum(dnsSeries);
  const mitRate = showReq > 0 ? (showMit / showReq) * 100 : 0;

  const requestsTab: TabModel = {
    layout: "5",
    kpis: [
      kpi("req", "Total requests", compactCount(showReq), reqSeries, up(31.4)),
      kpi("xfer", "Total data transfer", formatBytes(showBytes), bytesSeries, up(18.6)),
      kpi("vis", "Total visits", compactCount(showVisits), visitSeries, up(27.2)),
      kpi("hit", "Cache hit rate", formatPct(hitRate), hitSpark, up(8.1)),
      kpi("err", "5xx error rate", "0.02%", errSpark, down(71)),
    ],
    charts: [
      singleChart({
        id: "req-line",
        title: "Requests over time",
        kind: "line",
        y: "count",
        groupable: true,
        buckets,
        key: "requests",
        label: "Requests",
        color: BLUE,
        values: reqSeries,
        seed: 201,
      }),
      singleChart({
        id: "bytes-line",
        title: "Data transfer",
        kind: "line",
        y: "bytes",
        groupable: true,
        buckets,
        key: "bytes",
        label: "Data transfer",
        color: BLUE,
        values: bytesSeries,
        seed: 209,
      }),
    ],
  };

  const visitorsTab: TabModel = {
    layout: "2",
    kpis: [
      kpi("pv", "Pageviews", compactCount(showViews), viewSeries, up(36.2)),
      kpi("vv", "Total visits", compactCount(showVisits), visitSeries, up(27.2)),
    ],
    charts: [
      singleChart({
        id: "pv-line",
        title: "Pageviews over time",
        kind: "line",
        y: "count",
        groupable: true,
        buckets,
        key: "pageviews",
        label: "Pageviews",
        color: BLUE,
        values: viewSeries,
        seed: 301,
      }),
      singleChart({
        id: "vv-line",
        title: "Visits over time",
        kind: "line",
        y: "count",
        groupable: true,
        buckets,
        key: "visits",
        label: "Visits",
        color: BLUE,
        values: visitSeries,
        seed: 307,
      }),
    ],
  };

  const performanceTab: TabModel = {
    layout: "2",
    kpis: [
      kpi("p50", "Origin response (p50)", `${Math.round(p50)} ms`, p50Series, down(22.4)),
      kpi("p95", "Origin response (p95)", `${Math.round(p95)} ms`, p95Series, down(18.1)),
    ],
    charts: [
      multiChart({
        id: "pct",
        title: "Origin response time percentiles",
        kind: "line",
        y: "ms",
        buckets,
        parts: [
          { key: "p50", label: "p50", color: BLUE, values: p50Series, total: `${Math.round(p50)} ms` },
          { key: "p95", label: "p95", color: ORANGE, values: p95Series, total: `${Math.round(p95)} ms` },
          { key: "p99", label: "p99", color: PINK, values: p99Series, total: `${Math.round(p99)} ms` },
        ],
      }),
      multiChart({
        id: "http",
        title: "Requests by HTTP protocol",
        kind: "bar",
        y: "count",
        stack: true,
        buckets,
        parts: [
          { key: "h1", label: "HTTP/1.1", color: BLUE, values: h1Series },
          { key: "h2", label: "HTTP/2", color: ORANGE, values: h2Series },
          { key: "h3", label: "HTTP/3", color: PINK, values: h3Series },
        ],
      }),
    ],
  };

  const securityTab: TabModel = {
    layout: "3",
    kpis: [
      kpi("sreq", "Total requests", compactCount(showReq), reqSeries, up(31.4)),
      kpi("mit", "Mitigated requests", compactCount(showMit), mitSeries, up(22)),
      kpi("mitr", "Mitigated requests rate", formatPct(mitRate), mitSeries, down(8.4)),
      kpi("custom", "Custom rule requests", compactCount(sum(customSeries)), customSeries, up(18.2)),
      kpi("rl", "Rate limiting requests", compactCount(sum(rlSeries)), rlSeries, up(9.6)),
      kpi("mg", "Managed rule requests", compactCount(sum(mgSeries)), mgSeries, down(6.4)),
    ],
    charts: [
      multiChart({
        id: "outcomes",
        title: "Request outcomes over time",
        kind: "line",
        y: "count",
        buckets,
        parts: [
          { key: "mitigated", label: "Mitigated by Cloudflare", color: BLUE, values: mitSeries },
          { key: "served", label: "Served by Cloudflare", color: ORANGE, values: servedSeries },
          { key: "origin", label: "Served by Origin", color: PINK, values: originSeries },
        ],
      }),
      multiChart({
        id: "actions",
        title: "Mitigations by action",
        kind: "bar",
        y: "count",
        stack: false,
        buckets,
        parts: [
          { key: "block", label: "Block", color: BLUE, values: blockSeries },
          { key: "challenge", label: "Managed Challenge", color: ORANGE, values: challengeSeries },
        ],
      }),
    ],
  };

  const cacheTab: TabModel = {
    layout: "6",
    kpis: [
      kpi("chr", "Cache hit rate", formatPct(hitRate), hitSpark, up(8.1)),
      kpi("cached", "Cached requests", compactCount(sum(hitSeries)), hitSeries, up(29.4)),
      kpi("uncached", "Uncached requests", compactCount(sum(uncachedSeries)), uncachedSeries, down(15.9)),
      kpi("bwc", "Bandwidth from cache", formatBytes(bwCache), bytesSeries, up(24.2)),
      kpi("tdt", "Total data transfer", formatBytes(showBytes), bytesSeries, up(18.6)),
      kpi("saved", "Bandwidth saved", formatPct(saved), hitSpark, up(6.4)),
    ],
    charts: [
      multiChart({
        id: "status",
        title: "Requests by cache status",
        kind: "bar",
        y: "count",
        stack: true,
        buckets,
        parts: [
          { key: "none", label: "None", color: PINK, values: noneSeries },
          { key: "hit", label: "Hit", color: BLUE, values: hitSeries },
          { key: "miss", label: "Miss", color: ORANGE, values: missSeries },
        ],
      }),
      multiChart({
        id: "cvu",
        title: "Cached vs uncached requests",
        kind: "bar",
        y: "count",
        stack: true,
        buckets,
        parts: [
          { key: "cached", label: "Cached", color: BLUE, values: hitSeries },
          { key: "uncached", label: "Uncached", color: ORANGE, values: uncachedSeries },
        ],
      }),
    ],
  };

  const originTab: TabModel = {
    layout: "6",
    kpis: [
      kpi("reach", "Origin reachability", "99.99%", reachSpark, up(0.4)),
      kpi("conn", "Connection success", "99.98%", reachSpark, up(0.3)),
      kpi("op50", "Origin response (p50)", `${Math.round(p50)} ms`, p50Series, down(22.4)),
      kpi("oerr", "Origin error rate", "0.04%", errSpark, down(46.2)),
      kpi("oreq", "Requests to origin", compactCount(sum(reachSeries) + sum(failSeries)), reachSeries, down(19)),
      kpi("oxfer", "Origin data transfer", formatBytes(originBytes), bytesSeries, down(11.5)),
    ],
    charts: [
      multiChart({
        id: "ocon",
        title: "Origin connection outcomes over time",
        kind: "bar",
        y: "count",
        stack: false,
        buckets,
        parts: [
          { key: "reached", label: "Reached origin", color: BLUE, values: reachSeries },
          { key: "failed", label: "Connection failed", color: ORANGE, values: failSeries },
        ],
      }),
      multiChart({
        id: "obreak",
        title: "Origin connection breakdown",
        kind: "line",
        y: "ms",
        buckets,
        parts: [
          { key: "tcp", label: "TCP handshake", color: BLUE, values: tcpSeries, total: `${Math.round(tcp)} ms` },
          { key: "tls", label: "TLS handshake", color: ORANGE, values: tlsSeries, total: `${Math.round(tls)} ms` },
          { key: "wait", label: "Response wait", color: PINK, values: waitSeries, total: `${Math.round(wait)} ms` },
        ],
      }),
    ],
  };

  const dnsTab: TabModel = {
    layout: "5",
    kpis: [
      kpi("dq", "Total DNS queries", compactCount(showDns), dnsSeries, up(15.3)),
      kpi("qps", "Queries per second", qpsLabel(showDns, opts.range), dnsSeries, up(15.3)),
      kpi("noerr", "NOERROR responses", "99.40%", noSpark, up(0.6)),
      kpi("nx", "NXDOMAIN responses", "0.60%", nxSpark, down(18)),
      kpi("proc", "Average processing time", "3 ms", msSpark, down(12.4)),
    ],
    charts: [
      singleChart({
        id: "dns-line",
        title: "DNS queries over time",
        kind: "line",
        y: "count",
        buckets,
        key: "queries",
        label: "Queries",
        color: BLUE,
        values: dnsSeries,
        seed: 401,
      }),
      multiChart({
        id: "codes",
        title: "Queries by response code",
        kind: "bar",
        y: "count",
        stack: true,
        buckets,
        parts: [
          { key: "noerror", label: "NOERROR", color: BLUE, values: okSeries },
          { key: "nxdomain", label: "NXDOMAIN", color: ORANGE, values: nxSeries },
        ],
      }),
    ],
  };

  return {
    requests: requestsTab,
    visitors: visitorsTab,
    performance: performanceTab,
    security: securityTab,
    cache: cacheTab,
    origin: originTab,
    dns: dnsTab,
  };
}
