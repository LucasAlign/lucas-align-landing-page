import { motion } from "framer-motion";
import { 
  Users, 
  Settings, 
  CheckCircle2, 
  Bell, 
  Search,
  BookOpen,
  GraduationCap
} from "lucide-react";

export function DashboardMockup1() {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 w-[300px] md:w-[350px] overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <Users className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-700">Wraparound</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3 bg-white">
        <div className="flex justify-between items-center mb-1">
          <div className="text-xs text-gray-500 font-medium">Active Families</div>
          <div className="text-xs text-blue-600 font-medium">+12 this week</div>
        </div>
        <div className="flex items-end gap-3 mb-2">
          <div className="text-3xl font-bold text-gray-900 tracking-tight">142</div>
          <div className="h-10 flex-1 flex items-end gap-1 pb-1">
            {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-100 rounded-sm" style={{ height: `${h}%` }}>
                {i === 6 && <div className="w-full h-full bg-blue-600 rounded-sm"></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: "Smith Family Support", status: "Active", color: "bg-green-100 text-green-700" },
            { name: "Johnson Meal Train", status: "Needs Vol.", color: "bg-amber-100 text-amber-700" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <span className="text-xs font-medium text-gray-700">{item.name}</span>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup2() {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 w-[280px] md:w-[320px] overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center">
            <Search className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-700">GrantFlow AI</span>
        </div>
        <Bell className="w-3 h-3 text-gray-400" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3 bg-white">
        <div className="relative">
          <Search className="w-3 h-3 absolute left-2.5 top-2.5 text-gray-400" />
          <div className="h-8 w-full bg-gray-50 border border-gray-200 rounded-md pl-8 pr-3 flex items-center text-xs text-gray-400">
            Search funding opportunities...
          </div>
        </div>
        
        <div className="mt-2 space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 mt-0.5 rounded bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] text-emerald-700 font-bold">AI</span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-lg rounded-tl-none border border-gray-100 text-xs text-gray-600 leading-relaxed">
              I found 3 new community impact grants matching your program criteria. The application deadline for the highest match is in 14 days.
            </div>
          </div>
          
          <div className="flex gap-2 pl-7">
            <div className="bg-white border border-gray-200 shadow-sm rounded px-2.5 py-1.5 flex items-center gap-1.5 cursor-pointer">
              <BookOpen className="w-3 h-3 text-emerald-600" />
              <span className="text-[10px] font-medium text-gray-700">Review Matches</span>
            </div>
            <div className="bg-emerald-600 rounded px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm cursor-pointer">
              <span className="text-[10px] font-medium text-white">Start Draft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup3() {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 w-[260px] md:w-[300px] overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
            <GraduationCap className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-700">AnchorOne</span>
        </div>
        <Settings className="w-3 h-3 text-gray-400" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3 bg-white">
        <div className="flex justify-between items-center mb-1">
          <div className="text-xs text-gray-500 font-medium">Daily Plan</div>
          <div className="text-xs text-indigo-600 font-medium">Oct 24</div>
        </div>
        
        <div className="space-y-2">
          {[
            { subject: "Math - Fractions", time: "9:00 AM", done: true },
            { subject: "History Reading", time: "10:30 AM", done: true },
            { subject: "Science Lab", time: "1:00 PM", done: false },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-2 rounded-lg border ${item.done ? 'bg-gray-50 border-gray-100' : 'bg-white border-indigo-100 shadow-sm'}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${item.done ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'}`}>
                {item.done && <CheckCircle2 className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1">
                <div className={`text-xs font-medium ${item.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{item.subject}</div>
                <div className="text-[10px] text-gray-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent rounded-full blur-3xl opacity-50 -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      {/* Connecting lines SVG */}
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0px 0px 4px rgba(37, 99, 235, 0.2))' }}>
        <motion.path 
          d="M 50 50 Q 25 25 20 40" 
          fill="transparent" 
          stroke="url(#gradient1)" 
          strokeWidth="0.4"
          strokeDasharray="1.5 1.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path 
          d="M 50 50 Q 75 30 80 60" 
          fill="transparent" 
          stroke="url(#gradient2)" 
          strokeWidth="0.4"
          strokeDasharray="1.5 1.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div 
        className="absolute z-10"
        initial={{ y: 20, opacity: 0, rotateX: 5, rotateY: -10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DashboardMockup1 />
      </motion.div>
      
      <motion.div 
        className="absolute top-[10%] left-[-10%] md:left-[5%] z-20"
        initial={{ y: 30, x: -20, opacity: 0 }}
        animate={{ y: [0, -10, 0], x: 0, opacity: 1 }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.2 },
          x: { duration: 0.8, delay: 0.2 }
        }}
      >
        <DashboardMockup2 />
      </motion.div>

      <motion.div 
        className="absolute bottom-[5%] right-[-5%] md:right-[5%] z-30"
        initial={{ y: 40, x: 20, opacity: 0 }}
        animate={{ y: [0, 10, 0], x: 0, opacity: 1 }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 }
        }}
      >
        <DashboardMockup3 />
      </motion.div>
    </div>
  );
}
