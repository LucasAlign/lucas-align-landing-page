import { CalendarDays, Check, ChevronDown, Church, MessageCircle, Search, Tag } from "lucide-react";
import { EngageIcon } from "./engage-icon";

/** A presentation-only product illustration with fictional church records. */
export function EngageHero() {
  return (
    <figure className="mx-auto w-full max-w-xl" aria-label="Example church directory and relationship record, showing a conversation and an assigned follow-up">
      <div className="relative sm:pb-44 sm:pr-12">
        <div className="overflow-hidden rounded-3xl border border-[#d8cbbb] bg-[#fffefa] shadow-xl shadow-[#29415c]/10">
          <div className="flex items-center gap-2 border-b border-[#e5ddd2] px-5 py-4 text-lg font-bold text-[#17385f]">
            <EngageIcon className="h-7 w-7 text-[#9b5c37]" /> Engage
          </div>
          <div className="px-4 pb-4 pt-5 sm:px-5">
            <p className="mb-4 text-2xl font-bold tracking-tight text-[#17385f]">Church directory</p>
            <div aria-hidden="true" className="mb-5 flex flex-wrap gap-2 text-xs text-[#667386]">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#c8cfd5] px-3 py-2.5"><Search className="h-4 w-4 shrink-0" /> Search churches</div>
              <div className="flex items-center gap-2 rounded-lg border border-[#c8cfd5] px-3 py-2.5">All counties <ChevronDown className="h-3 w-3" /></div>
            </div>
            {[
              ["Grace Community Church", "Franklin County"],
              ["First Baptist Church", "Madison County"],
              ["Hope Fellowship", "Union County"],
            ].map(([name, county], i) => (
              <div key={name} className={`flex items-center gap-3 px-3 py-4 ${i === 0 ? "rounded-xl border-l-[3px] border-[#528bac] bg-[#e6eff4]" : "border-b border-[#eae4db] last:border-0"}`}>
                <Church aria-hidden="true" className="h-7 w-7 shrink-0 text-[#17385f]" strokeWidth={1.5} />
                <div className="min-w-0"><p className="text-sm font-bold leading-snug text-[#17385f]">{name}</p><p className="mt-1 text-xs text-[#667386]">{county}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-4 rounded-3xl border border-[#d8cbbb] bg-[#fffefa] p-5 shadow-xl shadow-[#29415c]/10 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[86%] sm:p-6">
          <div className="flex items-start gap-3 border-b border-[#e5ddd2] pb-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e6eff4] text-[#17385f]"><Church aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} /></div>
            <div className="min-w-0">
              <p className="text-lg font-bold leading-tight tracking-tight text-[#17385f]">Grace Community Church</p>
              <p className="mt-1 text-xs text-[#667386]">Franklin County</p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#e3ecd9] px-2.5 py-1 text-xs font-semibold text-[#45613a]"><Check aria-hidden="true" className="h-3.5 w-3.5" />Active partner</span>
            </div>
          </div>
          <div className="flex items-start gap-3 py-5">
            <MessageCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#7a8290]" />
            <div><p className="text-sm font-bold text-[#17385f]">Latest conversation</p><p className="mt-1 text-sm leading-relaxed text-[#37485c]">Discussed hosting a foster-family night.</p><p className="mt-2 text-xs text-[#667386]">Sarah Mitchell · Oct 28</p></div>
          </div>
          <div className="rounded-2xl border border-[#eae1d4] bg-[#f8f4ec] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b5c37]">Next step</p>
            <p className="mt-1 text-base font-bold text-[#17385f]">Confirm volunteer team</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#516174]">
              <span className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7b9aa9] text-[10px] font-bold text-white">SM</span>Sarah Mitchell</span>
              <span className="flex items-center gap-1.5"><CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />Follow up Nov 6</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#355c62]"><Tag aria-hidden="true" className="mr-1 h-4 w-4 text-[#7a8290]" />{["Giving", "Serving", "Hosting"].map((tag) => <span key={tag} className="rounded-full bg-[#e4eeea] px-3 py-1">{tag}</span>)}</div>
        </div>
      </div>
      <figcaption className="mt-4 text-right text-xs text-[#667386]">Illustrative product view · Sample records</figcaption>
    </figure>
  );
}
