// app/about/page.tsx
export default function AboutPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">
                    플랫폼 소개
                </h1>
                <p className="text-xs text-slate-600">
                    온·오프라인을 연결하는 하이브리드 다문화 통합 플랫폼의 목표와 핵심
                    개념을 정리한 페이지입니다.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-3">
                {[
                    {
                        title: "접근성 향상",
                        body: "온라인과 오프라인 채널을 모두 제공하여 시간·공간 제약을 줄이고, 누구나 쉽게 도움에 접근할 수 있도록 합니다.",
                    },
                    {
                        title: "다문화 상호이해",
                        body: "언어·문화 차이를 고려한 콘텐츠와 프로그램으로 상호 이해와 존중을 촉진합니다.",
                    },
                    {
                        title: "데이터 기반 지원",
                        body: "참여 기록과 피드백을 통합 관리하여 지자체와 기관의 정책 수립과 사업 평가에 활용할 수 있습니다.",
                    },
                ].map((card) => (
                    <div
                        key={card.title}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600"
                    >
                        <h2 className="mb-2 text-sm font-semibold text-slate-900">
                            {card.title}
                        </h2>
                        <p>{card.body}</p>
                    </div>
                ))}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600">
                <h2 className="mb-2 text-sm font-semibold text-slate-900">
                    주요 이해관계자
                </h2>
                <ul className="list-disc space-y-1 pl-4">
                    <li>다문화 가정, 외국인 주민, 이주민</li>
                    <li>지자체, 학교, 공공기관 등 행정 담당자</li>
                    <li>NGO, 시민단체, 자원봉사자, 지역 커뮤니티</li>
                </ul>
            </section>
        </div>
    );
}