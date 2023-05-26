import Button from "@/components/Button/Button";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <Button size="sm">Hello</Button>
    </div>
  );
};

export default Dashboard;
