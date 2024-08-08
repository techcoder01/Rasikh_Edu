import OrgLayout from "../../components/layout/OrgLayout";
import OrgDashboard from "../../components/organization/dashboard/Dashboard";

export default function DashboardPage() {
  return (
    <OrgLayout>
      <div>
        <OrgDashboard />
      </div>
    </OrgLayout>
  );
}
