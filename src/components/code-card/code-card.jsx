import "./code-card.css";
import generateTOTP from "../../utils/totp-generator";
import {toast} from "react-toastify";

export default function CodeCard(props) {
  const { code } = props;
  const secret = generateTOTP(code.key);

  const onCardClick = () => {
    navigator.clipboard
      .writeText(secret)
      .then(() => toast.success("Code was copied!"));
  }

  return (
    <div
      className="code-card"
      onClick={onCardClick}
    >
      <p className="code-name">{code.name}</p>
      <p className="secret-code">{secret}</p>
    </div>
  );
}