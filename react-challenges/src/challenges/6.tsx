/**
 * 1. We've got a bunch of different errors below. See if you can figure out why the errors are happening
 * 
 * 2. Once you understand why the errors are happening, see if you can find a way to fix them by changing the definition of TableProps.
 */

interface TableProps{
    // renderRow: (index: number) => React.ReactNode; 
    // or
    renderRow: React.FC<number> 
}

const Table = (props: TableProps) => {
    return <div>{[0,1,3].map(props.renderRow)}</div>
}

export const Parent = () => {
    return (
        <>
        <Table renderRow={(index) => {
            return null;
        }}/> 
        </>
    )
}