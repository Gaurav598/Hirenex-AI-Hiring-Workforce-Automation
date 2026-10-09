import { PageHeader, Panel } from "@/components/page-shell";

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Workforce design concept"
        title="Attendance without smartphones"
        description="If smartphones and apps do not exist — but LLMs, telephony, landlines, RFID, and SMS do — how would HR track 1,000 people across 100 locations every day?"
      />

      <Panel title="Operating model">
        <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
          <p>
            <strong className="text-teal-800">One shared landline per site</strong>. Workers use the site phone or RFID
            badge. The current prototype records PIN-based check-ins through the web API; a deployed landline IVR still needs a telephony provider.
          </p>
          <p>
            <strong className="text-teal-800">Primary:</strong> landline ↔ Voice AI.{" "}
            <strong className="text-teal-800">Secondary:</strong> RFID gate.{" "}
            <strong className="text-teal-800">Tertiary:</strong> supervisor SMS.{" "}
            <strong className="text-teal-800">Quaternary:</strong> USSD on feature phones.
          </p>
          <p>
            The seeded model has 100 sites and 1,000 synthetic workers. Voice check-in requires a configured Hunar account.
            The other channels below are design proposals.
          </p>
        </div>
      </Panel>

      <Panel title="Workflow">
        <pre className="overflow-auto rounded-xl border border-border bg-slate-50 p-4 font-mono text-xs leading-6 text-slate-700 sm:text-sm">{`Worker arrives
  → RFID badge OR shared landline / IVR
  → proposed telephony/RFID adapter verifies worker identity
  → ledger updates present / late / leave
  → control tower shows missing by site
  → optional supervisor follow-up integration
  → future payroll export`}</pre>
      </Panel>
    </div>
  );
}
