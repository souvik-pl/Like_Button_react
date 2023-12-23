import styles from "./Loader.module.css";

type LoaderProps = {
    color: string;
    size: number;
    thickness: number;
};

function Loader(props: LoaderProps) {
    return (
        <div
            className={styles.loader}
            style={{ width: `${props.size}px`, height: `${props.size}px` }}
        >
            <div style={{ borderTopColor: `${props.color}`, borderWidth: `${props.thickness}px` }}></div>
            <div style={{ borderTopColor: `${props.color}`, borderWidth: `${props.thickness}px` }}></div>
            <div style={{ borderTopColor: `${props.color}`, borderWidth: `${props.thickness}px` }}></div>
            <div style={{ borderTopColor: `${props.color}`, borderWidth: `${props.thickness}px` }}></div>

        </div>
    )
}

export default Loader;