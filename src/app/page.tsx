// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
      <div className="flex flex-col gap-10">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[3fr,2.2fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              온·오프라인이 연계된 하이브리드 다문화 통합 플랫폼
            </div>

            <h1 className="mb-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              다문화 가족과 지역 사회를{" "}
              <span className="text-blue-600">하나의 경험</span>으로 연결합니다.
            </h1>

            <p className="mb-5 text-sm text-slate-600">
              온라인 포털, 모바일 서비스, 지역 거점 센터를 통합하여
              다문화 가정·외국인 주민·행정 담당자·NGO가 함께 소통하고
              참여하는 하이브리드 플랫폼의 개념을 시각화한 사이트입니다.
            </p>

            <div className="mb-4 flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">
              온라인 상담 · 교육
            </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
              지역 센터 연계
            </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
              온/오프라인 통합 행사
            </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs">
              <Link
                  href="/programs"
                  className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                프로그램 구성 보기
              </Link>
              <Link
                  href="/community/events"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 hover:border-slate-400"
              >
                온·오프라인 행사 흐름 보기
              </Link>
            </div>
          </div>

          {/* 오른쪽: 구조 다이어그램 느낌 카드 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold text-slate-800">
              하이브리드 구조 개요
            </h2>

            <div className="space-y-3 text-[11px] text-slate-600">
              {/* 상단: 온라인 채널 */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-3">
                <div className="mb-1 text-xs font-semibold text-blue-700">
                  온라인 채널
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>다국어 포털</Badge>
                  <Badge>온라인 한국어 교육</Badge>
                  <Badge>화상 상담</Badge>
                  <Badge>모바일 알림</Badge>
                </div>
              </div>

              {/* 가운데: 브리지 */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700">
                온·오프라인 연계(Bridge)
              </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* 하단: 오프라인 채널 */}
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
                <div className="mb-1 text-xs font-semibold text-emerald-700">
                  오프라인 채널
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>지역 다문화 센터</Badge>
                  <Badge>문화 교류 행사</Badge>
                  <Badge>상담 · 통번역 지원</Badge>
                </div>
              </div>

              {/* 설명 */}
              <p className="mt-2 text-[11px] text-slate-500">
                온라인에서 사전 정보 제공·예약·알림을 제공하고,
                오프라인 센터에서 실제 만남과 프로그램이 진행되며, 모든
                데이터는 통합 플랫폼에서 관리됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3개 기둥 섹션 */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              세 가지 축으로 보는 플랫폼 구조
            </h2>
            <p className="text-xs text-slate-600">
              온라인 · 오프라인 · 하이브리드 세 관점에서 서비스와 데이터를
              통합합니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <HomePillarCard
                title="온라인 지원"
                color="blue"
                items={[
                  "다국어 포털 및 모바일 앱",
                  "온라인 한국어 · 생활 정보 교육",
                  "비대면 상담/채팅 지원",
                ]}
                link="/programs/online"
            />
            <HomePillarCard
                title="오프라인 거점"
                color="emerald"
                items={[
                  "지역 다문화 센터 네트워크",
                  "문화 교류 행사 및 소모임",
                  "현장 상담 및 통번역 지원",
                ]}
                link="/programs/offline"
            />
            <HomePillarCard
                title="하이브리드 연계"
                color="amber"
                items={[
                  "온라인 신청 → 오프라인 참여",
                  "행사 생중계 및 다시보기",
                  "통합 데이터 기반 정책/운영",
                ]}
                link="/programs/hybrid"
            />
          </div>
        </section>

        {/* 간단 프리뷰 섹션들 */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                다가오는 온·오프라인 행사
              </h3>
              <Link
                  href="/community/events"
                  className="text-[11px] text-blue-600 hover:underline"
              >
                전체 보기
              </Link>
            </div>
            <ul className="space-y-2 text-[11px] text-slate-600">
              <EventRow
                  title="다문화 가족 봄맞이 문화 축제"
                  type="오프라인"
                  place="○○시 다문화센터"
              />
              <EventRow
                  title="온라인 다문화 이해 교육 (Live)"
                  type="온라인"
                  place="플랫폼 내 라이브 스트리밍"
              />
              <EventRow
                  title="사전 온라인 교육 + 오프라인 캡스톤 모임"
                  type="하이브리드"
                  place="온라인 + 지역 소모임 공간"
              />
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                주요 이해관계자 관점
              </h3>
              <Link
                  href="/about"
                  className="text-[11px] text-blue-600 hover:underline"
              >
                플랫폼 소개
              </Link>
            </div>
            <ul className="space-y-2 text-[11px] text-slate-600">
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                <div>
                  <strong className="font-semibold">다문화 가정 / 이주민</strong>
                  <div className="text-slate-500">
                    생활 정보, 언어 교육, 지역 연결을 한 곳에서 제공
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div>
                  <strong className="font-semibold">
                    행정 · 지자체 · 학교/기관
                  </strong>
                  <div className="text-slate-500">
                    통합된 참여 데이터로 정책/지원 사업 설계·평가 가능
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                <div>
                  <strong className="font-semibold">NGO · 시민단체</strong>
                  <div className="text-slate-500">
                    온라인 캠페인과 오프라인 활동을 연계한 참여 확장
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
      <span className="rounded-full bg-white/80 px-2 py-0.5 text-[11px] text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function HomePillarCard({
                          title,
                          color,
                          items,
                          link,
                        }: {
  title: string;
  color: "blue" | "emerald" | "amber";
  items: string[];
  link: string;
}) {
  const colorBar =
      color === "blue"
          ? "bg-blue-500"
          : color === "emerald"
              ? "bg-emerald-500"
              : "bg-amber-500";

  return (
      <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <div className={`h-1.5 w-10 rounded-full ${colorBar}`} />
        </div>
        <ul className="mt-3 flex-1 space-y-1.5 text-[11px] text-slate-600">
          {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[5px] h-1 w-1 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
          ))}
        </ul>
        <Link
            href={link}
            className="mt-3 text-[11px] font-medium text-blue-600 hover:underline"
        >
          자세히 보기 →
        </Link>
      </div>
  );
}

function EventRow({
                    title,
                    type,
                    place,
                  }: {
  title: string;
  type: "온라인" | "오프라인" | "하이브리드";
  place: string;
}) {
  const typeColor =
      type === "온라인"
          ? "bg-sky-100 text-sky-700"
          : type === "오프라인"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700";
  return (
      <li className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
        <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold text-slate-800">
          {title}
        </span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] ${typeColor}`}>
          {type}
        </span>
        </div>
        <span className="text-[10px] text-slate-500">{place}</span>
      </li>
  );
}