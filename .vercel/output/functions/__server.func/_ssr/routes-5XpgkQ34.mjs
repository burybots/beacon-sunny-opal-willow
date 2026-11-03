import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, a as Shield, c as Github, d as Cloud, f as ChevronDown, g as BadgeCheck, h as Bot, i as Timer, l as Funnel, m as Calendar, n as X, o as Plus, p as Check, s as Menu, t as Zap, u as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Bar, n as BarChart, o as Area, r as LineChart, s as Line, t as AreaChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-5XpgkQ34.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "requests",
		label: "Requests"
	},
	{
		id: "visitors",
		label: "Visitors"
	},
	{
		id: "performance",
		label: "Performance"
	},
	{
		id: "security",
		label: "Security"
	},
	{
		id: "cache",
		label: "Cache"
	},
	{
		id: "origin",
		label: "Origin"
	},
	{
		id: "dns",
		label: "DNS"
	}
];
var ZONES = [
	{
		id: "northshore",
		host: "northshore.studio",
		trade: "Design studio",
		scale: 1,
		hit: 96.4
	},
	{
		id: "harbor",
		host: "harborandco.com",
		trade: "Neighborhood shop",
		scale: 2.35,
		hit: 94.8
	},
	{
		id: "field",
		host: "fielddayelectric.com",
		trade: "Local trades",
		scale: .62,
		hit: 97.6
	}
];
var RANGE_LABEL = {
	"24h": "Last 24 hours",
	"7d": "Last 7 days",
	"30d": "Last 30 days"
};
var ZERO_BOOST = {
	requests: 0,
	visits: 0,
	pageviews: 0,
	blocked: 0,
	dns: 0,
	transfer: 0
};
var BLUE = "#2f6fed";
var ORANGE = "#f5a524";
var PINK = "#e34b9b";
var SLATE = "#8b95a5";
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var SHAPE = {
	spike: [
		1,
		2,
		5,
		2,
		8,
		3,
		2,
		26,
		5,
		2,
		3,
		9,
		2,
		1,
		20,
		6,
		3,
		4,
		48,
		7,
		3,
		2,
		10,
		3,
		16,
		4,
		2,
		6,
		22,
		3,
		8,
		2
	],
	busy: [
		8,
		12,
		9,
		16,
		14,
		20,
		18,
		24,
		16,
		22,
		30,
		18,
		16,
		26,
		22,
		34,
		20,
		15,
		24,
		38,
		26,
		18,
		22,
		16,
		20,
		24,
		14,
		18,
		22,
		12,
		16,
		10
	],
	calm: [
		18,
		21,
		17,
		22,
		19,
		23,
		18,
		16,
		21,
		20,
		19,
		24,
		18,
		17,
		21,
		19,
		23,
		18,
		22,
		16,
		20,
		21,
		18,
		17
	],
	rare: [
		.2,
		.1,
		.5,
		0,
		.3,
		1.4,
		.2,
		0,
		.4,
		.1,
		.2,
		3.2,
		0,
		.2,
		.5,
		.1,
		.3,
		1.1,
		0,
		.2,
		.4,
		.1,
		2.2,
		.2
	],
	one: [
		.15,
		.1,
		.2,
		.05,
		.2,
		.1,
		.3,
		.1,
		.15,
		14,
		.2,
		.1,
		.25,
		.4,
		.1,
		.05,
		.3,
		.15,
		.4,
		.1,
		.2,
		.1,
		.35,
		.15
	],
	wave: [
		10,
		16,
		8,
		14,
		28,
		12,
		7,
		18,
		9,
		6,
		15,
		32,
		11,
		8,
		20,
		13,
		7,
		11,
		26,
		9,
		6,
		16,
		22,
		8,
		14,
		19,
		9,
		7,
		17,
		8,
		12,
		6
	],
	hard: [
		.2,
		.3,
		.2,
		.6,
		1.4,
		.3,
		.5,
		30,
		.4,
		.2,
		.5,
		1,
		.3,
		.2,
		18,
		.7,
		.3,
		.5,
		56,
		.8,
		.3,
		.2,
		.7,
		.3,
		10,
		.4,
		.2,
		.5,
		16,
		.3,
		.6,
		.2
	]
};
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function trimNum(n, digits) {
	return n.toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}
function compactCount(n) {
	const sign = n < 0 ? "-" : "";
	const v = Math.abs(n);
	if (v >= 1e6) {
		const m = v / 1e6;
		return sign + trimNum(m, m >= 10 ? 1 : 2) + "M";
	}
	if (v >= 1e3) {
		const k = v / 1e3;
		return sign + trimNum(k, k >= 100 ? 0 : k >= 10 ? 1 : 2) + "k";
	}
	return sign + Math.round(v).toLocaleString("en-US");
}
function formatBytes(n) {
	const sign = n < 0 ? "-" : "";
	const v = Math.abs(n);
	const unit = (x, suffix, digits) => `${sign}${trimNum(x, digits)} ${suffix}`;
	if (v >= 1e9) return unit(v / 1e9, "GB", 2);
	if (v >= 1e6) return unit(v / 1e6, "MB", v >= 1e8 ? 0 : 2);
	if (v >= 1e3) return unit(v / 1e3, "kB", 2);
	return `${sign}${Math.round(v)} B`;
}
function formatPct(n) {
	if (n > 0 && n < 1) return `${n.toFixed(2)}%`;
	return `${n.toFixed(1)}%`;
}
function formatAxis(kind, n) {
	if (kind === "bytes") {
		if (Math.abs(n) >= 1e9) return `${trimNum(n / 1e9, 1)} GB`;
		if (Math.abs(n) >= 1e6) return `${Math.round(n / 1e6)} MB`;
		if (Math.abs(n) >= 1e3) return `${Math.round(n / 1e3)} kB`;
		return `${Math.round(n)} B`;
	}
	if (kind === "ms") return `${Math.round(n)}`;
	return compactCount(n);
}
function formatTip(kind, n) {
	if (kind === "bytes") return formatBytes(n);
	if (kind === "ms") return `${Math.round(n)} ms`;
	return compactCount(Math.round(n));
}
function fmt(ms, time) {
	const dt = new Date(ms);
	const mon = MONTHS[dt.getUTCMonth()];
	const day = dt.getUTCDate();
	if (!time) return `${mon} ${day}`;
	return `${mon} ${day}, ${String(dt.getUTCHours()).padStart(2, "0")}:00`;
}
function makeBuckets(range) {
	if (range === "24h") {
		const start = Date.UTC(2026, 10, 2, 12, 0, 0);
		return Array.from({ length: 24 }, (_, i) => {
			const tip = fmt(start + i * 36e5, true);
			return {
				tip,
				label: i % 4 === 0 ? tip : ""
			};
		});
	}
	if (range === "7d") {
		const start = Date.UTC(2026, 9, 28, 0, 0, 0);
		return Array.from({ length: 28 }, (_, i) => {
			const ms = start + i * 6 * 36e5;
			const dt = new Date(ms);
			return {
				tip: fmt(ms, true),
				label: dt.getUTCHours() === 0 ? fmt(ms, false) : ""
			};
		});
	}
	const start = Date.UTC(2026, 9, 5, 0, 0, 0);
	return Array.from({ length: 30 }, (_, i) => {
		const tip = fmt(start + i * 864e5, false);
		return {
			tip,
			label: i % 5 === 0 ? tip : ""
		};
	});
}
function sample(profile, n, seed) {
	const rng = mulberry32(seed);
	const out = [];
	for (let i = 0; i < n; i++) {
		const t = i / Math.max(1, n - 1) * (profile.length - 1);
		const i0 = Math.floor(t);
		const i1 = Math.min(profile.length - 1, i0 + 1);
		const f = t - i0;
		const v = profile[i0] * (1 - f) + profile[i1] * f;
		out.push(Math.max(0, v * (.86 + rng() * .28)));
	}
	return out;
}
function fitSum(values, total) {
	const sum = values.reduce((a, b) => a + b, 0) || 1;
	const safe = Math.max(0, total);
	return values.map((v) => v / sum * safe);
}
function fitMean(values, mean) {
	const avg = values.reduce((a, b) => a + b, 0) / values.length || 1;
	return values.map((v) => Math.max(.2, v / avg * mean));
}
function nudge(values, tick) {
	if (tick <= 0 || values.length === 0) return values;
	const next = values.slice();
	const extra = Math.abs(Math.sin(tick / 1.7)) * ((next[next.length - 1] || 1) * .08 + .4);
	next[next.length - 1] = Math.max(0, next[next.length - 1] + extra);
	return next;
}
function sum(values) {
	return values.reduce((a, b) => a + b, 0);
}
function sparkOf(values) {
	if (values.length <= 36) return values;
	return Array.from({ length: 32 }, (_, i) => values[Math.min(values.length - 1, Math.floor(i / 31 * (values.length - 1)))] ?? 0);
}
function kpi(id, label, value, spark, delta) {
	return {
		id,
		label,
		value,
		delta,
		spark: sparkOf(spark)
	};
}
var COUNTRY_PARTS = [
	{
		key: "us",
		label: "United States",
		color: BLUE,
		weight: .58
	},
	{
		key: "gb",
		label: "United Kingdom",
		color: ORANGE,
		weight: .16
	},
	{
		key: "ca",
		label: "Canada",
		color: PINK,
		weight: .11
	},
	{
		key: "other",
		label: "Other",
		color: SLATE,
		weight: .15
	}
];
var CACHE_PARTS = [
	{
		key: "hit",
		label: "Hit",
		color: BLUE,
		weight: .78
	},
	{
		key: "dynamic",
		label: "Dynamic",
		color: PINK,
		weight: .16
	},
	{
		key: "miss",
		label: "Miss",
		color: ORANGE,
		weight: .06
	}
];
function totalLabel(values, y) {
	const s = sum(values);
	if (y === "bytes") return formatBytes(s);
	if (y === "ms") return `${Math.round(s / Math.max(1, values.length))} ms`;
	return compactCount(s);
}
function splitView(rows, key, parts, seed, y) {
	const data = rows.map((row, i) => {
		const total = Number(row[key] ?? 0);
		const rng = mulberry32(seed + i * 13);
		const jitter = parts.map((p) => p.weight * (.82 + rng() * .36));
		const jsum = jitter.reduce((a, b) => a + b, 0) || 1;
		const next = {
			label: row.label,
			tip: row.tip
		};
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
	return {
		data,
		series: parts.map((p) => {
			const values = data.map((r) => Number(r[p.key] ?? 0));
			return {
				key: p.key,
				label: p.label,
				color: p.color,
				total: totalLabel(values, y)
			};
		})
	};
}
function singleChart(opts) {
	const data = opts.buckets.map((b, i) => ({
		label: b.label,
		tip: b.tip,
		[opts.key]: opts.values[i] ?? 0
	}));
	const base = {
		data,
		series: [{
			key: opts.key,
			label: opts.label,
			color: opts.color,
			total: opts.total ?? totalLabel(opts.values, opts.y)
		}]
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
			cache: opts.groupable ? splitView(data, opts.key, CACHE_PARTS, opts.seed + 90, opts.y) : base
		}
	};
}
function multiChart(opts) {
	const view = {
		data: opts.buckets.map((b, i) => {
			const row = {
				label: b.label,
				tip: b.tip
			};
			for (const p of opts.parts) row[p.key] = p.values[i] ?? 0;
			return row;
		}),
		series: opts.parts.map((p) => ({
			key: p.key,
			label: p.label,
			color: p.color,
			total: p.total ?? totalLabel(p.values, opts.y)
		}))
	};
	return {
		id: opts.id,
		title: opts.title,
		kind: opts.kind,
		y: opts.y,
		stack: opts.stack ?? opts.kind === "bar",
		groupable: false,
		views: {
			none: view,
			country: view,
			cache: view
		}
	};
}
function up(pct) {
	return {
		pct,
		direction: "up"
	};
}
function down(pct) {
	return {
		pct,
		direction: "down"
	};
}
function qpsLabel(queries, range) {
	return `${(queries / (range === "24h" ? 86400 : range === "7d" ? 604800 : 2592e3)).toFixed(2)}/s`;
}
function buildDashboard(opts) {
	const zone = ZONES.find((z) => z.id === opts.zoneId) ?? ZONES[0];
	const rangeMult = opts.range === "24h" ? 1 : opts.range === "7d" ? 7.15 : 31.2;
	const geo = opts.filters.country === "all" ? 1 : opts.filters.country === "us" ? .61 : opts.filters.country === "gb" ? .16 : .11;
	const live = opts.range === "24h" ? 1 : opts.range === "7d" ? 3.4 : 10;
	const vol = zone.scale * rangeMult * geo;
	const human = opts.filters.humansOnly;
	const requests = 24860 * vol * (human ? .78 : 1) + opts.boost.requests * live;
	const visits = 1840 * vol + opts.boost.visits * live;
	const pageviews = Math.max(visits, 5210 * vol + opts.boost.pageviews * live);
	const transfer = 86e7 * vol * (human ? .86 : 1) + opts.boost.transfer * live;
	const mitigated = Math.min(requests * .34, 4120 * vol * (human ? .16 : 1) + opts.boost.blocked * live);
	const dns = 36400 * vol + opts.boost.dns * live;
	const hitRate = Math.min(99.1, zone.hit + (human ? .7 : 0));
	const cacheable = requests * .97;
	const hitN = cacheable * (hitRate / 100);
	const missN = Math.max(0, cacheable - hitN);
	const noneN = Math.max(0, requests - hitN - missN);
	const cachedN = hitN;
	const uncachedN = Math.max(0, requests - cachedN);
	const bwCache = Math.min(transfer * .95, transfer * (.72 + hitRate / 400));
	const saved = transfer > 0 ? bwCache / transfer * 100 : 0;
	const originN = Math.max(0, missN + noneN * .08);
	const originFail = Math.max(1, Math.round(originN * 6e-4));
	const originOk = Math.max(0, originN - originFail);
	const originBytes = transfer * (1 - saved / 100);
	const custom = mitigated * .69;
	const rateLimited = mitigated * .23;
	const managed = Math.max(0, mitigated - custom - rateLimited);
	const blocked = mitigated * .88;
	const challenged = mitigated - blocked;
	const p50 = 42 - (zone.hit - 96) * .8;
	const p95 = 128 - (zone.hit - 96) * 1.5;
	const p99 = 264 - (zone.hit - 96);
	const tcp = 11;
	const tls = 16;
	const wait = Math.max(8, p50 - tcp - tls);
	const h1 = requests * .1;
	const h2 = requests * .58;
	const h3 = requests * .32;
	const nx = dns - dns * .994;
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
	const errSpark = fitMean(sample(SHAPE.rare, n, 139), .04);
	const reachSpark = fitMean(sample(SHAPE.calm, n, 149), 99.6);
	const nxSpark = fitMean(sample(SHAPE.rare, n, 151), .6);
	const noSpark = fitMean(sample(SHAPE.calm, n, 157), 99.4);
	const msSpark = fitMean(sample(SHAPE.calm, n, 163), 3);
	const showReq = sum(reqSeries);
	const showViews = sum(viewSeries);
	const showVisits = sum(visitSeries);
	const showBytes = sum(bytesSeries);
	const showMit = sum(mitSeries);
	const showDns = sum(dnsSeries);
	const mitRate = showReq > 0 ? showMit / showReq * 100 : 0;
	return {
		requests: {
			layout: "5",
			kpis: [
				kpi("req", "Total requests", compactCount(showReq), reqSeries, up(31.4)),
				kpi("xfer", "Total data transfer", formatBytes(showBytes), bytesSeries, up(18.6)),
				kpi("vis", "Total visits", compactCount(showVisits), visitSeries, up(27.2)),
				kpi("hit", "Cache hit rate", formatPct(hitRate), hitSpark, up(8.1)),
				kpi("err", "5xx error rate", "0.02%", errSpark, down(71))
			],
			charts: [singleChart({
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
				seed: 201
			}), singleChart({
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
				seed: 209
			})]
		},
		visitors: {
			layout: "2",
			kpis: [kpi("pv", "Pageviews", compactCount(showViews), viewSeries, up(36.2)), kpi("vv", "Total visits", compactCount(showVisits), visitSeries, up(27.2))],
			charts: [singleChart({
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
				seed: 301
			}), singleChart({
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
				seed: 307
			})]
		},
		performance: {
			layout: "2",
			kpis: [kpi("p50", "Origin response (p50)", `${Math.round(p50)} ms`, p50Series, down(22.4)), kpi("p95", "Origin response (p95)", `${Math.round(p95)} ms`, p95Series, down(18.1))],
			charts: [multiChart({
				id: "pct",
				title: "Origin response time percentiles",
				kind: "line",
				y: "ms",
				buckets,
				parts: [
					{
						key: "p50",
						label: "p50",
						color: BLUE,
						values: p50Series,
						total: `${Math.round(p50)} ms`
					},
					{
						key: "p95",
						label: "p95",
						color: ORANGE,
						values: p95Series,
						total: `${Math.round(p95)} ms`
					},
					{
						key: "p99",
						label: "p99",
						color: PINK,
						values: p99Series,
						total: `${Math.round(p99)} ms`
					}
				]
			}), multiChart({
				id: "http",
				title: "Requests by HTTP protocol",
				kind: "bar",
				y: "count",
				stack: true,
				buckets,
				parts: [
					{
						key: "h1",
						label: "HTTP/1.1",
						color: BLUE,
						values: h1Series
					},
					{
						key: "h2",
						label: "HTTP/2",
						color: ORANGE,
						values: h2Series
					},
					{
						key: "h3",
						label: "HTTP/3",
						color: PINK,
						values: h3Series
					}
				]
			})]
		},
		security: {
			layout: "3",
			kpis: [
				kpi("sreq", "Total requests", compactCount(showReq), reqSeries, up(31.4)),
				kpi("mit", "Mitigated requests", compactCount(showMit), mitSeries, up(22)),
				kpi("mitr", "Mitigated requests rate", formatPct(mitRate), mitSeries, down(8.4)),
				kpi("custom", "Custom rule requests", compactCount(sum(customSeries)), customSeries, up(18.2)),
				kpi("rl", "Rate limiting requests", compactCount(sum(rlSeries)), rlSeries, up(9.6)),
				kpi("mg", "Managed rule requests", compactCount(sum(mgSeries)), mgSeries, down(6.4))
			],
			charts: [multiChart({
				id: "outcomes",
				title: "Request outcomes over time",
				kind: "line",
				y: "count",
				buckets,
				parts: [
					{
						key: "mitigated",
						label: "Mitigated by Cloudflare",
						color: BLUE,
						values: mitSeries
					},
					{
						key: "served",
						label: "Served by Cloudflare",
						color: ORANGE,
						values: servedSeries
					},
					{
						key: "origin",
						label: "Served by Origin",
						color: PINK,
						values: originSeries
					}
				]
			}), multiChart({
				id: "actions",
				title: "Mitigations by action",
				kind: "bar",
				y: "count",
				stack: false,
				buckets,
				parts: [{
					key: "block",
					label: "Block",
					color: BLUE,
					values: blockSeries
				}, {
					key: "challenge",
					label: "Managed Challenge",
					color: ORANGE,
					values: challengeSeries
				}]
			})]
		},
		cache: {
			layout: "6",
			kpis: [
				kpi("chr", "Cache hit rate", formatPct(hitRate), hitSpark, up(8.1)),
				kpi("cached", "Cached requests", compactCount(sum(hitSeries)), hitSeries, up(29.4)),
				kpi("uncached", "Uncached requests", compactCount(sum(uncachedSeries)), uncachedSeries, down(15.9)),
				kpi("bwc", "Bandwidth from cache", formatBytes(bwCache), bytesSeries, up(24.2)),
				kpi("tdt", "Total data transfer", formatBytes(showBytes), bytesSeries, up(18.6)),
				kpi("saved", "Bandwidth saved", formatPct(saved), hitSpark, up(6.4))
			],
			charts: [multiChart({
				id: "status",
				title: "Requests by cache status",
				kind: "bar",
				y: "count",
				stack: true,
				buckets,
				parts: [
					{
						key: "none",
						label: "None",
						color: PINK,
						values: noneSeries
					},
					{
						key: "hit",
						label: "Hit",
						color: BLUE,
						values: hitSeries
					},
					{
						key: "miss",
						label: "Miss",
						color: ORANGE,
						values: missSeries
					}
				]
			}), multiChart({
				id: "cvu",
				title: "Cached vs uncached requests",
				kind: "bar",
				y: "count",
				stack: true,
				buckets,
				parts: [{
					key: "cached",
					label: "Cached",
					color: BLUE,
					values: hitSeries
				}, {
					key: "uncached",
					label: "Uncached",
					color: ORANGE,
					values: uncachedSeries
				}]
			})]
		},
		origin: {
			layout: "6",
			kpis: [
				kpi("reach", "Origin reachability", "99.99%", reachSpark, up(.4)),
				kpi("conn", "Connection success", "99.98%", reachSpark, up(.3)),
				kpi("op50", "Origin response (p50)", `${Math.round(p50)} ms`, p50Series, down(22.4)),
				kpi("oerr", "Origin error rate", "0.04%", errSpark, down(46.2)),
				kpi("oreq", "Requests to origin", compactCount(sum(reachSeries) + sum(failSeries)), reachSeries, down(19)),
				kpi("oxfer", "Origin data transfer", formatBytes(originBytes), bytesSeries, down(11.5))
			],
			charts: [multiChart({
				id: "ocon",
				title: "Origin connection outcomes over time",
				kind: "bar",
				y: "count",
				stack: false,
				buckets,
				parts: [{
					key: "reached",
					label: "Reached origin",
					color: BLUE,
					values: reachSeries
				}, {
					key: "failed",
					label: "Connection failed",
					color: ORANGE,
					values: failSeries
				}]
			}), multiChart({
				id: "obreak",
				title: "Origin connection breakdown",
				kind: "line",
				y: "ms",
				buckets,
				parts: [
					{
						key: "tcp",
						label: "TCP handshake",
						color: BLUE,
						values: tcpSeries,
						total: `${Math.round(tcp)} ms`
					},
					{
						key: "tls",
						label: "TLS handshake",
						color: ORANGE,
						values: tlsSeries,
						total: `${Math.round(tls)} ms`
					},
					{
						key: "wait",
						label: "Response wait",
						color: PINK,
						values: waitSeries,
						total: `${Math.round(wait)} ms`
					}
				]
			})]
		},
		dns: {
			layout: "5",
			kpis: [
				kpi("dq", "Total DNS queries", compactCount(showDns), dnsSeries, up(15.3)),
				kpi("qps", "Queries per second", qpsLabel(showDns, opts.range), dnsSeries, up(15.3)),
				kpi("noerr", "NOERROR responses", "99.40%", noSpark, up(.6)),
				kpi("nx", "NXDOMAIN responses", "0.60%", nxSpark, down(18)),
				kpi("proc", "Average processing time", "3 ms", msSpark, down(12.4))
			],
			charts: [singleChart({
				id: "dns-line",
				title: "DNS queries over time",
				kind: "line",
				y: "count",
				buckets,
				key: "queries",
				label: "Queries",
				color: BLUE,
				values: dnsSeries,
				seed: 401
			}), multiChart({
				id: "codes",
				title: "Queries by response code",
				kind: "bar",
				y: "count",
				stack: true,
				buckets,
				parts: [{
					key: "noerror",
					label: "NOERROR",
					color: BLUE,
					values: okSeries
				}, {
					key: "nxdomain",
					label: "NXDOMAIN",
					color: ORANGE,
					values: nxSeries
				}]
			})]
		}
	};
}
var GROUPS = [
	{
		id: "none",
		label: "None"
	},
	{
		id: "country",
		label: "Country"
	},
	{
		id: "cache",
		label: "Cache status"
	}
];
function Spark({ data }) {
	const gid = (0, import_react.useId)().replace(/:/g, "");
	const rows = data.map((v, i) => ({
		i,
		v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			data: rows,
			margin: {
				top: 8,
				right: 0,
				left: 0,
				bottom: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: gid,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#2f6fed",
					stopOpacity: .28
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#2f6fed",
					stopOpacity: .02
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "linear",
				dataKey: "v",
				stroke: "#2f6fed",
				strokeWidth: 1.6,
				fill: `url(#${gid})`,
				dot: false,
				isAnimationActive: false
			})]
		})
	});
}
function Delta({ pct, direction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "cf-delta",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "12",
				height: "12",
				viewBox: "0 0 12 12",
				"aria-hidden": "true",
				children: direction === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 2.2 10 8.2H2L6 2.2Z",
					fill: "currentColor"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 9.8 2 3.8h8L6 9.8Z",
					fill: "currentColor"
				})
			}),
			pct.toFixed(1),
			"%"
		]
	});
}
function KpiCard({ item, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "cf-kpi",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-kpi-top",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "cf-kpi-label",
				children: item.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-kpi-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: hot ? "cf-kpi-value is-hot" : "cf-kpi-value",
					children: item.value
				}), item.delta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delta, {
					pct: item.delta.pct,
					direction: item.delta.direction
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-spark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, { data: item.spark })
		})]
	});
}
function Tip({ active, payload, y }) {
	if (!active || !payload?.length) return null;
	const tip = payload[0]?.payload?.tip ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cf-tip",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "cf-tip-label",
			children: tip
		}), payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: p.color } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatTip(y, Number(p.value ?? 0)) })
		] }, String(p.name)))]
	});
}
function ChartCard({ chart }) {
	const [group, setGroup] = (0, import_react.useState)("none");
	const [hidden, setHidden] = (0, import_react.useState)([]);
	const view = chart.views[chart.groupable ? group : "none"];
	const visible = view.series.filter((s) => !hidden.includes(s.key));
	function toggle(key) {
		setHidden((curr) => curr.includes(key) ? curr.filter((k) => k !== key) : [...curr, key]);
	}
	const axis = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
			vertical: false,
			stroke: "#eceff3",
			strokeDasharray: "3 6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
			dataKey: "label",
			tick: {
				fill: "#8b939e",
				fontSize: 11
			},
			axisLine: false,
			tickLine: false,
			interval: 0,
			minTickGap: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
			tick: {
				fill: "#8b939e",
				fontSize: 11
			},
			axisLine: false,
			tickLine: false,
			width: 52,
			allowDecimals: false,
			tickFormatter: (v) => formatAxis(chart.y, v)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, { y: chart.y }),
			cursor: {
				stroke: "#d5dbe3",
				strokeWidth: 1
			}
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "cf-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-card-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: chart.title }), chart.groupable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "cf-group",
					children: ["Group by", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: group,
						"aria-label": `Group ${chart.title} by`,
						onChange: (e) => {
							setGroup(e.target.value);
							setHidden([]);
						},
						children: GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: g.id,
							children: g.label
						}, g.id))
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-legend",
				children: view.series.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: hidden.includes(s.key) ? "off" : void 0,
					onClick: () => toggle(s.key),
					"aria-pressed": !hidden.includes(s.key),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							className: "swatch",
							style: { background: s.color }
						}),
						s.label,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: s.total })
					]
				}, s.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cf-plot",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: chart.kind === "line" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: view.data,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [axis, visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "linear",
							dataKey: s.key,
							name: s.label,
							stroke: s.color,
							strokeWidth: 2,
							dot: false,
							isAnimationActive: false
						}, s.key))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: view.data,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						barGap: 2,
						children: [axis, visible.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: s.key,
							name: s.label,
							fill: s.color,
							stackId: chart.stack ? "a" : void 0,
							maxBarSize: 28,
							radius: !chart.stack || i === visible.length - 1 ? [
								3,
								3,
								0,
								0
							] : [
								0,
								0,
								0,
								0
							],
							isAnimationActive: false
						}, s.key))]
					})
				})
			})
		]
	});
}
function CloudflareDashboard() {
	const [tab, setTab] = (0, import_react.useState)("visitors");
	const [range, setRange] = (0, import_react.useState)("24h");
	const [zoneId, setZoneId] = (0, import_react.useState)(ZONES[0].id);
	const [filters, setFilters] = (0, import_react.useState)({
		humansOnly: false,
		country: "all"
	});
	const [boost, setBoost] = (0, import_react.useState)(ZERO_BOOST);
	const [tick, setTick] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(null);
	const [hot, setHot] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	const zone = ZONES.find((z) => z.id === zoneId) ?? ZONES[0];
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setTick((t) => t + 1);
			setBoost((b) => ({
				requests: b.requests + 8 + Math.floor(Math.random() * 24),
				visits: b.visits + (Math.random() > .55 ? 1 : 0),
				pageviews: b.pageviews + (Math.random() > .35 ? 1 : 0) + (Math.random() > .75 ? 1 : 0),
				blocked: b.blocked + (Math.random() > .5 ? 1 : 0),
				dns: b.dns + 3 + Math.floor(Math.random() * 8),
				transfer: b.transfer + 12e4 + Math.floor(Math.random() * 48e4)
			}));
		}, 1700);
		return () => window.clearInterval(id);
	}, [paused]);
	(0, import_react.useEffect)(() => {
		if (tick === 0) return;
		setHot(true);
		const t = window.setTimeout(() => setHot(false), 480);
		return () => window.clearTimeout(t);
	}, [tick]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "Escape") setMenu(null);
		}
		function onDown(e) {
			if (!rootRef.current?.contains(e.target)) setMenu(null);
		}
		window.addEventListener("keydown", onKey);
		window.addEventListener("mousedown", onDown);
		return () => {
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("mousedown", onDown);
		};
	}, []);
	const current = (0, import_react.useMemo)(() => buildDashboard({
		zoneId,
		range,
		filters,
		boost,
		tick
	}), [
		zoneId,
		range,
		filters,
		boost,
		tick
	])[tab];
	function onTabKey(e) {
		const i = TABS.findIndex((t) => t.id === tab);
		if (e.key === "ArrowRight") {
			e.preventDefault();
			setTab(TABS[(i + 1) % TABS.length].id);
		} else if (e.key === "ArrowLeft") {
			e.preventDefault();
			setTab(TABS[(i + TABS.length - 1) % TABS.length].id);
		}
	}
	function setCountry(country) {
		setFilters((f) => ({
			...f,
			country
		}));
		setBoost(ZERO_BOOST);
		setTick(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cf-window",
		ref: rootRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-chrome",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-dots",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-pop-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "cf-host",
						"aria-expanded": menu === "zone",
						onClick: () => setMenu((m) => m === "zone" ? null : "zone"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
								size: 16,
								strokeWidth: 2.2
							}),
							zone.host,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: zone.trade }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
						]
					}), menu === "zone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cf-menu",
						role: "menu",
						children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "cf-choice",
							role: "menuitemradio",
							"aria-checked": z.id === zoneId,
							onClick: () => {
								setZoneId(z.id);
								setBoost(ZERO_BOOST);
								setTick(0);
								setMenu(null);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [z.host, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								style: {
									display: "block",
									color: "#6f675c"
								},
								children: z.trade
							})] })
						}, z.id))
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "cf-live",
					style: { marginLeft: "auto" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), paused ? "Paused" : "Live"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cf-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cf-tabbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cf-tabtrack",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cf-tabs",
						role: "tablist",
						"aria-label": "Analytics",
						onKeyDown: onTabKey,
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "cf-tab",
							role: "tab",
							id: `tab-${t.id}`,
							"aria-selected": tab === t.id,
							"aria-controls": `panel-${t.id}`,
							tabIndex: tab === t.id ? 0 : -1,
							onClick: () => setTab(t.id),
							children: t.label
						}, t.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cf-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-pop-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "cf-action",
								"aria-expanded": menu === "filter",
								onClick: () => setMenu((m) => m === "filter" ? null : "filter"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { size: 14 }), "Add filter"]
							}), menu === "filter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cf-pop",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Traffic" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "cf-choice",
										"aria-checked": !filters.humansOnly,
										onClick: () => {
											setFilters((f) => ({
												...f,
												humansOnly: false
											}));
											setBoost(ZERO_BOOST);
											setTick(0);
										},
										children: "All requests"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "cf-choice",
										"aria-checked": filters.humansOnly,
										onClick: () => {
											setFilters((f) => ({
												...f,
												humansOnly: true
											}));
											setBoost(ZERO_BOOST);
											setTick(0);
										},
										children: "Humans only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Country" }),
									[
										["all", "All countries"],
										["us", "United States"],
										["gb", "United Kingdom"],
										["ca", "Canada"]
									].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "cf-choice",
										"aria-checked": filters.country === id,
										onClick: () => setCountry(id),
										children: label
									}, id))
								]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-pop-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "cf-action",
								"aria-expanded": menu === "range",
								onClick: () => setMenu((m) => m === "range" ? null : "range"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), RANGE_LABEL[range]]
							}), menu === "range" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cf-pop",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Time range" }), Object.keys(RANGE_LABEL).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "cf-choice",
									"aria-checked": range === id,
									onClick: () => {
										setRange(id);
										setBoost(ZERO_BOOST);
										setTick(0);
										setMenu(null);
									},
									children: RANGE_LABEL[id]
								}, id))]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cf-pop-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cf-action",
								"aria-label": "More",
								"aria-expanded": menu === "more",
								onClick: () => setMenu((m) => m === "more" ? null : "more"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 16 })
							}), menu === "more" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cf-pop",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "cf-choice",
									onClick: () => {
										setPaused((p) => !p);
										setMenu(null);
									},
									children: paused ? "Resume live updates" : "Pause live updates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "cf-choice",
									onClick: () => {
										setBoost(ZERO_BOOST);
										setTick(0);
										setPaused(false);
										setFilters({
											humansOnly: false,
											country: "all"
										});
										setRange("24h");
										setMenu(null);
									},
									children: "Reset simulation"
								})]
							}) : null]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "tabpanel",
				id: `panel-${tab}`,
				"aria-labelledby": `tab-${tab}`,
				className: "cf-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `cf-kpis l-${current.layout}`,
					children: current.kpis.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						item,
						hot: hot && i === 0
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cf-charts",
					children: current.charts.map((chart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, { chart }, chart.id))
				})]
			}, tab)]
		})]
	});
}
var WORDS = [
	"free.",
	"$0.",
	"zip.",
	"nada."
];
var MARQUEE = [
	["$0", " hosting fees after the move"],
	[null, "Private GitHub repository"],
	["Cloudflare Pages", " free tier"],
	[null, "Full bot & security rules"],
	[null, "Always Online active"],
	[null, "No more Squarespace or Wix bills"],
	[null, "You keep full ownership"],
	[null, "Fast global CDN"],
	["One-time", " project, then it is yours"],
	[null, "Fortune 500 uses this network"]
];
var FAQS = [
	{
		q: "Can I still edit the site later?",
		a: "Yes. Updating text, images, and pages is straightforward. You (or anyone you trust) can edit the files directly, or simply ask an AI to make the changes and push them live. Updating content is usually easier than working inside the clunky editors of Squarespace or Wix. Changing the overall look is a bit more involved than dragging boxes around in a website builder, but still very doable. Many clients just message us or use AI when they want design tweaks. This is the small trade-off for no longer paying $20–$45 every month — you gain full ownership and zero ongoing fees while still being able to update the site whenever you need."
	},
	{
		q: "Will this hurt my Google ranking?",
		a: "Usually the opposite happens. Moving to Cloudflare Pages almost always makes the site load significantly faster. Google has openly stated that site speed is a ranking factor, so a faster site tends to help visibility rather than hurt it. We also keep all your existing content and set up proper redirects, so you don’t lose any current rankings in the process. Most sites either stay the same or improve after the move."
	},
	{
		q: "Will my site go offline during the move?",
		a: "No. We build and fully test the new version on a private preview link that Cloudflare Pages automatically provides. Your current site stays live the entire time. Once everything looks good and you’ve approved it, we switch the domain over — usually with zero downtime. Visitors never see a broken or offline site."
	},
	{
		q: "What if my site relies on a form to capture leads?",
		a: "No problem at all — this is very common. We replace the old form with a new one that still sends every submission straight to your email (and optionally into a simple dashboard). You keep receiving leads exactly as you do now. The form continues to work the same way from the visitor’s perspective, just without the monthly hosting cost attached."
	},
	{
		q: "Who is this service actually for?",
		a: "It works best for ordinary small-business and local-service sites: trades, professional services, simple company sites, and brochure-style websites that mainly explain what you do and let people get in touch. If you want to stop paying monthly hosting or builder fees, you’re happy with a modern static or lightly interactive site, and you prefer to own the code and the Cloudflare account, it’s a strong fit. It is not designed for heavy custom applications, large multi-location platforms, membership sites with complex user accounts, or anything that truly needs a full server-side CMS and database."
	},
	{
		q: "What’s the real risk of moving?",
		a: "The practical risks are low for the type of sites we work with. We build and test everything on a preview domain first, so nothing goes live until you approve it. Your original site stays online the whole time. You keep full ownership of the GitHub repository and Cloudflare account from day one. The main trade-off is that editing the overall design is a bit less “drag-and-drop” than a traditional website builder — but content updates remain simple, and most clients find the savings and ownership worth it."
	},
	{
		q: "Do I still own everything after the project?",
		a: "Yes — completely. The private GitHub repository, the Cloudflare account, and your domain all stay in your name. We only work as invited collaborators during the project. Once we hand everything over, you can manage the site yourself, invite someone else, or come back to us later if you want help with updates. There is no lock-in and no ongoing dependency on us."
	},
	{
		q: "What is GitHub and why is it used?",
		a: "GitHub is simply a secure place to store the files that make up your website. In this setup we create a private repository under your own account, which means you fully own the code. Cloudflare Pages then automatically builds and serves the site from that repository. You never have to interact with GitHub if you don’t want to — it just acts as the reliable, private home for your site’s files so you’re never locked into a website builder or hosting company."
	},
	{
		q: "What exactly are Cloudflare Pages?",
		a: "Cloudflare Pages is a modern hosting platform built specifically for fast, static (or lightly dynamic) websites. Instead of running on a traditional shared server that you pay for every month, your site is stored as files and delivered through Cloudflare’s global network. This is what allows the hosting itself to be free while still being extremely fast and reliable. You keep full ownership of the site through a private GitHub repository, and Cloudflare simply serves it to visitors worldwide."
	},
	{
		q: "Who actually trusts Cloudflare?",
		a: "Roughly 45% of Fortune 500 companies rely on Cloudflare’s network. It is one of the largest and most trusted content delivery and security platforms on the internet. When we move your site, we configure the same free security layer that sits in front of those large companies — including bot protection, rate limiting, custom security rules, and Always Online. Your site benefits from enterprise-grade filtering and performance without any monthly cost."
	},
	{
		q: "What’s the likelihood Cloudflare ends their free plan?",
		a: "Low. Cloudflare has publicly and repeatedly committed to keeping a strong free tier. Their CEO has stated versions of “as long as I’m CEO” when asked about it. The free plan is part of their core business strategy — it helps them fill network capacity, gather security data, and attract future paying customers. For simple static sites (exactly what we build), the free plan is especially generous, with unlimited bandwidth for static files. Like any platform, limits can gradually change over time, but the free tier for this use case has remained very usable for years and shows no signs of disappearing."
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16 4.2 25.2 8v8.4c0 5.1-3.7 9.2-9.2 11.6C10.5 25.6 6.8 21.5 6.8 16.4V8Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10.2 22.6 22.4 9.2",
			fill: "none",
			stroke: "#f15a22",
			strokeWidth: "2.6",
			strokeLinecap: "round"
		})]
	});
}
function SpinWord() {
	const [i, setI] = (0, import_react.useState)(0);
	const [on, setOn] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setOn(false);
			window.setTimeout(() => {
				setI((v) => (v + 1) % WORDS.length);
				setOn(true);
			}, 200);
		}, 2400);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: on ? "spin-word on italic text-orange" : "spin-word italic text-orange",
		children: WORDS[i]
	});
}
var SETUP = [
	{
		icon: Shield,
		title: "Custom security rules",
		body: "Blocks for sensitive paths, common exploit scans, bad user-agents, and high-risk sources."
	},
	{
		icon: Timer,
		title: "Rate limiting & forms",
		body: "Stops rapid-fire requests against contact forms and key pages so bots cannot overwhelm them."
	},
	{
		icon: Bot,
		title: "Bot & AI controls",
		body: "Bot Fight Mode plus policies that allow useful search crawlers while restricting aggressive training bots."
	},
	{
		icon: Zap,
		title: "Always Online",
		body: "Cloudflare can still show a cached version of the site if the origin has a temporary problem."
	},
	{
		icon: Github,
		title: "GitHub + Pages",
		body: "Clean repository, automated deploys from the main branch, and a production URL on Cloudflare Pages."
	},
	{
		icon: BadgeCheck,
		title: "You own everything",
		body: "Cloudflare account, GitHub repo, and domain stay in your name. We only work as invited collaborators."
	}
];
function Landing() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [faq, setFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-3 text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-xl bg-ink text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-base font-semibold tracking-tight",
								children: "HostCut"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Free hosting + protection"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 text-sm font-medium text-muted md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dashboard",
								className: "hover:text-ink",
								children: "Dashboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#problem",
								className: "hover:text-ink",
								children: "The problem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#offers",
								className: "hover:text-ink",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#process",
								className: "hover:text-ink",
								children: "Process"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								className: "hover:text-ink",
								children: "FAQ"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#offers",
						className: "hidden h-11 items-center rounded-full bg-orange px-4 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96] md:inline-flex",
						children: "See the options"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-full border border-line md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-line bg-paper px-5 py-3 md:hidden",
				children: [
					["#dashboard", "Dashboard"],
					["#problem", "The problem"],
					["#offers", "Services"],
					["#setup", "What you get"],
					["#process", "Process"],
					["#faq", "FAQ"]
				].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "block rounded-xl px-3 py-3 text-base font-medium",
					onClick: () => setOpen(false),
					children: label
				}, href))
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-5 pt-14 pb-8 md:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-orange uppercase",
							children: "Stop paying for hosting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-xl mt-4 max-w-5xl",
							children: [
								"Stop paying rent",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-orange",
									children: "on your website."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
							children: "We move your small-business site onto free Cloudflare Pages, keep the code in a private GitHub repo you own, and turn on real bot and security protection. Or we leave your host alone and only add the shield."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#offers",
								className: "inline-flex h-12 items-center gap-2 rounded-full bg-orange px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]",
								children: ["See the two options", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dashboard",
								className: "inline-flex h-12 items-center rounded-full border border-line bg-card px-5 text-sm font-semibold transition-transform duration-150 ease-out hover:border-ink/30 active:scale-[0.96]",
								children: "Open the live dashboard"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "dashboard",
					className: "mx-auto max-w-6xl px-4 pb-6 md:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-ink p-3 md:p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex flex-wrap items-end justify-between gap-3 px-2 pt-2 text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-orange uppercase",
									children: "Example zone · simulated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-serif text-2xl md:text-3xl",
									children: "What the analytics look like after the move."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm text-paper/70",
									children: "Switch tabs, filters, zones, and the time range. Counts drift so it feels like a live account — with the kind of numbers worth keeping."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudflareDashboard, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 grid gap-2 px-1 pb-1 text-sm text-paper/80 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
											size: 18,
											className: "mt-0.5 shrink-0 text-orange"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-paper",
											children: "GitHub"
										}), " — the source stays private, in your account."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-paper",
											children: "Cloudflare Pages"
										}), " — free hosting on a global CDN."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
											size: 18,
											className: "mt-0.5 shrink-0 text-orange"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-paper",
											children: "Free-plan shield"
										}), " — bots, rules, and Always Online."] })]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee py-4",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track",
						children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-group",
							children: MARQUEE.map(([bold, rest], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								bold ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bold }) : null,
								rest,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-6 text-orange",
									children: "·"
								})
							] }, `${copy}-${i}`))
						}, copy))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "problem",
					className: "mx-auto max-w-6xl px-5 py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-orange uppercase",
							children: "The reality"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-4 max-w-4xl",
							children: ["Most small business sites pay every month for something that can be ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpinWord, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg text-muted",
							children: "Website builders and shared hosting charge ongoing fees. At the same time the open internet throws bots, scrapers, and scanners at every site. You end up paying for hosting that is both expensive and under-protected."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-10 md:grid-cols-3",
							children: [
								[
									"01",
									"Monthly fees that never stop",
									"Squarespace, Wix, WordPress hosting, and most managed platforms bill you every month or year whether traffic is high or low. The site itself rarely needs that much paid infrastructure."
								],
								[
									"02",
									"Bad traffic still reaches the server",
									"Even on paid hosts, forms get spam, scanners probe for openings, and AI crawlers hit everything. The free Cloudflare layer can stop most of it before it costs you resources."
								],
								[
									"03",
									"You don’t need the complexity",
									"A typical local-service or company brochure site is perfectly happy as a modern static site on free global hosting. Paying for a full CMS or shared server is often overkill."
								]
							].map(([n, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "border-t border-ink/15 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl text-orange",
										children: n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-semibold",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-muted",
										children: body
									})
								]
							}, n))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "bleed bleed-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/bakery.jpg",
						alt: "A sunlit bakery storefront with a laptop open on the counter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "bleed-copy m-5 max-w-md rounded-3xl bg-paper p-7 text-ink md:m-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-orange uppercase",
								children: "Built for the shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-4xl leading-none",
								children: "The storefront stays. The monthly bill does not."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: "Trades, studios, and local companies. A fast brochure site with a form — not a server you rent forever."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "offers",
					className: "mx-auto max-w-6xl px-5 py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-orange uppercase",
							children: "Two clear options"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4 max-w-3xl",
							children: "Choose the path that fits your situation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg text-muted",
							children: "Most clients now take the full move (zero ongoing hosting cost). The lighter protection-only service remains available if you prefer to keep your current host for now."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-5 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-3xl bg-ink p-8 text-paper md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-orange uppercase",
										children: "Strongest offer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-serif text-4xl md:text-5xl",
										children: "Free hosting + redesign"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-paper/75",
										children: "We rebuild or carefully port your site to a private GitHub repository and deploy it on Cloudflare Pages. You stop paying hosting or website-builder fees forever."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 flex flex-1 flex-col gap-3 text-sm text-paper/85",
										children: [
											"Modern, fast static (or lightly dynamic) site on Cloudflare Pages",
											"Private GitHub repo — you own the code",
											"Full Cloudflare free-plan security, bot controls & Always Online",
											"Custom domain pointed and protected",
											"No monthly hosting or builder subscription after hand-off",
											"Clean hand-off: you keep both the GitHub and Cloudflare accounts"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												className: "mt-0.5 shrink-0 text-orange"
											}), item]
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-8 font-serif text-5xl",
										children: ["From $799 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-base font-medium text-paper/60",
											children: "one-time"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-paper/60",
										children: "Exact scope depends on current site complexity. Most simple service sites land in the $799–$1,499 range."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#process",
										className: "mt-6 inline-flex h-12 items-center justify-center rounded-full bg-orange text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]",
										children: "How the move works"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-3xl border border-line bg-card p-8 md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-orange uppercase",
										children: "Keep current host"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-serif text-4xl md:text-5xl",
										children: "Cloudflare protection only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-muted",
										children: "We leave your existing site and host exactly where they are. We only add a properly configured Cloudflare layer in front for filtering and resilience."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 flex flex-1 flex-col gap-3 text-sm text-muted",
										children: [
											"Custom security rules, rate limiting, response rules",
											"Bot Fight Mode + AI crawler controls",
											"Always Online and basic caching",
											"Security headers and cleanup",
											"Everything under your own Cloudflare account",
											"No redesign, no host change"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												className: "mt-0.5 shrink-0 text-orange"
											}), item]
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-8 font-serif text-5xl text-ink",
										children: ["$249 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-base font-medium text-muted",
											children: "one-time"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: "Optional $19/mo monitoring available after setup."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#setup",
										className: "mt-6 inline-flex h-12 items-center justify-center rounded-full border border-line text-sm font-semibold transition-transform duration-150 ease-out hover:border-ink/30 active:scale-[0.96]",
										children: "What we configure"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3",
							children: [
								[
									"Typical builder",
									"$29",
									"/mo, every month"
								],
								[
									"Three years of that",
									"$1,044",
									"before you change a thing"
								],
								[
									"After HostCut",
									"$0",
									"/mo hosting, once the move is done"
								]
							].map(([k, n, s]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card px-6 py-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-muted uppercase",
										children: k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-5xl",
										children: n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: s
									})
								]
							}, k))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "bleed bleed-side",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/fiber.jpg",
						alt: "A molten orange ribbon of light cutting through dark glass fibers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bleed-copy max-w-3xl px-6 py-24 md:px-16 md:py-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-orange uppercase",
								children: "The cut"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-lg mt-4 text-paper",
								children: [
									"Same edge network.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-orange",
										children: "None of the rent."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg text-paper/80",
								children: "Your site is files, served from Cloudflare’s network. Not a shared server with a subscription attached."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "setup",
					className: "mx-auto max-w-6xl px-5 py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-orange uppercase",
							children: "What you actually get"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4 max-w-3xl",
							children: "Protection is included either way. Free hosting is the real upgrade."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg text-muted",
							children: "Whether you take the full move or just the protection layer, the Cloudflare free plan is configured properly — not left on defaults."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
							children: SETUP.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-3xl border border-line bg-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 place-items-center rounded-2xl bg-orange/10 text-orange",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { size: 20 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-lg font-semibold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: item.body
									})
								]
							}, item.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "process",
					className: "bg-ink py-24 text-paper md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-orange uppercase",
								children: "How the full move works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-4 max-w-3xl",
								children: "Four clear steps. You keep ownership the entire time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-lg text-paper/70",
								children: "The goal is a clean hand-off so you never depend on us for day-to-day operation of the site."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-14 grid gap-8 md:grid-cols-4",
								children: [
									["Review & scope", "We look at your current site, forms, and any special requirements. You get a fixed quote for the redesign or careful port."],
									["Rebuild on GitHub", "We create a private repository under your GitHub account (or transfer it to you) and build a modern, fast version of the site."],
									["Deploy to Cloudflare Pages", "The site goes live on Cloudflare Pages. We connect your domain, enable the free security layer, and apply the full rule set."],
									["Hand-off & cancel old host", "You confirm everything works. Then you can cancel the old Squarespace, Wix, WordPress, or shared-hosting subscription. You keep both accounts."]
								].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t border-paper/15 pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-3xl text-orange",
											children: String(i + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-lg font-semibold",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-paper/65",
											children: body
										})
									]
								}, title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-10 rounded-3xl bg-paper/10 px-6 py-5 text-sm leading-relaxed text-paper/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-paper",
									children: "Protection-only path:"
								}), " If you prefer to stay on your current host, the process is simpler — create a free Cloudflare account, invite us, we update DNS and apply the security configuration, then hand everything back to you."]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "faq",
					className: "mx-auto max-w-3xl px-5 py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-orange uppercase",
							children: "Common questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "Straightforward answers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted",
							children: "These are the questions that come up most often before someone decides to move."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 border-t border-line",
							children: FAQS.map((item, i) => {
								const isOpen = faq === i;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold",
										"aria-expanded": isOpen,
										onClick: () => setFaq(isOpen ? null : i),
										children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: isOpen ? "grid size-8 shrink-0 rotate-45 place-items-center rounded-full border border-line transition-transform duration-200" : "grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-200",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: isOpen ? "faq-a open" : "faq-a",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pb-6 text-muted",
											children: item.a
										}) })
									})]
								}, item.q);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "bleed bleed-bottom min-h-[80vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/city.jpg",
						alt: "A coastal city at night, street grids glowing like a network"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bleed-copy mx-auto w-full max-w-3xl px-6 py-24 text-center md:py-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-lg text-paper",
								children: [
									"Ditch the hosting fees.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Keep the protection."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-xl text-lg text-paper/80",
								children: "Most clients now choose the full move to Cloudflare Pages because the math is simple: one-time project cost versus years of monthly fees."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#offers",
								className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-orange px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]",
								children: ["Compare the two options", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-paper/60",
								children: "Reply to the message you received, or reach out, and we can look at your company and current setup."
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "border-t border-paper/10 bg-ink text-paper/70",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-lg bg-paper text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "HostCut" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Free Cloudflare hosting + protection for small business sites"
				})]
			})
		})
	] });
}
function CloudMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "18",
		height: "18",
		viewBox: "0 0 24 24",
		className: "mt-0.5 shrink-0 text-orange",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.6A3.5 3.5 0 0 0 7 18Z" })
	});
}
var SplitComponent = Landing;
//#endregion
export { SplitComponent as component };
