import Certificate from "../../../components/student/certificate/Certificate";
import DashboardLayout from "../../../components/layout/StudentLayout";
import 'leaflet/dist/leaflet.css';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <Certificate />
      </div>
    </DashboardLayout>
  );
}
