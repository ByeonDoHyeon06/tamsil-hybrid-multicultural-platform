// app/programs/offline/page.tsx
export default function OfflineProgramsPage() {
    return (
        <div className="space-y-4 text-[11px] text-slate-600">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">오프라인 프로그램</h1>
                <p className="text-xs text-slate-600">
                    지역 다문화 센터와 연계된 현장 중심 프로그램입니다.
                </p>
            </header>

            <ul className="grid gap-3 md:grid-cols-2">
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        지역 센터 문화교류 데이
                    </h2>
                    <p>음식, 공연, 체험 등을 통한 상호 문화 이해 프로그램.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        현장 상담 & 통번역 지원
                    </h2>
                    <p>센터 방문형 상담, 통번역 인력 매칭.</p>
                </li>
            </ul>
        </div>
    );
}