// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "하이브리드 다문화 통합 플랫폼",
    description: "온·오프라인이 연계된 하이브리드 다문화 통합 플랫폼",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className="bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
                    {/* 로고 / 타이틀 */}
                    <div className="flex items-center gap-3">
                        <img src={"tuk.png"} className="h-8 w-8 rounded-full" />
                        <div>
                            <div className="text-sm font-semibold">
                                하이브리드 다문화 통합 플랫폼
                            </div>
                            <div className="text-[11px] text-slate-500">
                                Online × Offline Integration
                            </div>
                        </div>
                    </div>

                    {/* 네비게이션 */}
                    <nav className="hidden gap-4 text-xs text-slate-600 sm:flex">
                        <a href="/" className="hover:text-blue-600">
                            홈
                        </a>
                        <a href="/about" className="hover:text-blue-600">
                            플랫폼 소개
                        </a>
                        <a href="/programs" className="hover:text-blue-600">
                            프로그램
                        </a>
                        <a href="/community" className="hover:text-blue-600">
                            커뮤니티
                        </a>
                        <a href="/resources" className="hover:text-blue-600">
                            자료실
                        </a>
                        <a href="/support" className="hover:text-blue-600">
                            참여 · 후원
                        </a>
                        <a href="/contact" className="hover:text-blue-600">
                            문의
                        </a>
                    </nav>
                </div>
            </header>

            <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-10 pt-6">
                {children}
            </main>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <div>© {new Date().getFullYear()} 다문화 통합 플랫폼</div>
                    <div className="flex flex-wrap gap-3">
                        <span>온·오프라인 연계</span>
                        <span>다국어 지원</span>
                        <span>지역 거점 기반</span>
                    </div>
                </div>
            </footer>
        </div>
        </body>
        </html>
    );
}