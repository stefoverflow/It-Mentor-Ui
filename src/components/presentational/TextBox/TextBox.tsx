import TextBoxModel from "../../../models/ui/textbox";
/**
 * 
 * @params placeholder: string, value: string, validation: string, setValue: any
 */
const TextBox = (props: TextBoxModel) => {
  return (
    <input 
        type="text" 
        value={props.value} 
        placeholder={props.placeholder} 
        onChange={props.setValue}
    />
  );
};

export default TextBox;
