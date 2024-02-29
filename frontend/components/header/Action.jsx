const Action = ({ setModalOpen, buttonText }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-full bg-[#194b38] py-3 hover:bg-opacity-95">
                <span className="font-medium text-white">{buttonText}</span>
            </button>
        </div>
    )
}

export default Action
