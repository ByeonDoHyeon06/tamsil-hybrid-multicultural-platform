// app/programs/page.tsx
import Link from "next/link";

export default function ProgramsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">
                    프로그램 구성
                </h1>
                <p className="text-xs text-slate-600">
                    온라인 · 오프라인 · 하이브리드 프로그램을 한눈에 볼 수 있는 개요
                    페이지입니다.
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
                <ProgramCard
                    title="온라인 프로그램"
                    desc="다국어 포털, 온라인 교육, 비대면 상담 등 비대면 중심 서비스"
                    href="/programs/online"
                    chips={["온라인 교육", "화상 상담", "모바일 알림"]}
                />
                <ProgramCard
                    title="오프라인 프로그램"
                    desc="지역 다문화 센터에서 진행되는 교류 행사, 교육, 상담"
                    href="/programs/offline"
                    chips={["센터 활동", "문화 교류", "현장 상담"]}
                />
                <ProgramCard
                    title="하이브리드 프로그램"
                    desc="온라인 신청·교육과 오프라인 참여가 결합된 통합형 프로그램"
                    href="/programs/hybrid"
                    chips={["사전 온라인 교육", "현장 참여", "라이브 연계"]}
                />
            </div>
        </div>
    );
}

function ProgramCard({
                         title,
                         desc,
                         href,
                         chips,
                     }: {
    title: string;
    desc: string;
    href: string;
    chips: string[];
}) {
    return (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600">
            <h2 className="mb-1 text-sm font-semibold text-slate-900">{title}</h2>
            <p className="mb-3">{desc}</p>
            <div className="mb-3 flex flex-wrap gap-1.5">
                {chips.map((c) => (
                    <span
                        key={c}
                        className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700"
                    >
            {c}
          </span>
                ))}
            </div>
            <Link
                href={href}
                className="mt-auto text-[11px] font-medium text-blue-600 hover:underline"
            >
                세부 프로그램 보기 →
            </Link>
        </div>
    );
}
