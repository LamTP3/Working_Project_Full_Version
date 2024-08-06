import BreadCrumbComp from "../../components/CommonPageSection/BreadCrumb/BreadCrumbComp";
import ModalComponents from "../../components/CommonPageSection/Modal/ModalComponent";
import TextAreaComp from "../../components/CommonInput/InputComp/TextArea/TextAreaComp";
import DatePickerComponent from "../../components/CommonInput/DatePicker/DatePicker";
import ButtonComponent from "../../components/CommonInput/Button/ButtonComponent";
import { ModalName } from "../../components/CommonPageSection/Modal/ModalType";
import LabelComponent from "../../components/CommonInput/Label/LabelComponent";
import { getAllProject, getAllProjectStatus } from "../../service/service";
import SearchComp from "../../components/CommonInput/Search/SearchComp";
import TabsComp from "../../components/CommonPageSection/Tabs/TabsComp";
import LogoComp from "../../components/CommonPageSection/Logo/LogoComp";
import Table from "../../components/CommonPageSection/Table/Table";
import { Project, Project_Status } from "../../type/type";
import { formatPrice } from "../../helper/util";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { MenuProps } from "antd/lib";
import { useFormik } from "formik";
import { Button, Col, Dropdown, Row } from "antd";
import * as Yup from "yup";
import axios from "axios";
import dayjs from "dayjs";
import { ChainIcon, MoreIcon } from "../../Icon";

interface Round {
  startDate: string;
  endDate: string;
}

interface ConfirmFormValues {
  rounds: { startDate: string; endDate: string }[];
}

interface RejectFormValues {
  rejectReason: string;
}

const ProjectListPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const [status, setStatus] = useState<Project_Status[]>([]);
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>("Confirm");
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("1");
  const [rounds, setRounds] = useState<Round[]>([]);
  const navigate = useNavigate();

  const initialValuesReject: RejectFormValues = {
    rejectReason: "",
  };

  const validationSchemaReject = Yup.object({
    rejectReason: Yup.string().required("Reason is required"),
  });

  const formikReject = useFormik({
    initialValues: initialValuesReject,
    validationSchema: validationSchemaReject,
    onSubmit: async (value) => {
      handleOk([], value.rejectReason);
      console.log("Submit value: ", value);
    },
  });

  const initialValuesConfirm: ConfirmFormValues = {
    rounds: rounds.map((round) => ({
      startDate: round.startDate,
      endDate: round.endDate,
    })),
  };

  const validationSchemaConfirm = Yup.object({
    rounds: Yup.array().of(
      Yup.object({
        startDate: Yup.string().required("Start date is required"),
        endDate: Yup.string().required("End date is required"),
      })
    ),
  });

  const formikConfirm = useFormik({
    initialValues: initialValuesConfirm,
    validationSchema: validationSchemaConfirm,
    onSubmit: async (value) => {
      console.log("Submit value: ", value);
      handleOk(value.rounds);
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (selectedProject) {
      const projectRounds = selectedProject.capital.rounds || [];
      setRounds(projectRounds);
    }
  }, [selectedProject]);

  const fetchDataProject = async () => {
    try {
      const dataProject = await getAllProject();
      setData(dataProject.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataProjectStatus = async () => {
    try {
      const dataProjectStatus = await getAllProjectStatus();
      setStatus(dataProjectStatus);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataProject();
    fetchDataProjectStatus();
  }, []);

  const handleOk = async (rounds?: any[], rejectReason?: string) => {
    if (selectedProject) {
      let updatedProject = { ...selectedProject };

      if (modalName === "Confirm" && rounds) {
        updatedProject = {
          ...updatedProject,
          statusId: 1,
          capital: { ...updatedProject.capital, rounds },
        };
      } else if (modalName === "Reject" && rejectReason) {
        updatedProject = {
          ...updatedProject,
          statusId: 2,
          reject_reason: rejectReason,
        };
      } else if (modalName === "Delete") {
        try {
          await axios.delete(
            `http://localhost:9999/Project/${selectedProject.id}`
          );
          fetchDataProject();
          toast.success("Delete Project Success");
          setOpen(false);
          return;
        } catch (error) {
          console.error("Error deleting project:", error);
          return;
        }
      }

      try {
        await axios.put(
          `http://localhost:9999/Project/${selectedProject.id}`,
          updatedProject
        );
        fetchDataProject();
        toast.success(`${modalName} Success`);
      } catch (error) {
        console.error(`Error updating project:`, error);
      }
    }
    setOpen(false);
  };

  const getTitle = () => {
    switch (modalName) {
      case "Confirm":
        return "Confirm Approve";
      case "Reject":
        return "Confirm Reject";
      case "Delete":
        return `Do you want to delete ${selectedProject?.basic_information.project_name}  ?`;
      default:
        return "";
    }
  };

  const getFooter = () => {
    switch (modalName) {
      case "Confirm":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient"
                button_content="Approve"
                arrow_icon={false}
                onClick={() => formikConfirm.handleSubmit()}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      case "Reject":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Reject"
                arrow_icon={false}
                onClick={() => formikReject.handleSubmit()}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      case "Delete":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Delete Project"
                arrow_icon={false}
                onClick={() => handleOk()}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getContent = () => {
    switch (modalName) {
      case "Confirm":
        return (
          <div className="modal-content">
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {selectedProject?.basic_information.project_logo ? (
                        <img
                          src={selectedProject?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                          key={selectedProject?.basic_information.project_logo}
                        />
                      ) : (
                        <LogoComp size="small" key="logo" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {selectedProject?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {selectedProject?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                {formikConfirm?.values?.rounds.map((item, index) => (
                  <Row gutter={[20, 0]} key={index}>
                    <Col span={24} className="mt-4">
                      <LabelComponent label={`Investment Round ${index + 1}`} />
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        name={`rounds.${index}.startDate`}
                        disabled={false}
                        width="100%"
                        value={
                          formikConfirm?.values?.rounds[index]?.startDate
                            ? dayjs(
                                formikConfirm.values.rounds[index].startDate
                              )
                            : null
                        }
                        onChange={(date) => {
                          if (date) {
                            const formattedDate =
                              date.format("MM/DD/YYYY HH:mm");
                            console.log(formattedDate);
                            formikConfirm.setFieldValue(
                              `rounds.${index}.startDate`,
                              formattedDate
                            );
                          } else {
                            formikConfirm.setFieldValue(
                              `rounds.${index}.startDate`,
                              ""
                            );
                          }
                        }}
                        onBlur={() => {
                          const touchedRounds = formikConfirm.touched.rounds
                            ? [...formikConfirm.touched.rounds]
                            : [];
                          if (!touchedRounds[index]) {
                            touchedRounds[index] = {};
                          }
                          touchedRounds[index].startDate = true;

                          formikConfirm.setTouched({
                            ...formikConfirm.touched,
                            rounds: touchedRounds,
                          });
                        }}
                        maxDate={dayjs(item.endDate).subtract(1, "day")}
                        key={`startDate-${index}`}
                      />
                      {formikConfirm.touched.rounds?.[index]?.startDate &&
                      formikConfirm.errors.rounds &&
                      typeof formikConfirm.errors.rounds[index] === "object" &&
                      formikConfirm.errors.rounds[index].startDate ? (
                        <div className="text-red-600">
                          {formikConfirm.errors.rounds[index].startDate}
                        </div>
                      ) : null}
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        disabled={false}
                        width="100%"
                        value={
                          formikConfirm?.values?.rounds[index]?.endDate
                            ? dayjs(formikConfirm.values.rounds[index].endDate)
                            : null
                        }
                        onChange={(date) => {
                          if (date) {
                            const formattedDate =
                              date.format("MM/DD/YYYY HH:mm");
                            console.log(formattedDate);
                            formikConfirm.setFieldValue(
                              `rounds.${index}.endDate`,
                              formattedDate
                            );
                          } else {
                            formikConfirm.setFieldValue(
                              `rounds.${index}.endDate`,
                              ""
                            );
                          }
                        }}
                        onBlur={() => {
                          const touchedRounds = formikConfirm.touched.rounds
                            ? [...formikConfirm.touched.rounds]
                            : [];
                          if (!touchedRounds[index]) {
                            touchedRounds[index] = {};
                          }
                          touchedRounds[index].endDate = true;

                          formikConfirm.setTouched({
                            ...formikConfirm.touched,
                            rounds: touchedRounds,
                          });
                        }}
                        minDate={dayjs(item.startDate).add(1, "days")}
                        key={`endDate-${index}`}
                      />
                      {formikConfirm.touched.rounds?.[index]?.endDate &&
                      formikConfirm.errors.rounds &&
                      typeof formikConfirm.errors.rounds[index] === "object" &&
                      formikConfirm.errors.rounds[index].endDate ? (
                        <div className="text-red-600">
                          {formikConfirm.errors.rounds[index].endDate}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </div>
        );

      case "Reject":
        return (
          <div className="modal-content">
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {selectedProject?.basic_information.project_logo ? (
                        <img
                          src={selectedProject?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                          key={selectedProject?.basic_information.project_logo}
                        />
                      ) : (
                        <LogoComp size="small" key="logo" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {selectedProject?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {selectedProject?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <LabelComponent label="Reason *" />
              </Col>
              <Col span={24}>
                <TextAreaComp
                  name="rejectReason"
                  placeholder="Enter reason here..."
                  onChange={(e) => {
                    formikReject.setFieldValue("rejectReason", e.target.value);
                  }}
                  onBlur={formikReject.handleBlur}
                  value={formikReject.values.rejectReason}
                  key="rejectReason"
                />
                {formikReject.touched.rejectReason &&
                formikReject.errors.rejectReason ? (
                  <div className="text-red-600">
                    {formikReject.errors.rejectReason}
                  </div>
                ) : null}
              </Col>
            </Row>
          </div>
        );
      default:
        return null;
    }
  };

  const handleOpenModal = (modal_name: ModalName) => {
    setOpen(true);
    setModalName(modal_name);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size) {
      setPageSize(size);
    }
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const getFilteredData = (statusKey: string) => {
    return data.filter((project) => {
      const statusItem = status.find(
        (item) => item.id === project.statusId.toString()
      );
      return statusItem ? statusItem.value === statusKey : false;
    });
  };

  const getMenuItems = (): MenuProps["items"] => {
    const baseItems: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <div
            className="text-[#fff]"
            onClick={() => navigate(`/detail/` + selectedProject?.id)}
          >
            View detail
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div
            className="text-right text-[#53FF50]"
            onClick={() => handleOpenModal("Confirm")}
          >
            Approve
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div
            className="text-right text-[#FF5E5E]"
            onClick={() => handleOpenModal("Reject")}
          >
            Reject
          </div>
        ),
      },
      {
        key: "4",
        label: (
          <div
            className="text-right text-[#F4C349]"
            onClick={() => handleOpenModal("Delete")}
          >
            Delete
          </div>
        ),
      },
    ];

    // Remove items based on the active tab
    if (activeTab === "2") {
      // Approved
      return baseItems.filter((item) => item?.key !== "2");
    } else if (activeTab === "3") {
      // Rejected
      return baseItems.filter((item) => item?.key !== "3");
    }

    return baseItems;
  };

  const TableHead = (
    <>
      <tr>
        <th>Project</th>
        <th>Participants</th>
        <th>Total Raised</th>
        <th>Current Price</th>
        <th>Ath Since Ido</th>
        <th>Ended In</th>
        <th>Chain</th>
        <th></th>
      </tr>
    </>
  );

  const TableBody = (data: any) => {
    return (
      <>
        {data.map((item: any, index: any) => (
          <tr key={index}>
            <td>
              <div className="project-table-style">
                <div style={{ width: "40px", height: "40px" }}>
                  {item?.basic_information.project_logo ? (
                    <img
                      src={item.basic_information.project_logo}
                      width={"100%"}
                      height={"100%"}
                    />
                  ) : (
                    <LogoComp size="small" />
                  )}
                </div>
                <div>
                  <div>{item.basic_information.project_name}</div>
                  <div className="table-text">
                    {item.token_information.token_symbol}
                  </div>
                </div>
              </div>
            </td>
            <td>--</td>
            <td>{formatPrice(item.public_token_sale.total_amount)}</td>
            <td>--</td>
            <td>--</td>
            <td>
              <div>March 14th 2022</div>
              <div className="table-text">8:28 AM - UTC</div>
            </td>
            <td>
              <ChainIcon />
            </td>
            <td>
              <Dropdown
                menu={{ items: getMenuItems() }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Button onClick={() => setSelectedProject(item)}>
                  <MoreIcon />
                </Button>
              </Dropdown>
            </td>
          </tr>
        ))}
      </>
    );
  };

  const tabs = [
    {
      key: "1",
      label: "Pending Approval",
      children: (
        <Table
          data={getFilteredData("Pending")}
          onOpenModal={handleOpenModal}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          TableHead={TableHead}
          TableBody={TableBody}
          dropdownItems={getMenuItems()}
        />
      ),
    },
    {
      key: "2",
      label: "Approved",
      children: (
        <Table
          data={getFilteredData("Approve")}
          onOpenModal={handleOpenModal}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          dropdownItems={getMenuItems()}
          TableHead={TableHead}
          TableBody={TableBody}
        />
      ),
    },
    {
      key: "3",
      label: "Rejected",
      children: (
        <Table
          data={getFilteredData("Reject")}
          onOpenModal={handleOpenModal}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          dropdownItems={getMenuItems()}
          TableHead={TableHead}
          TableBody={TableBody}
        />
      ),
    },
  ];

  return (
    <div className="mr-auto ml-auto max-w-[1196px]">
      <div>
        <BreadCrumbComp
          className="mt-[30px]"
          items={[{ title: "Admin CP" }, { title: "Projects" }]}
        />
      </div>
      <div className="flex justify-between mt-[30px]">
        <h1 className="text-2xl font-bold text-white">Project List</h1>
        <div className="max-w-[250px]">
          <SearchComp placeholder="Search project" />
        </div>
      </div>
      <div className="mt-[20px]">
        <TabsComp
          defaultActiveKey="1"
          items={tabs}
          onChange={handleTabChange}
        />
      </div>
      <ModalComponents
        open={open}
        handleCancel={handleCancel}
        getTitle={getTitle}
        getContent={getContent}
        getFooter={getFooter}
        data={selectedProject}
      />
    </div>
  );
};

export default ProjectListPage;
