import { useParams } from "react-router-dom";
import CollapseComponent from "../../../components/CommonPageSection/Collapse/CollapseComponent";
import BasicInformation from "./Section/BasicInformation";
import ProjectDetails from "./Section/ProjectDetail";
import Link from "./Section/Link";
import TokenInformation from "./Section/TokenInformation";
import Capital from "./Section/Capital";
import PublicTokenSale from "./Section/PublicTokenSale";
import StatusOfPartnership from "./Section/StatusOfPartnership";
import { getProductById } from "../../../service/service";
import { useEffect, useState } from "react";
import { Project } from "../../../type/type";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProject(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="lg:mx-[200px] my-[50px] mx-[50px]">
      <div className="mt-5">
        <CollapseComponent
          title="Basic Information"
          child={<BasicInformation data={project?.basic_information} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Project Details"
          child={<ProjectDetails data={project?.project_detail} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Links"
          child={<Link data={project?.links} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Token Information"
          child={<TokenInformation data={project?.token_information} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Capital"
          child={<Capital data={project?.capital} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Public Token Sale"
          child={<PublicTokenSale data={project?.public_token_sale} />}
          active={true}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Status of Partnerships"
          child={<StatusOfPartnership data={project?.status_of_partnerships} />}
          active={true}
        />
      </div>
    </div>
  );
}

export default ProjectDetail;
