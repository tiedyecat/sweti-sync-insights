// src/app/page.tsx
import { Suspense } from "react"
import { getAccountsByTeamMember, getTimeRangeTotals, getAlerts } from "@/lib/data/dashboardData"
import { FilterBar } from "@/components/dashboard/FilterBar"
import { AccountSummary } from "@/components/dashboard/AccountSummary"
import { WarningPanel } from "@/components/dashboard/WarningPanel"
import { PerformanceTrend } from "@/components/dashboard/PerformanceTrend"
import { GptQueryButtons } from "@/components/dashboard/GptQueryButtons"
import { ChatHistory } from "@/components/dashboard/ChatHistory"
import { Header } from "@/components/layout/Header"
import { TeamFilterProvider } from "@/hooks/useTeamMemberFilter"

function LoadingUI() {
  return (
    <div className="p-4 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sweti-blue border-r-transparent align-[-0.125em]" />
      <p className="mt-2 text-gray-500 dark:text-gray-400">Loading data...</p>
    </div>
  )
}

export default async function Dashboard() {
  // Get all the data for initial render
  const accounts = await getAccountsByTeamMember("all", 7)
  const totals = await getTimeRangeTotals(7)
  const alerts = await getAlerts()
  
  return (
    <TeamFilterProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-sweti-blue dark:text-white">SYNC INSIGHTS</h2>
            <FilterBar />
          </div>
          
          {/* Alerts Panel */}
          <section className="mb-8">
            <Suspense fallback={<LoadingUI />}>
              <WarningPanel />
            </Suspense>
          </section>
          
          {/* Account Summaries */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">📊</span> Account Summaries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={<LoadingUI />}>
                {accounts.slice(0, 6).map(account => (
                  <AccountSummary key={account.id} {...account} />
                ))}
              </Suspense>
            </div>
          </section>
          
          {/* Performance Charts & Chat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Suspense fallback={<LoadingUI />}>
              <PerformanceTrend 
                data={accounts.filter(a => a.business_name === accounts[0]?.business_name)} 
                businessName={accounts[0]?.business_name || "All Accounts"} 
              />
            </Suspense>
            
            <ChatHistory />
          </div>
        </main>
      </div>
    </TeamFilterProvider>
  )
}
