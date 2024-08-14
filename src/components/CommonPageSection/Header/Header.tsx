import "./Header.scss";
import LogoComp from "../Logo/LogoComp";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import { ROUTER } from "../../../helper/contant";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header-container w-full">
      <div className="xl:px-[122px] md:px-[80px] xs-pd-20">
        <div className="header-inner">
          <Link to={ROUTER.HOME} className="header-left cursor-pointer">
            <LogoComp size="medium" />
            <h2 className="header-logo-text">Galaxy Pad</h2>
          </Link>
          <Button
            className="flex self-center bg-transparent border-0 shadow-none block md:hidden text-center"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
          <Drawer
            title="Welcome Admin!"
            width={"60%"}
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col gap-3 h-full text-white">
              <Link className="hover:bg-slate-500 font-medium" to="/list">
                Project List
              </Link>
              <Link className="hover:bg-slate-500 font-medium" to="/">
                SubmitProject
              </Link>
              <Button className="header-logout-btn mt-auto bg-[#191b3c] border-white text-white">
                logout
              </Button>
            </div>
          </Drawer>
          <div className="header-mid flex text-center">
            <Link className="mr-3 cursor-pointer" to={ROUTER.PROJECT_LIST}>
              Projects
            </Link>
            <Link className="ml-3 cursor-pointer" to={ROUTER.SUBMIT_PROJECT}>
              Add Project
            </Link>
          </div>
          <div className="header-right ml-auto">
            <div className="header-welcome">
              <p className="header-text header-text-welcome">Welcome</p>
              <p className="header-text header-text-name"> Admin !</p>
            </div>
            <button className="header-logout-btn">logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
