import styles from './_diagram.module.css';

function Diagram(props) {
    return (
        <div className={styles.DiagramBox}>
            <div className='mxgraph' style={{width: '300px', border: '1px solid'}}
                data-mxgraph={'{"url":"/diagrams/' + props.name + '","maxImageSize":"300"}'}></div>
        </div>
    );
}

export default Diagram;