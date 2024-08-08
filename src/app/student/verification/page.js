import DashboardLayout from "../../../components/layout/StudentLayout";
import VerifyDocument from "../../../components/student/verification/VerifyDocument";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <VerifyDocument />
      </div>
    </DashboardLayout>
  );
}
