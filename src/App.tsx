import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ShieldCheck, 
  User, 
  CreditCard, 
  IdCard, 
  Phone,
  Filter, 
  Download,
  AlertCircle,
  CheckCircle2,
  Clock,
  MoreVertical,
  ChevronRight,
  Calendar,
  LogOut
} from 'lucide-react';
import { SAMPLE_DATA, IdentityRecord } from './constants';
import { cn } from './lib/utils';

const StatusBadge = ({ status }: { status: IdentityRecord['status'] }) => {
  const styles = {
    Verified: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Flagged: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const icons = {
    Verified: <CheckCircle2 className="w-3.5 h-3.5 mr-1" />,
    Pending: <Clock className="w-3.5 h-3.5 mr-1" />,
    Flagged: <AlertCircle className="w-3.5 h-3.5 mr-1" />,
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      styles[status]
    )}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<IdentityRecord['status'] | 'All'>('All');

  const filteredData = useMemo(() => {
    return SAMPLE_DATA.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.customerId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.aadhar.includes(searchQuery) ||
        item.pan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery);
      
      const matchesFilter = filterStatus === 'All' || item.status === filterStatus;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterStatus]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative overflow-hidden">
      {/* Google-themed background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.12] z-0">
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-[#4285F4] blur-[140px]"></div>
        <div className="absolute top-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-[#EA4335] blur-[140px]"></div>
        <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-[#FBBC05] blur-[140px]"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-[#34A853] blur-[140px]"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 text-white font-black text-lg italic tracking-tighter select-none overflow-hidden relative">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="bg-[#4285F4]"></div>
                    <div className="bg-[#EA4335]"></div>
                    <div className="bg-[#34A853]"></div>
                    <div className="bg-[#FBBC05]"></div>
                  </div>
                  <span className="relative z-10 drop-shadow-md">IB</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">Insurance Bazaar.com</h1>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Salesmate CRM</p>
                </div>
              </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3 pr-6 border-r border-slate-200">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 leading-none">Agent Vikram</p>
                  <p className="text-[10px] font-medium text-slate-500 mt-1">Sales Representative</p>
                </div>
                <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors group">
                <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Stats / Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Records', value: '20', icon: User, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Verified Identities', value: '15', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Pending Review', value: '3', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                </div>
                <div className={cn("p-3 rounded-xl", stat.bg)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, ID, Aadhaar or PAN or Phone..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
            {['All', 'Verified', 'Pending', 'Flagged'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  filterStatus === status 
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" 
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Table / List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Customer ID</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Identity Holder</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date of Birth</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Aadhaar Number</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">PAN Number</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Mobile Number</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <AnimatePresence mode="popLayout">
                  {filteredData.length > 0 ? (
                    filteredData.map((record, idx) => (
                      <motion.tr 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={record.id} 
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">
                            {record.customerId}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                              {record.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{record.name}</p>
                              <p className="text-xs text-slate-500">{record.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-600">{record.dob}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <IdCard className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-slate-600 tracking-wider">{record.aadhar}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={record.status} />
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Search className="w-8 h-8 text-slate-300" />
                          <p className="text-slate-500 font-medium">No matching records found</p>
                          <button 
                            onClick={() => { setSearchQuery(''); setFilterStatus('All'); }}
                            className="text-sm text-indigo-600 font-semibold hover:underline"
                          >
                            Clear all filters
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          {/* Footer / Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{filteredData.length}</span> of <span className="font-bold text-slate-900">20</span> records
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-xs font-semibold text-slate-400 cursor-not-allowed">Previous</button>
              <button className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-white border border-slate-200 rounded-md shadow-sm">1</button>
              <button className="px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-white hover:border-slate-200 rounded-md transition-all">Next</button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-blue-900">Disclaimer</p>
            <p className="text-xs text-blue-700 leading-relaxed">
              The data displayed above consists of sample names and generated identity numbers for demonstration and testing purposes only. 
              These do not represent actual individuals or official government records. This application is public-facing.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 mt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-slate-900">Insurance Bazaar.com</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 Insurance Bazaar.com. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
