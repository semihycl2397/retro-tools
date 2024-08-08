import React, { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/router";
import MainLayout from "@/components/organisms/layout/layout";
import RoomList from "@/components/organisms/roomList/roomList";

const IndexPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  if (!user) {
    return null;
  }

  return (
    <MainLayout user={user} collapsed={collapsed} toggleSidebar={toggleSidebar}>
      <RoomList />
    </MainLayout>
  );
};

export default IndexPage;