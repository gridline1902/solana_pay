import { format } from 'date-fns'

const TransactionItem = ({ id, to, description, transactionDate, amount, toggleTransactionDetailModal }) => {
    const onItemClick = () => {
        toggleTransactionDetailModal(true, id)
    }

    return (
        <tr onClick={onItemClick} className="cursor-pointer hover:bg-[#ddc490]">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">                 
                    <img className="h-8 w-8 rounded-full object-cover" src={to.avatar} alt="" /> 
                    <p className="truncate text-sm text-gray-800">{to.name}</p>                        
                </div>
            </td>

            <td className="px-6 py-4 text-sm text-gray-800">{description}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{format(new Date(transactionDate), 'MMM d')}</td>
            <td className="px-6 py-4 text-right text-sm font-medium text-gray-800">{amount} SOL</td>
        </tr>
    )
}

export default TransactionItem