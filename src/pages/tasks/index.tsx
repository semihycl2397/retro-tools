import Room from "@/components/organisms/room/room";
import { Layout } from "antd";
import React from "react";
import RoomNavbar from "@/components/organisms/room/roomNavbar/roomNavbar";
import RoomFooter from "@/components/organisms/room/roomFooter/roomFooter";
import RoomTask from "@/components/organisms/room/roomTask";
const { Header, Content, Footer } = Layout;

function Index() {
  return (
    <Layout className="layoutRoom">
      <RoomNavbar />
      <Layout>
        <Content className="content">
          <RoomTask></RoomTask>
        </Content>
      </Layout>
      <Footer className="footer">
        © 2024 Reetro | Forever Free Retrospective Tool
      </Footer>
    </Layout>
  );
}

export default Index;