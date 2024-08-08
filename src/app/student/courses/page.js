import DashboardLayout from "../../../components/layout/StudentLayout";
import MyCourses from "../../../components/student/courses/MyCourses";
import 'leaflet/dist/leaflet.css';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <MyCourses/>
      </div>
    </DashboardLayout>
  );
}
