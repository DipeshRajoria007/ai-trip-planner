import TicketHead from "../../../assets/ticket-head.svg";
import TicketBody from "../../../assets/ticket-body.svg";
import TicketBodyLarge from "../../../assets/ticket-body-large.svg";
import TicketBodyMedium from "../../../assets/ticket-body-medium.svg";
import "./style.css";
import Button from "../Button";
import Option from "../Option";
const Ticket = ({
  headerText,
  inputPlaceholder,
  inputType,
  options,
  CTAButton,
  ticketNumber,
  active,
  onButtonClick,
  style,
  inputValue,
  handleInputChange,
  bodySize,
}) => {
  const onChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    handleInputChange(value);
  };
  const onSelectOption = (value) => {
    handleInputChange(value);
  };

  return (
    <div className={`ticket ${active}`} style={style}>
      <div className="ticket-head">
        <div className="card-number-wrapper">{ticketNumber}/5</div>
        <img src={TicketHead} alt="ticket" />
        <div className="ticket-head-text">{headerText}</div>
      </div>
      <div className="ticket-body-wrapper">
        {!bodySize ? (
          <img className="ticket-body-bg" src={TicketBody} alt="ticket" />
        ) : bodySize === "large" ? (
          <img className="ticket-body-bg" src={TicketBodyLarge} alt="ticket" />
        ) : (
          <img className="ticket-body-bg" src={TicketBodyMedium} alt="ticket" />
        )}
        <div className="ticket-body-content">
          {inputType === "text" || inputType === "date" ? (
            <div className="input-container">
              <input
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={onChange}
              />
            </div>
          ) : inputType === "options" ? (
            <div
              className={
                bodySize === "large"
                  ? `option-container-large`
                  : `option-container-medium`
              }
            >
              {options?.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  isSelected={inputValue === option.value}
                  onSelect={onSelectOption}
                />
              ))}
            </div>
          ) : null}
          <div className="button-wrapper">
            <Button
              text={CTAButton}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
