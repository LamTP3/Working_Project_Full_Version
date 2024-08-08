import { LogoComp } from "../../../../components";
const HeaderPage = () => {
  return (
    <div className="sticky-header">
      <div className="text-white">
        <div className="mb-[30px]">
          <LogoComp size="large" />
        </div>
        <div className="mb-[30px]">
          <h1 className="font-bold text-4xl">IDO Application Form</h1>
        </div>
        <div>
          <p>
            <strong>Important: </strong>GalaxyPad would never request any funds
            upfront. Please verify all email communication as @galaxypad.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
