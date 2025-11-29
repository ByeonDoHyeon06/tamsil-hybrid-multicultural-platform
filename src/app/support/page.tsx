"use client";
// app/support/page.tsx
export default function SupportPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">
                    참여 · 후원 · 자원봉사
                </h1>
                <p className="text-xs text-slate-600">
                    다문화 통합 플랫폼은 다양한 주체의 참여로 완성됩니다. 자원봉사,
                    후원, 전문역량 기부 등의 경로를 예시로 제시합니다.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-3 text-[11px] text-slate-600">
                <SupportCard
                    title="자원봉사 참여"
                    desc="통번역, 학습 멘토링, 행사 운영 등 다양한 봉사 활동에 참여할 수 있습니다."
                    points={["통번역 봉사", "학습/진로 멘토링", "행사 운영 지원"]}
                />
                <SupportCard
                    title="후원 · 기부"
                    desc="프로그램 운영, 교재 제작, 취약계층 지원을 위한 후원 구조를 설계할 수 있습니다."
                    points={["정기 후원", "특정 프로그램 지정 후원", "물품 후원"]}
                />
                <SupportCard
                    title="전문역량 기부"
                    desc="법률, 의료, 교육, IT 등 전문성을 가진 분들의 참여를 연계합니다."
                    points={["전문 상담", "교육 콘텐츠 제작", "플랫폼 개발·운영 자문"]}
                />
            </section>

            {/* 간단 신청 폼 (예시) */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600">
                <h2 className="mb-2 text-sm font-semibold text-slate-900">
                    참여 의사 남기기
                </h2>
                <p className="mb-3">
                    실제 데이터 전송은 이루어지지 않으며, 어떤 정보가 수집될 수 있는지
                    보여주기 위한 형식입니다.
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid gap-3 md:grid-cols-2"
                >
                    <div className="md:col-span-1">
                        <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                            이름
                        </label>
                        <input
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                            placeholder="이름을 입력하세요"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                            연락처 (이메일 또는 전화)
                        </label>
                        <input
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                            placeholder="예: example@email.com"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                            참여 형태
                        </label>
                        <select className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white">
                            <option>자원봉사</option>
                            <option>후원 · 기부</option>
                            <option>전문역량 기부</option>
                            <option>기타 협력</option>
                        </select>
                    </div>
                    <div className="md:col-span-1">
                        <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                            관심 분야
                        </label>
                        <input
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                            placeholder="예: 한국어 교육, 청소년 멘토링, IT 개발 지원 등"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                            간단한 소개 · 문의내용
                        </label>
                        <textarea
                            className="h-24 w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                            placeholder="자신의 경험, 가능한 시간대, 궁금한 점 등을 자유롭게 작성해 주세요."
                        />
                    </div>
                    <div className="md:col-span-2">
                        <button className="rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-blue-700">
                            참여 의사 보내기
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

function SupportCard({
                         title,
                         desc,
                         points,
                     }: {
    title: string;
    desc: string;
    points: string[];
}) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-4">
            <h2 className="mb-1 text-sm font-semibold text-slate-900">{title}</h2>
            <p className="mb-2 text-[11px] text-slate-600">{desc}</p>
            <ul className="list-disc space-y-1 pl-4 text-[11px] text-slate-600">
                {points.map((p) => (
                    <li key={p}>{p}</li>
                ))}
            </ul>
        </article>
    );
}