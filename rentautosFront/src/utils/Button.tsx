export default function Button(props:buttonProps ){
return(
<button type={props.type} className={props.className}
disabled={props.disabled}
onClick={props.onClick}
> {props.children}</button>

)

}

interface buttonProps{
children: React.ReactNode,
onClick?(): void;
disabled:boolean;
type: "button" | "submit";
className: string;

}

Button.defaultProps={
disabled: false,
type: "button",
className: 'btn btn-primary'
}
