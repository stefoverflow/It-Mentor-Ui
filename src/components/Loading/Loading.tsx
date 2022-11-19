import { Icon, Loader } from "semantic-ui-react";

interface LoadingProps{
    submitting: boolean;
    submitSucceeded: boolean;
    buttonText: string;
}

const Loading = ({submitting, submitSucceeded, buttonText}: LoadingProps) => {
    return (
        <div>
            {submitting ? <Loader active inverted size="big" /> : null}
            {submitSucceeded? <Icon className="check icon" /> : buttonText}
        </div>
    ) 
}

export default Loading;