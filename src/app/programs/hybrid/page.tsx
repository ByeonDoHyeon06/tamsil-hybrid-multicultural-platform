// app/programs/hybrid/page.tsx
export default function HybridProgramsPage() {
    return (
        <div className="space-y-4 text-[11px] text-slate-600">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">
                    하이브리드 프로그램
                </h1>
                <p className="text-xs text-slate-600">
                    온라인과 오프라인 단계가 결합된 형태의 통합 프로그램입니다.
                </p>
            </header>

            <ul className="space-y-3">
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        온라인 사전 교육 → 오프라인 캠프
                    </h2>
                    <p className="mb-1">
                        온라인으로 기본 교육을 이수한 뒤, 지역 센터에서 오프라인 캠프에 참여.
                    </p>
                    <p>참여 이력은 통합 플랫폼에서 한 번에 관리됩니다.</p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-1 text-sm font-semibold text-slate-900">
                        온·오프라인 병행 축제(라이브 스트리밍)
                    </h2>
                    <p>
                        현장 행사를 라이브로 중계하고, 온라인 참가자도 실시간 채팅과 설문을 통해
                        참여할 수 있도록 구성합니다.
                    </p>
                </li>
            </ul>
        </div>
    );
}