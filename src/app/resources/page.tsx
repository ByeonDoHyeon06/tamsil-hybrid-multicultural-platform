// app/resources/page.tsx
const CATEGORIES = [
    {
        title: "생활 가이드",
        desc: "주거, 의료, 교통, 금융 등 한국 생활에 필요한 기본 정보를 정리한 자료입니다.",
        items: ["생활 안내서", "긴급 연락처", "공공 서비스 이용 가이드"],
    },
    {
        title: "교육 · 학교",
        desc: "학교 제도, 입학 절차, 학부모 상담 준비 등을 돕는 자료입니다.",
        items: ["학교 제도 안내", "학부모 상담 준비 체크리스트", "장학금 정보"],
    },
    {
        title: "법률 · 상담",
        desc: "체류 자격, 노동, 인권 등 법률·상담 관련 기본 정보를 제공합니다.",
        items: ["체류 자격 종류", "근로기준법 기초", "상담기관 연락처"],
    },
    {
        title: "언어 지원",
        desc: "다국어 안내문, 기본 표현 모음집, 통번역 지원 안내 자료입니다.",
        items: ["기본 한국어 표현집", "다국어 안내문 샘플", "통번역 지원 안내"],
    },
];

export default function ResourcesPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">다문화 자료실</h1>
                <p className="text-xs text-slate-600">
                    다문화 가정과 이주민, 그리고 현장에서 함께하는 담당자들을 위한
                    생활·교육·법률·언어 자료 모음입니다. 실제 파일 다운로드 기능 대신,
                    어떤 자료가 제공될 수 있는지 구조를 보여줍니다.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2">
                {CATEGORIES.map((cat) => (
                    <article
                        key={cat.title}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600"
                    >
                        <h2 className="mb-1 text-sm font-semibold text-slate-900">
                            {cat.title}
                        </h2>
                        <p className="mb-2">{cat.desc}</p>
                        <ul className="mb-3 list-disc space-y-1 pl-4">
                            {cat.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <button className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[10px] font-medium text-slate-700 hover:border-slate-400">
                            관련 자료 모아보기
                        </button>
                    </article>
                ))}
            </section>

            <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-[11px] text-slate-600">
                <h2 className="mb-1 text-sm font-semibold text-slate-900">
                    실제 구현 시 확장 아이디어
                </h2>
                <ul className="list-disc space-y-1 pl-4">
                    <li>PDF · 동영상 · 외부 링크 등 자료 유형별 필터 제공</li>
                    <li>언어별(한국어/영어/중국어/베트남어 등) 검색 및 필터링</li>
                    <li>사용자 유형(학부모, 청소년, 행정 담당자 등)에 따른 맞춤 추천</li>
                </ul>
            </section>
        </div>
    );
}