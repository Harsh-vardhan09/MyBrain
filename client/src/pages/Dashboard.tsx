import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CreateContentModal from "../components/ui/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/ui/Sidebar";
import UseContent from "../hooks/UseContent";
import axios from "axios";

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh } = UseContent();

  useEffect(() => {
    refresh;
  }, [modelOpen]);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />

        <div className="flex gap-4 justify-end ">
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon size="md" />}
            onClick={() => setModelOpen(true)}
          />
          <Button
            onClick={async() => {
              const res=await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/share`,
                {
                  share:true
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                },
              );
              const shareUrl= `http://localhost:5173${res.data.hash}`
              alert(shareUrl);
            }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon size="md" />}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card link={link} type={type} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 1hr 44 min

export default Dashboard;
