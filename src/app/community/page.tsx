// app/community/page.tsx
import Link from "next/link";

const STORIES = [
    {
        id: 1,
        title: "한국에서의 첫 학부모 상담, 혼자가 아니었어요",
        author: "A씨 (베트남)",
        category: "학교·교육",
        excerpt:
            "아이의 학교 생활이 걱정됐지만, 통번역 봉사자와 함께 학부모 상담을 무사히 마칠 수 있었습니다.",
    },
    {
        id: 2,
        title: "온라인 한국어 수업 덕분에 매장 운영에 자신이 생겼어요",
        author: "B씨 (중국)",
        category: "언어·일상",
        excerpt:
            "손님을 맞이할 때 말이 막혀 어려웠는데, 야간 온라인 수업으로 ‘장사 한국어’를 꾸준히 연습했습니다.",
    },
    {
        id: 3,
        title: "아이와 함께 다문화 축제에 참여한 날",
        author: "C씨 (우즈베키스탄)",
        category: "문화 교류",
        excerpt:
            "온라인 신청으로 가볍게 시작한 참여가, 동네 사람들과의 첫 만남으로 이어졌습니다.",
    },
];

export default function CommunityPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-xl font-semibold text-slate-900">커뮤니티</h1>
                <p className="text-xs text-slate-600">
                    다문화 가정, 이주민, 지역 주민, 자원봉사자가 함께 경험을 나누는
                    공간입니다.
                </p>
            </header>

            {/* 상단 구분 카드 */}
            <section className="grid gap-4 md:grid-cols-3">
                <CommunityCard
                    title="스토리 · 후기"
                    desc="다문화 가정과 지역 주민의 경험을 나누는 공간입니다."
                    pills={["생활 이야기", "교육/학교", "가족·양육"]}
                />
                <CommunityCard
                    title="정보 나눔"
                    desc="생활 정보, 정책 소식, 행사 후기 등을 공유합니다."
                    pills={["정책 소식", "센터 공지", "행사 후기"]}
                />
                <CommunityCard
                    title="참여 커뮤니티"
                    desc="언어·문화 소모임, 자조모임 등 소규모 커뮤니티 활동입니다."
                    pills={["언어교환", "취미 모임", "부모 모임"]}
                />
            </section>

            {/* 최근 스토리 리스트 */}
            <section className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-slate-900">
                        커뮤니티 스토리
                    </h2>
                    <Link
                        href="/community/events"
                        className="text-[11px] text-blue-600 hover:underline"
                    >
                        온·오프라인 행사 보러가기 →
                    </Link>
                </div>

                <ul className="space-y-3 text-[11px] text-slate-600">
                    {STORIES.map((story) => (
                        <li
                            key={story.id}
                            className="rounded-2xl border border-slate-200 bg-white p-4"
                        >
                            <div className="mb-1 flex items-center justify-between gap-2">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    {story.title}
                                </h3>
                                <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                  {story.category}
                </span>
                            </div>
                            <p className="mb-1 text-[10px] text-slate-500">{story.author}</p>
                            <p>{story.excerpt}</p>
                        </li>
                    ))}
                </ul>

                <p className="text-[10px] text-slate-500">
                    ※ 실제 게시판 기능은 구현되어 있지 않으며, 플랫폼 커뮤니티 구성을
                    설명하기 위한 예시 화면입니다.
                </p>
            </section>
        </div>
    );
}

function CommunityCard({
                           title,
                           desc,
                           pills,
                       }: {
    title: string;
    desc: string;
    pills: string[];
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-[11px] text-slate-600">
            <h2 className="mb-1 text-sm font-semibold text-slate-900">{title}</h2>
            <p className="mb-2">{desc}</p>
            <div className="flex flex-wrap gap-1.5">
                {pills.map((pill) => (
                    <span
                        key={pill}
                        className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700"
                    >
            {pill}
          </span>
                ))}
            </div>
        </div>
    );
}