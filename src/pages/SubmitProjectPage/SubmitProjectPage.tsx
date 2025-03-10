import { useState } from "react";
import * as Yup from "yup";
import { ButtonComponent, CollapseComponent } from "../../components";
import {
  BasicInformation,
  ProjectDetails,
  Links,
  TokenInformation,
  Capital,
  PublicTokenSale,
  StatusOfPartnerships,
  Captcha,
  Header,
} from "./Section";

import { useFormik, FormikProps } from "formik";
import { Project } from "../../types/type";
import { toast } from "react-toastify";
import { postNewProject } from "../../service/service";
import { useNavigate } from "react-router";

const initialValues: Project = {
  basic_information: {
    project_name: "",
    contact_name: "",
    contact_telegram_handle: "",
    email: "",
    project_logo: "",
    project_cover: "",
  },
  project_detail: {
    start_date: "",
    tags: [],
    project_description: "",
    ecosystem: "",
    current_community: "",
    size_existing_user: "",
  },
  links: {
    project_website: "",
    project_telegram: "",
    project_twitter: "",
    project_medium: "",
    project_other_link: "",
  },
  token_information: {
    token_name: "",
    token_symbol: "",
    token_contract_address: "",

    tokennomics: [
      { tokennomics_title: "Seed", tokennomics_value: 5.0 },
      { tokennomics_title: "Partners & Advisors", tokennomics_value: 5.0 },
      { tokennomics_title: "Team & Development", tokennomics_value: 10.0 },
      {
        tokennomics_title: "Community & Ecosystem Growth",
        tokennomics_value: 25.0,
      },
      { tokennomics_title: "Reserve", tokennomics_value: 1.85 },
      { tokennomics_title: "Liquidity", tokennomics_value: 15.0 },
      { tokennomics_title: "Public Round", tokennomics_value: 3.15 },
      { tokennomics_title: "Staking Rewards", tokennomics_value: 25.0 },
      { tokennomics_title: "Mining Rewards", tokennomics_value: 10.0 },
    ],
  },
  capital: {
    rounds: [],
  },
  public_token_sale: {
    total_amount: undefined,
    amount_through_Galaxy: undefined,
    flexible_amount: "1",
    planned_FDV: undefined,
    other_information: "",
    sale: "",
  },
  status_of_partnerships: [],
  statusId: 0,
  reject_reason: "",
};

const validationSchema = Yup.object({
  basic_information: Yup.object({
    project_name: Yup.string().required("Project name required!"),
    contact_name: Yup.string().required("Contact name required!"),
    contact_telegram_handle: Yup.string()
      .required("Telegram account required!")
      .matches(/^(?:@)?\w{5,32}$/, "Please enter a valid telegram account!"),
    email: Yup.string()
      .required("Email required!")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email!"
      ),
    project_logo: Yup.string().required("Project logo required!"),
  }),

  project_detail: Yup.object({
    start_date: Yup.string().required("Start date required!"),
    project_description: Yup.string().required("Project description required!"),
    ecosystem: Yup.string().required("Ecosystem required!"),
    current_community: Yup.string().required("Current community required!"),
    size_existing_user: Yup.string().required("Size existing user required!"),
  }),

  links: Yup.object({
    project_website: Yup.string()
      .required("Project website required!")
      .matches(
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        "Please enter a valid website!"
      ),
    project_telegram: Yup.string()
      .required("Project telegram required!")
      .matches(
        /^(?:@|(?:https?:\/\/)?t(?:elegram)?\.me\/)([\w\d_]{5,})$/,
        "Please enter a valid telegram link!"
      ),
    project_twitter: Yup.string()
      .required(" Project twitter required!")
      .matches(
        /(https:\/\/twitter.com\/(?!\w+\/)(\w+))/,
        "Please enter a valid twitter link!"
      ),
    project_medium: Yup.string()
      .required("Project medium required!")
      .matches(
        /https:\/\/medium\.com\/@[\w-]+/,
        "Please enter a valid medium link!"
      ),
    project_other_link: Yup.string().matches(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      "Please enter a valid other link!"
    ),
  }),

  token_information: Yup.object({
    token_name: Yup.string().required("Token name required"),
    token_symbol: Yup.string()
      .required("Token symbol required")
      .max(3, "Please enter a valid token symbol eg. ETH, BTC, APR ...!"),
    token_contract_address: Yup.string()
      .required("Required")
      .matches(
        /^0x[a-fA-F0-9]{40}$/,
        "Please enter a valid token contract address!"
      ),
  }),

  public_token_sale: Yup.object({
    total_amount: Yup.number().required("Total amount required"),
    amount_through_Galaxy: Yup.number().required("Amount Galaxy equired"),
    planned_FDV: Yup.number().required("Planned FDV required"),
  }),
});

const SubmitProjectPage = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const navigate = useNavigate();
  const formik: FormikProps<Project> = useFormik<Project>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      try {
        postNewProject(values);
        navigate("/list");
        toast.success("Submit Project Success");
        console.log(`Project Submit Value: `, values);
      } catch (error) {
        toast.error("Submit Project Fail");
        console.log(error);
      }
    },
  });

  /**
   * Function createTouchedObject:
   * lý do cần function này là với mục đích đánh dấu những trường
   * require trong formik mà chưa nhập giá trị để báo lỗi
   *
   * @param values - giá trị của của mảng fomick
   * @returns trả về một object đã đáng dấu là chạm vào cac trường
   */
  const createTouchedObject = (values: any) => {
    return Object.keys(values).reduce((acc: any, key: string) => {
      acc[key] =
        typeof values[key] === "object" && !Array.isArray(values[key])
          ? createTouchedObject(values[key])
          : true;
      return acc;
    }, {});
  };
  /**
   * Function handleSubmit:
   * mục đích là một middleware đánh dấu giá trị formik chưa nhập và báo các
   * message tương ứng yêu cầu nhập hết các trường require hay báo việc xác
   * thực captcha
   *
   * @param event - event submit
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Đánh dấu tất cả các trường là đã chạm vào
    formik.setTouched(createTouchedObject(formik.values)).then(() => {
      // Kiểm tra lại giá trị các trường sau khi đã đánh dấu là chạm vào
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          toast.error("Please fill in all required fields");
        } else if (!captchaValue) {
          toast.error("Please complete the CAPTCHA");
        } else if (captchaValue && Object.keys(errors).length === 0) {
          formik.handleSubmit();
        }
      });
    });
  };

  return (
    <div className="submit-container w-full mx-auto">
      <div className="xl:px-[122px] md:px-[80px] xs-pd-20 mt-8">
        <div className="mb-12">
          <Header />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <CollapseComponent
              title="Basic Information"
              child={<BasicInformation formik={formik} />}
              active
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Project Details"
              child={<ProjectDetails formik={formik} />}
              active
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Links"
              child={<Links formik={formik} />}
              active
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Token Information"
              child={<TokenInformation formik={formik} />}
              active
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Capital"
              child={<Capital formik={formik} />}
              active
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Public Token Sale"
              child={<PublicTokenSale formik={formik} />}
              active
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Status of Partnerships"
              child={<StatusOfPartnerships formik={formik} />}
              active
            />
          </div>
          <div className="mt-5">
            <Captcha onCaptchaChange={setCaptchaValue} />
          </div>
          <div className="my-5">
            <ButtonComponent
              htmlType="submit"
              button_content="Submit Information"
              arrow_icon={true}
              background_color="Gradient"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectPage;
