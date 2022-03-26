import React from 'react'
import styles from './moe-tools.m.less';

interface MoeToolsProps {
    children: React.ReactNode;
}

export const MoeTools = (props: MoeToolsProps) => {
    return <div className={styles.tools}>
        {props.children}
    </div>
}