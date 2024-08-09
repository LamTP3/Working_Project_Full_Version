import { useParams } from "react-router-dom";
import { CollapseComponent } from "../../components";
import {
  BasicInformation,
  ProjectDetail,
  Link,
  TokenInformation,
  Capital,
  PublicTokenSale,
  StatusOfPartnership,
} from "./Section";
import { getProductById } from "../../service/service";
import { useEffect, useState } from "react";
import { Project } from "../../type/type";

function DetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductById(id);
      setProject(response);
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
          child={<ProjectDetail data={project?.project_detail} />}
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

export default DetailPage;
