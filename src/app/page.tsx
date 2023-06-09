import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      {/* Sidebar*/}
      <Sidebar />
      {/* Feed*/}
      <Feed />
      {/* Widgets*/}
      {/* Modal*/}
    </div>
  );
}
