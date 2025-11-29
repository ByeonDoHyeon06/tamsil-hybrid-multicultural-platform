// app/programs/online/page.tsx
export default function OnlineProgramsPage() {
    return (
        <div className="space-y-4 text-[11px] text-slate-600">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">온라인 프로그램</h1>
                <p className="text-xs text-slate-600">
                    다국어 온라인 포털, 한국어 교육, 비대면 상담 등 플랫폼의 온라인 서비스를 설명합니다.
                </p>
            </header>

            <ul className="grid gap-3 md:grid-cols-2">
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        온라인 한국어 · 생활정보 클래스
                    </h2>
                    <p>ZOOM/웹 기반 실시간 강의 및 녹화 제공.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        화상 상담 & 채팅 상담
                    </h2>
                    <p>법률·교육·생활 상담을 온라인으로 예약 및 진행.</p>
                </li>
            </ul>
        </div>
    );
}