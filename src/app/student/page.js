import Dashboard from "../../components/student/dashboard/Dashboard";
import DashboardLayout from "../../components/layout/StudentLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <Dashboard />
      </div>
    </DashboardLayout>
  );
}
