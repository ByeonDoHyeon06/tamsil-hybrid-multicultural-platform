// app/community/events/page.tsx
type EventType = "온라인" | "오프라인" | "하이브리드";

interface EventItem {
    id: number;
    title: string;
    type: EventType;
    date: string;
    time: string;
    place: string;
    description: string;
}

const EVENTS: EventItem[] = [
    {
        id: 1,
        title: "다문화 가족 봄맞이 문화 축제",
        type: "오프라인",
        date: "2025-04-20",
        time: "14:00 ~ 17:00",
        place: "○○시 다문화가족지원센터",
        description:
            "전통 음식, 공연, 체험 부스를 통해 다양한 문화를 나누는 교류 행사입니다.",
    },
    {
        id: 2,
        title: "온라인 다문화 이해 교육 (Live)",
        type: "온라인",
        date: "2025-05-05",
        time: "19:30 ~ 21:00",
        place: "플랫폼 라이브 스트리밍",
        description:
            "교사·행정 담당자·시민을 대상으로 하는 실시간 온라인 교육 프로그램입니다.",
    },
    {
        id: 3,
        title: "사전 온라인 교육 + 오프라인 진로·진학 캠프",
        type: "하이브리드",
        date: "2025-06-01",
        time: "10:00 ~ 16:00",
        place: "온라인 교육 + △△청소년수련원",
        description:
            "온라인으로 기본 교육을 이수한 뒤, 오프라인 캠프에서 심화 프로그램에 참여합니다.",
    },
];

export default function EventsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">
                    온·오프라인 행사
                </h1>
                <p className="text-xs text-slate-600">
                    다문화 관련 온·오프라인 및 하이브리드 행사를 한 곳에서 관리하고
                    안내하는 페이지 예시입니다.
                </p>
            </header>

            <section className="space-y-3 text-[11px] text-slate-600">
                {EVENTS.map((ev) => (
                    <article
                        key={ev.id}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                        <div className="mb-1 flex items-center justify-between gap-2">
                            <h2 className="text-sm font-semibold text-slate-900">
                                {ev.title}
                            </h2>
                            <EventTypeBadge type={ev.type} />
                        </div>
                        <div className="mb-2 flex flex-wrap gap-3 text-[10px] text-slate-500">
              <span>
                <span className="font-semibold">일시</span> {ev.date}{" "}
                  ({ev.time})
              </span>
                            <span>
                <span className="font-semibold">장소</span> {ev.place}
              </span>
                        </div>
                        <p className="mb-2">{ev.description}</p>
                        <button className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[10px] font-medium text-slate-700 hover:border-slate-400">
                            온라인 신청 / 참여 안내
                        </button>
                    </article>
                ))}

                <p className="text-[10px] text-slate-500">
                    ※ 실제 신청 기능은 구현되어 있지 않으며, 온·오프라인·하이브리드
                    이벤트를 통합 관리하는 화면 구성을 보여주기 위한 데모입니다.
                </p>
            </section>
        </div>
    );
}

function EventTypeBadge({ type }: { type: EventType }) {
    const base = "rounded-full px-2 py-0.5 text-[10px] font-medium";
    if (type === "온라인") {
        return (
            <span className={`${base} bg-sky-100 text-sky-700`}>온라인</span>
        );
    }
    if (type === "오프라인") {
        return (
            <span className={`${base} bg-emerald-100 text-emerald-700`}>
        오프라인
      </span>
        );
    }
    return (
        <span className={`${base} bg-amber-100 text-amber-700`}>
      하이브리드
    </span>
    );
}