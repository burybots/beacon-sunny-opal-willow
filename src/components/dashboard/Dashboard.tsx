import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Calendar, ChevronDown, Cloud, Filter, MoreHorizontal } from "lucide-react";
import {
  RANGE_LABEL,
  TABS,
  ZONES,
  ZERO_BOOST,
  buildDashboard,
  formatAxis,
  formatTip,
  type Boost,
  type ChartModel,
  type CountryId,
  type Filters,
  type GroupId,
  type Kpi,
  type RangeId,
  type Row,
  type TabId,
  type YKind,
} from "@/data/analytics";

const GROUPS: { id: GroupId; label: string }[] = [
  { id: "none", label: "None" },
  { id: "country", label: "Country" },
  { id: "cache", label: "Cache status" },
];

function Spark({ data }: { data: number[] }) {
  const gid = useId().replace(/:/g, "");
  const rows = data.map((v, i) => ({ i, v }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={rows} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f6fed" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#2f6fed" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Area
          type="linear"
          dataKey="v"
          stroke="#2f6fed"
          strokeWidth={1.6}
          fill={`url(#${gid})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function Delta({ pct, direction }: { pct: number; direction: "up" | "down" }) {
  return (
    <span className="cf-delta">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
        {direction === "up" ? (
          <path d="M6 2.2 10 8.2H2L6 2.2Z" fill="currentColor" />
        ) : (
          <path d="M6 9.8 2 3.8h8L6 9.8Z" fill="currentColor" />
        )}
      </svg>
      {pct.toFixed(1)}%
    </span>
  );
}

function KpiCard({ item, hot }: { item: Kpi; hot?: boolean }) {
  return (
    <article className="cf-kpi">
      <div className="cf-kpi-top">
        <p className="cf-kpi-label">{item.label}</p>
        <div className="cf-kpi-row">
          <p className={hot ? "cf-kpi-value is-hot" : "cf-kpi-value"}>{item.value}</p>
          {item.delta ? <Delta pct={item.delta.pct} direction={item.delta.direction} /> : null}
        </div>
      </div>
      <div className="cf-spark">
        <Spark data={item.spark} />
      </div>
    </article>
  );
}

function Tip({
  active,
  payload,
  y,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number | string; color?: string; payload?: Row }>;
  y: YKind;
}) {
  if (!active || !payload?.length) return null;
  const tip = payload[0]?.payload?.tip ?? "";
  return (
    <div className="cf-tip">
      <p className="cf-tip-label">{tip}</p>
      {payload.map((p) => (
        <p key={String(p.name)}>
          <i style={{ background: p.color }} />
          <span>{p.name}</span>
          <b>{formatTip(y, Number(p.value ?? 0))}</b>
        </p>
      ))}
    </div>
  );
}

function ChartCard({ chart }: { chart: ChartModel }) {
  const [group, setGroup] = useState<GroupId>("none");
  const [hidden, setHidden] = useState<string[]>([]);
  const view = chart.views[chart.groupable ? group : "none"];
  const visible = view.series.filter((s) => !hidden.includes(s.key));

  function toggle(key: string) {
    setHidden((curr) => (curr.includes(key) ? curr.filter((k) => k !== key) : [...curr, key]));
  }

  const axis = (
    <>
      <CartesianGrid vertical={false} stroke="#eceff3" strokeDasharray="3 6" />
      <XAxis
        dataKey="label"
        tick={{ fill: "#8b939e", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
        interval={0}
        minTickGap={12}
      />
      <YAxis
        tick={{ fill: "#8b939e", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
        width={52}
        allowDecimals={false}
        tickFormatter={(v: number) => formatAxis(chart.y, v)}
      />
      <Tooltip content={<Tip y={chart.y} />} cursor={{ stroke: "#d5dbe3", strokeWidth: 1 }} />
    </>
  );

  return (
    <article className="cf-card">
      <div className="cf-card-head">
        <h3>{chart.title}</h3>
        {chart.groupable ? (
          <label className="cf-group">
            Group by
            <select
              value={group}
              aria-label={`Group ${chart.title} by`}
              onChange={(e) => {
                setGroup(e.target.value as GroupId);
                setHidden([]);
              }}
            >
              {GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>
      <div className="cf-legend">
        {view.series.map((s) => (
          <button
            key={s.key}
            type="button"
            className={hidden.includes(s.key) ? "off" : undefined}
            onClick={() => toggle(s.key)}
            aria-pressed={!hidden.includes(s.key)}
          >
            <i className="swatch" style={{ background: s.color }} />
            {s.label} <b>{s.total}</b>
          </button>
        ))}
      </div>
      <div className="cf-plot">
        <ResponsiveContainer width="100%" height="100%">
          {chart.kind === "line" ? (
            <LineChart data={view.data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              {axis}
              {visible.map((s) => (
                <Line
                  key={s.key}
                  type="linear"
                  dataKey={s.key}
                  name={s.label}
                  stroke={s.color}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={view.data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={2}>
              {axis}
              {visible.map((s, i) => (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  name={s.label}
                  fill={s.color}
                  stackId={chart.stack ? "a" : undefined}
                  maxBarSize={28}
                  radius={!chart.stack || i === visible.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]}
                  isAnimationActive={false}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export function CloudflareDashboard() {
  const [tab, setTab] = useState<TabId>("visitors");
  const [range, setRange] = useState<RangeId>("24h");
  const [zoneId, setZoneId] = useState(ZONES[0].id);
  const [filters, setFilters] = useState<Filters>({ humansOnly: false, country: "all" });
  const [boost, setBoost] = useState<Boost>(ZERO_BOOST);
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState<null | "filter" | "range" | "more" | "zone">(null);
  const [hot, setHot] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const zone = ZONES.find((z) => z.id === zoneId) ?? ZONES[0];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
      setBoost((b) => ({
        requests: b.requests + 8 + Math.floor(Math.random() * 24),
        visits: b.visits + (Math.random() > 0.55 ? 1 : 0),
        pageviews: b.pageviews + (Math.random() > 0.35 ? 1 : 0) + (Math.random() > 0.75 ? 1 : 0),
        blocked: b.blocked + (Math.random() > 0.5 ? 1 : 0),
        dns: b.dns + 3 + Math.floor(Math.random() * 8),
        transfer: b.transfer + 120_000 + Math.floor(Math.random() * 480_000),
      }));
    }, 1700);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (tick === 0) return;
    setHot(true);
    const t = window.setTimeout(() => setHot(false), 480);
    return () => window.clearTimeout(t);
  }, [tick]);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setMenu(null);
    }
    function onDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setMenu(null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, []);

  const model = useMemo(
    () => buildDashboard({ zoneId, range, filters, boost, tick }),
    [zoneId, range, filters, boost, tick],
  );
  const current = model[tab];

  function onTabKey(e: ReactKeyboardEvent<HTMLDivElement>) {
    const i = TABS.findIndex((t) => t.id === tab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setTab(TABS[(i + 1) % TABS.length].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setTab(TABS[(i + TABS.length - 1) % TABS.length].id);
    }
  }

  function setCountry(country: CountryId) {
    setFilters((f) => ({ ...f, country }));
    setBoost(ZERO_BOOST);
    setTick(0);
  }

  return (
    <div className="cf-window" ref={rootRef}>
      <div className="cf-chrome">
        <div className="cf-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="cf-pop-wrap">
          <button
            type="button"
            className="cf-host"
            aria-expanded={menu === "zone"}
            onClick={() => setMenu((m) => (m === "zone" ? null : "zone"))}
          >
            <Cloud size={16} strokeWidth={2.2} />
            {zone.host}
            <small>{zone.trade}</small>
            <ChevronDown size={14} />
          </button>
          {menu === "zone" ? (
            <div className="cf-menu" role="menu">
              {ZONES.map((z) => (
                <button
                  key={z.id}
                  type="button"
                  className="cf-choice"
                  role="menuitemradio"
                  aria-checked={z.id === zoneId}
                  onClick={() => {
                    setZoneId(z.id);
                    setBoost(ZERO_BOOST);
                    setTick(0);
                    setMenu(null);
                  }}
                >
                  <span>
                    {z.host}
                    <small style={{ display: "block", color: "#6f675c" }}>{z.trade}</small>
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <span className="cf-live" style={{ marginLeft: "auto" }}>
          <i />
          {paused ? "Paused" : "Live"}
        </span>
      </div>
      <div className="cf-body">
        <div className="cf-tabbar">
          <div className="cf-tabtrack">
            <div className="cf-tabs" role="tablist" aria-label="Analytics" onKeyDown={onTabKey}>
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="cf-tab"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={tab === t.id}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={tab === t.id ? 0 : -1}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="cf-actions">
            <div className="cf-pop-wrap">
              <button
                type="button"
                className="cf-action"
                aria-expanded={menu === "filter"}
                onClick={() => setMenu((m) => (m === "filter" ? null : "filter"))}
              >
                <Filter size={14} />
                Add filter
              </button>
              {menu === "filter" ? (
                <div className="cf-pop">
                  <p>Traffic</p>
                  <button
                    type="button"
                    className="cf-choice"
                    aria-checked={!filters.humansOnly}
                    onClick={() => {
                      setFilters((f) => ({ ...f, humansOnly: false }));
                      setBoost(ZERO_BOOST);
                      setTick(0);
                    }}
                  >
                    All requests
                  </button>
                  <button
                    type="button"
                    className="cf-choice"
                    aria-checked={filters.humansOnly}
                    onClick={() => {
                      setFilters((f) => ({ ...f, humansOnly: true }));
                      setBoost(ZERO_BOOST);
                      setTick(0);
                    }}
                  >
                    Humans only
                  </button>
                  <p>Country</p>
                  {(
                    [
                      ["all", "All countries"],
                      ["us", "United States"],
                      ["gb", "United Kingdom"],
                      ["ca", "Canada"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      className="cf-choice"
                      aria-checked={filters.country === id}
                      onClick={() => setCountry(id)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="cf-pop-wrap">
              <button
                type="button"
                className="cf-action"
                aria-expanded={menu === "range"}
                onClick={() => setMenu((m) => (m === "range" ? null : "range"))}
              >
                <Calendar size={14} />
                {RANGE_LABEL[range]}
              </button>
              {menu === "range" ? (
                <div className="cf-pop">
                  <p>Time range</p>
                  {(Object.keys(RANGE_LABEL) as RangeId[]).map((id) => (
                    <button
                      key={id}
                      type="button"
                      className="cf-choice"
                      aria-checked={range === id}
                      onClick={() => {
                        setRange(id);
                        setBoost(ZERO_BOOST);
                        setTick(0);
                        setMenu(null);
                      }}
                    >
                      {RANGE_LABEL[id]}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="cf-pop-wrap">
              <button
                type="button"
                className="cf-action"
                aria-label="More"
                aria-expanded={menu === "more"}
                onClick={() => setMenu((m) => (m === "more" ? null : "more"))}
              >
                <MoreHorizontal size={16} />
              </button>
              {menu === "more" ? (
                <div className="cf-pop">
                  <button
                    type="button"
                    className="cf-choice"
                    onClick={() => {
                      setPaused((p) => !p);
                      setMenu(null);
                    }}
                  >
                    {paused ? "Resume live updates" : "Pause live updates"}
                  </button>
                  <button
                    type="button"
                    className="cf-choice"
                    onClick={() => {
                      setBoost(ZERO_BOOST);
                      setTick(0);
                      setPaused(false);
                      setFilters({ humansOnly: false, country: "all" });
                      setRange("24h");
                      setMenu(null);
                    }}
                  >
                    Reset simulation
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="cf-panel" key={tab}>
          <div className={`cf-kpis l-${current.layout}`}>
            {current.kpis.map((item, i) => (
              <KpiCard key={item.id} item={item} hot={hot && i === 0} />
            ))}
          </div>
          <div className="cf-charts">
            {current.charts.map((chart) => (
              <ChartCard key={chart.id} chart={chart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
