import ReCAPTCHA from "react-google-recaptcha";
import "./Action.scss";

interface ActionProps {
  onCaptchaChange: (value: any) => void;
}

const Action = ({ onCaptchaChange }: ActionProps) => {
  function onChange(value: any) {
    console.log("Captcha value:", value);
    onCaptchaChange(value);
  }

  return (
    <div className="captcha">
      <ReCAPTCHA
        sitekey="6LfOmBUqAAAAAEfFypMWDPKZTNbdt-q2ymV1K-hV"
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};

export default Action;
