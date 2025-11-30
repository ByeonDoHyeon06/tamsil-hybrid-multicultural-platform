"use client";
// app/contact/page.tsx
import {FormEvent} from "react";

const FAQ = [
    {
        q: "온라인과 오프라인 정보는 어떻게 연계되나요?",
        a: "사용자 계정과 프로그램·행사 ID를 기준으로, 온라인 신청부터 오프라인 참여, 피드백까지 하나의 흐름으로 관리하는 구조를 가정합니다.",
    },
    {
        q: "다국어 지원은 어떤 방식으로 설계할 수 있나요?",
        a: "포털 UI 다국어 지원, 다국어 자료실, 통번역 인력 매칭 기능 등으로 확장할 수 있습니다.",
    },
];

export default function ContactPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">문의 · 연락처</h1>
                <p className="text-xs text-slate-600">
                    실제 운영 기관이 아닌, 과제 및 기획을 위한 예시 페이지입니다. 아래
                    정보는 플랫폼 설계 시 고려할 수 있는 항목들입니다.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-[1.3fr,1fr] text-[11px] text-slate-600">
                {/* 연락처 / 위치 정보 예시 */}
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="text-sm font-semibold text-slate-900">
                        운영 기관
                    </h2>
                    <div>
                        <div className="text-[10px] font-semibold text-slate-700">
                            기관명
                        </div>
                        <div>하이브리드 다문화 통합 플랫폼 추진단 (가상)</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-semibold text-slate-700">
                            이메일
                        </div>
                        <div>contact@multihybrid.example</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-semibold text-slate-700">
                            전화번호
                        </div>
                        <div>02-000-0000</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-semibold text-slate-700">
                            주소
                        </div>
                        <div>서울특별시 ○○구 △△로 00, 다문화센터 통합지원동</div>
                    </div>
                    <p className="text-[10px] text-slate-500">
                        ※ 실제 주소·연락처가 아니며, 기획서/과제에서 사용할 수 있는
                        구조 예시입니다.
                    </p>
                </div>

                {/* 문의 폼 (예시) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h2 className="mb-2 text-sm font-semibold text-slate-900">
                        문의 남기기
                    </h2>
                    <form
                        onSubmit={(e:FormEvent<HTMLFormElement>) => e.preventDefault()}
                        className="space-y-2 text-[11px]"
                    >
                        <div>
                            <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                                이름
                            </label>
                            <input
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                                placeholder="이름을 입력하세요"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                                이메일
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                                placeholder="연락 가능한 이메일"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                                문의 유형
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white">
                                <option>플랫폼 기획 관련</option>
                                <option>프로그램 구성 관련</option>
                                <option>온·오프라인 연계 구조 관련</option>
                                <option>기타</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                                내용
                            </label>
                            <textarea
                                className="h-24 w-full rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] outline-none focus:border-blue-500 focus:bg-white"
                                placeholder="문의하고 싶은 내용을 작성해 주세요."
                            />
                        </div>
                        <button className="mt-1 rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-blue-700">
                            문의 보내기
                        </button>
                    </form>
                </div>
            </section>

            {/* FAQ */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600">
                <h2 className="mb-2 text-sm font-semibold text-slate-900">
                    자주 묻는 질문 (FAQ)
                </h2>
                <ul className="space-y-2">
                    {FAQ.map((item) => (
                        <li key={item.q}>
                            <div className="mb-0.5 font-semibold text-slate-800">
                                Q. {item.q}
                            </div>
                            <div className="text-slate-600">A. {item.a}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}